import React, { useState } from "react";
import Image from "next/image";
import CloseIcon from "../../assets/images/CloseIcon.svg";
import UserIcon from "../../assets/images/UserIcon.svg";
import ChevronDown from "../../assets/images/FillArrowDownBlack.svg";
import CheckIcon from "../../assets/images/CheckIconBlue.svg";

function AssignTicketPopup({ onClose, onSave }) {
  const users = [
    { id: 1, name: "Joseph Anderson", avatar: UserIcon },
    { id: 2, name: "William Martinez", avatar: UserIcon },
    { id: 3, name: "Jelani Chidubem", avatar: UserIcon },
    { id: 4, name: "Trung Phượng An", avatar: UserIcon },
    { id: 5, name: "Yasmine Horvath", avatar: UserIcon },
    { id: 6, name: "Tomás Álvarez", avatar: UserIcon },
  ];

  const [selectedUsers, setSelectedUsers] = useState([
    { id: 2, name: "William", avatar: UserIcon },
    { id: 7, name: "Trang", avatar: UserIcon },
    { id: 8, name: "Lorem", avatar: UserIcon },
  ]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [additionalInfo, setAdditionalInfo] = useState("");

  const toggleUser = (user) => {
    if (selectedUsers.find((u) => u.id === user.id)) {
      setSelectedUsers(selectedUsers.filter((u) => u.id !== user.id));
    } else {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  const removeUser = (id) => {
    setSelectedUsers(selectedUsers.filter((u) => u.id !== id));
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-1000 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full md:max-w-[480px] p-6 text-black relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-text-1">Assign Ticket</h2>
          <button
            onClick={onClose}
            className="cursor-pointer p-1 rounded-full transition-colors hover:bg-gray-100"
          >
            <Image src={CloseIcon} alt="close" width={24} height={24} />
          </button>
        </div>

        {/* Assign Section */}
        <div className="mb-5 relative">
          <label className="block text-sm font-semibold text-text-3 mb-2">
            Assign
          </label>
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between border border-black/16 rounded-lg p-2 min-h-[48px] cursor-pointer transition-colors bg-white"
          >
            <div className="flex overflow-x-auto whitespace-nowrap gap-2">
              {selectedUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center gap-1.5 bg-black/4 rounded-lg px-2 py-1"
                >
                  <div className="w-5 h-5 rounded-full overflow-hidden bg-gray-100">
                    <Image
                      src={user.avatar}
                      alt={user.name}
                      width={20}
                      height={20}
                      className="min-w-4"
                    />
                  </div>
                  <span className="text-sm text-black">{user.name}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeUser(user.id);
                    }}
                    className="hover:text-red-500 cursor-pointer transition-colors"
                  >
                    <Image
                      src={CloseIcon}
                      alt="remove"
                      width={16}
                      height={16}
                      className="min-w-5 invert"
                    />
                  </button>
                </div>
              ))}
              {selectedUsers.length === 0 && (
                <span className="text-sm text-text-4 px-2">
                  Select users...
                </span>
              )}
            </div>
            <Image
              src={ChevronDown}
              alt="down"
              width={20}
              height={20}
              className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
            />
          </div>

          {/* User Dropdown */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-black/8 rounded-lg shadow-lg z-50 overflow-hidden">
              <div className="max-h-[260px] overflow-y-auto space-y-1 scrollbar-hide p-1">
                {users.map((user) => {
                  const isSelected = selectedUsers.find(
                    (u) => u.id === user.id,
                  );
                  return (
                    <div
                      key={user.id}
                      onClick={() => toggleUser(user)}
                      className={`flex items-center justify-between p-2 hover:bg-black/4 rounded-lg cursor-pointer transition-colors ${isSelected ? "bg-black/4" : ""}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 border border-black/5">
                          <Image
                            src={user.avatar}
                            alt={user.name}
                            width={40}
                            height={40}
                          />
                        </div>
                        <span className="text-sm text-black">{user.name}</span>
                      </div>
                      {isSelected && (
                        <Image
                          src={CheckIcon}
                          alt="selected"
                          width={24}
                          height={24}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Additional Information */}
        <div className="mb-12">
          <label className="block text-sm font-semibold text-text-3 mb-2">
            Additional Information
          </label>
          <textarea
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            placeholder="Provide additional information if any..."
            className="w-full border border-black/16 focus:border-main rounded-lg p-4 text-sm min-h-[120px] focus:outline-nones placeholder:text-text-4 resize-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 rounded-lg cursor-pointer hover:bg-gray-100 transition-all duration-300 border border-black/16 py-3 font-bold text-sm text-text-1"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave({ selectedUsers, additionalInfo })}
            className="flex-1 rounded-lg cursor-pointer bg-main hover:bg-main/90 text-white transition-all duration-300 py-3 font-bold text-sm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AssignTicketPopup;
