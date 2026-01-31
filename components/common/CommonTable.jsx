import React, { useState } from "react";
import Image from "next/image";
import ArrowDown from "../../components/assets/images/ChevronLeftBlack.svg"
// Simple sort icon if not available in assets
const SortIcon = ({ direction }) => (
    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5 0L9.33013 4.5H0.669873L5 0Z"
            fill="white"
            fillOpacity={direction === "asc" ? "1" : "0.4"}
        />
        <path
            d="M5 12L0.669873 7.5H9.33013L5 12Z"
            fill="white"
            fillOpacity={direction === "desc" ? "1" : "0.4"}
        />
    </svg>
);

function CommonTable({ columns, data, selectable = false, onSelectionChange }) {
    const [selectedRows, setSelectedRows] = useState([]);
    const [prevData, setPrevData] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
    const itemsPerPage = 8; // Match screenshot "Showing 8 results"

    // Reset selection when data changes
    if (data !== prevData) {
        setPrevData(data);
        setSelectedRows([]);
    }

    // Handle Sort
    const requestSort = (key) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        } else if (sortConfig.key === key && sortConfig.direction === "desc") {
            // Optional: toggle back to null or stay descending. Let's cycle back to default (unsorted) or stick to desc. 
            // Standard table behavior often cycles: asc -> desc -> unsorted(optional). 
            // Let's go asc -> desc -> asc for simplicity, or asc -> desc.
            direction = "asc";
        }
        setSortConfig({ key, direction });
    };

    // Sort Data
    const sortedData = React.useMemo(() => {
        let sortableItems = [...data];
        if (sortConfig.key !== null) {
            sortableItems.sort((a, b) => {
                // Handle nested accessors if needed, currently flat or handled by accessor string
                const col = columns.find((c) => c.accessor === sortConfig.key);
                let itemA = a[sortConfig.key];
                let itemB = b[sortConfig.key];

                // Use custom sortValue if defined
                if (col && col.sortValue) {
                    itemA = col.sortValue(a);
                    itemB = col.sortValue(b);
                }

                // Handle string case insensitivity
                if (typeof itemA === 'string') itemA = itemA.toLowerCase();
                if (typeof itemB === 'string') itemB = itemB.toLowerCase();

                // Basic string/number comparison
                if (itemA < itemB) {
                    return sortConfig.direction === "asc" ? -1 : 1;
                }
                if (itemA > itemB) {
                    return sortConfig.direction === "asc" ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [data, sortConfig, columns]);

    // Handle Select All
    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(sortedData.map((_, index) => index));
            if (onSelectionChange) onSelectionChange(sortedData);
        } else {
            setSelectedRows([]);
            if (onSelectionChange) onSelectionChange([]);
        }
    };

    // Handle Single Row Select
    const handleSelectRow = (index) => {
        let newSelected = [...selectedRows];
        if (newSelected.includes(index)) {
            newSelected = newSelected.filter((i) => i !== index);
        } else {
            newSelected.push(index);
        }
        setSelectedRows(newSelected);
        if (onSelectionChange) {
            // Map selected indices back to actual sorted data items
            // Note: This simple index tracking works if data doesn't re-sort dynamically while selecting. 
            // Ideally, track by ID. For now preserving index behavior.
            onSelectionChange(newSelected.map((i) => sortedData[i]));
        }
    };

    // Pagination Logic
    const totalPages = Math.ceil(sortedData.length / itemsPerPage);
    const currentData = sortedData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="w-full">
            <div className="overflow-x-auto rounded-lg border border-[#EAECF0]">
                <table className="w-full min-w-max border-collapse">
                    <thead>
                        <tr className="bg-[var(--color-main)] select-none text-white text-left">
                            {selectable && (
                                <th className="p-4 w-12 rounded-tl-lg relative flex justify-center items-center ">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-5 rounded border-gray-300 cursor-pointer accent-[var(--color-main)]"
                                        onChange={handleSelectAll}
                                        checked={
                                            sortedData.length > 0 && selectedRows.length === sortedData.length
                                        }
                                    />
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-5 w-0.5 bg-white"></div>
                                </th>
                            )}
                            {columns.map((col, idx) => (
                                <th
                                    key={idx}
                                    onClick={() => col.sortable && requestSort(col.accessor)}
                                    className={`p-4 text-[14px] font-semibold tracking-[-0.006em] text-left relative ${idx === columns.length - 1 && !selectable
                                        ? "rounded-tr-lg"
                                        : ""
                                        } ${col.sortable ? "cursor-pointer hover:bg-white/10" : ""}`}
                                >
                                    <div className="flex items-center justify-between w-full gap-2">
                                        {col.header}
                                        {col.sortable && (
                                            <SortIcon
                                                direction={
                                                    sortConfig.key === col.accessor
                                                        ? sortConfig.direction
                                                        : null
                                                }
                                            />
                                        )}
                                    </div>
                                    {idx !== columns.length - 1 && (
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-5 w-0.5 bg-white"></div>
                                    )}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-[#EAECF0]">
                        {currentData.map((row, rowIndex) => {
                            // Calculate actual index based on page
                            const actualIndex = (currentPage - 1) * itemsPerPage + rowIndex;
                            const isSelected = selectedRows.includes(actualIndex);

                            return (
                                <tr
                                    key={rowIndex}
                                    className={`${isSelected ? "bg-[#F9FAFB]" : ""} hover:bg-[#F9FAFB]`}
                                >
                                    {selectable && (
                                        <td className="p-4 w-12">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-5 rounded border-gray-300 cursor-pointer accent-[#00264D]"
                                                checked={isSelected}
                                                onChange={() => handleSelectRow(actualIndex)}
                                            />
                                        </td>
                                    )}
                                    {columns.map((col, colIndex) => (
                                        <td key={colIndex} className="p-4 text-[14px] font-medium leading-[20px] tracking-[-0.006em] text-[#404040] align-middle text-left">
                                            {col.render
                                                ? col.render(row)
                                                : row[col.accessor]}
                                        </td>
                                    ))}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex mt-6 items-center justify-between">
                <p className="text-sm font-medium text-[#404040]">
                    Showing {currentData.length} results
                </p>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="p-2 w-8 h-8 border cursor-pointer border-[#9E9E9E] rounded-lg disabled:opacity-50 hover:bg-gray-50"
                    >
                        <Image src={ArrowDown} alt="arrow" width={16} height={16} />
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`w-8 h-8 cursor-pointer border rounded-lg text-sm font-medium ${currentPage === i + 1
                                ? "bg-[var(--color-main)] text-white border-transparent"
                                : "text-black hover:text-white border-[#9E9E9E] hover:bg-[var(--color-main)]"
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="p-2 w-8 h-8 cursor-pointer border border-[#9E9E9E] rounded-lg disabled:opacity-50 hover:bg-gray-50"
                    >
                        <Image src={ArrowDown} alt="arrow" width={16} height={16} className="rotate-180" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CommonTable;