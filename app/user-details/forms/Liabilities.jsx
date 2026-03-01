"use client"
import React, { useState, useEffect } from 'react'
import Refresh from '@/components/assets/images/RefreshIcon.svg'
import Image from 'next/image'
import Commondropdown from '@/components/common/Commondropdown1.jsx'
import PlusBlueIcon from '@/components/assets/images/PlusBlueIcon.svg'
import CrossRedIcon from '@/components/assets/images/CrossRedIcon.svg'

function Liabilities({ onSave, onSkip, onBack, onDataChange, initialData }) {
    const [hasDebt, setHasDebt] = useState(initialData?.hasDebt || 'yes')
    const [liabilities, setLiabilities] = useState(initialData?.liabilitiesList || [])
    const [currentLiability, setCurrentLiability] = useState({
        creditorName: "",
        debtType: "",
        amount: "",
        additionalInfo: ""
    })
    const [errors, setErrors] = useState({})

    const debtTypeOptions = [
        "Mortgage",
        "Loan",
        "Credit Card",
        "Business Loan",
        "Tax",
        "Other",
        "Add"
    ]

    const handleChange = (field, value) => {
        setCurrentLiability(prev => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: null }))
        }
    }

    const validate = () => {
        const newErrors = {}
        if (!currentLiability.creditorName) newErrors.creditorName = "Creditor Name is required"
        if (!currentLiability.debtType) newErrors.debtType = "Type of Debt is required"
        if (!currentLiability.amount) newErrors.amount = "Outstanding Amount is required"
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleAdd = () => {
        if (validate()) {
            setLiabilities(prev => [...prev, { ...currentLiability, id: Date.now() }])
            setCurrentLiability({
                creditorName: "",
                debtType: "",
                amount: "",
                additionalInfo: ""
            })
            setErrors({})
        }
    }

    const handleRemove = (id) => {
        setLiabilities(prev => prev.filter(l => l.id !== id))
    }

    const handleSave = () => {
        if (hasDebt === 'yes' && liabilities.length === 0) {
            if (!validate()) {
                setErrors(prev => ({ ...prev, global: "Please add at least one debt or complete the current entry" }))
            } else {
                setErrors(prev => ({ ...prev, global: "Please click 'Add' to include this debt in your list" }))
            }
            return
        }
        onSave()
    }

    // Emit live data for preview
    useEffect(() => {
        if (onDataChange) onDataChange({ hasDebt, liabilitiesList: liabilities })
    }, [hasDebt, liabilities])

    return (
        <div className='bg-[#FAFAFA] rounded-lg p-6'>
            <div className='flex items-center justify-between gap-4 flex-wrap w-full mb-5'>
                <h2 className='text-3xl font-bold text-text-1'>Liabilities</h2>
                <button className='text-black flex text-xs items-center gap-1 cursor-pointer'>
                    Auto Saved
                    <Image src={Refresh} alt="Refresh" width={16} height={16} className='w-4 h-4' />
                </button>
            </div>

            <p className='text-text-5 text-base md:text-xl mb-4'>
                List your major assets and debts to help executors identify your estate.
            </p>

            <div className='mb-4'>
                <h3 className='text-lg font-bold text-text-1 mb-4'>Debts & Liabilities</h3>
                <p className='text-text-1 font-medium mb-1.5 text-sm'>Do you have any outstanding loans, mortgages, or debts?</p>
                <div className='flex gap-6 mt-2'>
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <div className="relative flex items-center">
                            <input
                                type="radio"
                                name="hasDebt"
                                value="yes"
                                checked={hasDebt === 'yes'}
                                onChange={() => setHasDebt('yes')}
                                className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                            />
                        </div>
                        <span className='text-sm font-medium text-text-1'>Yes</span>
                    </label>
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <div className="relative flex items-center">
                            <input
                                type="radio"
                                name="hasDebt"
                                value="no"
                                checked={hasDebt === 'no'}
                                onChange={() => setHasDebt('no')}
                                className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                            />
                        </div>
                        <span className='text-sm font-medium text-text-1'>No</span>
                    </label>
                </div>
            </div>

            {hasDebt === 'yes' && (
                <div className='space-y-4'>
                    <div>
                        <label className='block text-sm font-medium text-text-1 mb-1.5'>Creditor Name</label>
                        <input
                            type="text"
                            className={`w-full bg-white text-black border ${errors.creditorName ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7`}
                            placeholder="Enter Creditor Name"
                            value={currentLiability.creditorName}
                            onChange={(e) => handleChange("creditorName", e.target.value)}
                        />
                        {errors.creditorName && <p className='text-red-500 text-xs mt-1'>{errors.creditorName}</p>}
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-text-1 mb-1.5'>Type of Debt</label>
                        <Commondropdown
                            options={debtTypeOptions}
                            value={currentLiability.debtType}
                            onChange={(val) => handleChange("debtType", val)}
                            placeholder="Mortgage / Loan / Credit Card / Business Loan / Tax / Other / Add"
                            className={`w-full py-2.5! text-text-4 ${errors.debtType ? 'border-red-500' : ''}`}
                        />
                        {errors.debtType && <p className='text-red-500 text-xs mt-1'>{errors.debtType}</p>}
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-text-1 mb-1.5'>Outstanding Amount (£)</label>
                        <input
                            type="text"
                            className={`w-full bg-white text-black border ${errors.amount ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7`}
                            placeholder="£0.00"
                            value={currentLiability.amount}
                            onChange={(e) => handleChange("amount", e.target.value.replace(/[^0-9.]/g, ''))}
                        />
                        {errors.amount && <p className='text-red-500 text-xs mt-1'>{errors.amount}</p>}
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-text-1 mb-1.5'>Additional Information</label>
                        <textarea
                            rows={4}
                            className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7 resize-none'
                            placeholder="Additional information if any..."
                            value={currentLiability.additionalInfo}
                            onChange={(e) => handleChange("additionalInfo", e.target.value)}
                        />
                    </div>

                    {liabilities.length > 0 && (
                        <div className="space-y-3 mt-4">
                            <h4 className='text-sm font-bold text-text-1'>Added Liabilities</h4>
                            {liabilities.map((item) => (
                                <div key={item.id} className="bg-white p-4 rounded-lg border border-gray-200 flex justify-between items-center shadow-sm">
                                    <div className="min-w-0 pr-4">
                                        <p className="font-bold text-text-1 truncate">{item.creditorName}</p>
                                        <p className="text-sm text-text-5 truncate">{item.debtType} • £{item.amount}</p>
                                    </div>
                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="p-1 hover:bg-red-50 rounded-lg group transition-colors"
                                    >
                                        <Image src={CrossRedIcon} alt="Remove" width={20} height={20} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className='flex items-center gap-3'>
                        <button
                            onClick={handleAdd}
                            className='flex cursor-pointer text-base font-semibold items-center gap-2 px-8.5 py-2.5 border border-[#003966] text-[#003966] rounded-lg hover:bg-[#F0F7FF] transition-colors shadow-sm'
                        >
                            <Image src={PlusBlueIcon} alt="Add" width={18} height={18} />
                            Add
                        </button>
                        <button
                            onClick={() => {
                                if (liabilities.length > 0) {
                                    handleRemove(liabilities[liabilities.length - 1].id)
                                }
                            }}
                            className='flex items-center gap-2 px-5 py-2.5 cursor-pointer rounded-lg border border-[#FDA29B] text-[#D92D20] text-base font-semibold hover:bg-red-50 transition-colors shadow-sm'
                        >
                            <Image src={CrossRedIcon} alt="Remove" width={18} height={18} />
                            Remove
                        </button>
                    </div>
                    {errors.global && <p className='text-red-500 text-sm mt-3 font-medium'>{errors.global}</p>}
                </div>
            )}

            <div className='flex items-center flex-wrap gap-4 mt-4'>
                <button
                    onClick={onBack}
                    className='px-8 py-2.5 rounded-lg border border-main hover:border-main/80 hover:bg-main cursor-pointer text-main font-bold hover:text-white transition-colors'
                >
                    Back
                </button>
                <button
                    onClick={handleSave}
                    className='cursor-pointer flex-1 px-6 py-2.5 rounded-lg bg-main text-white font-medium whitespace-nowrap hover:bg-main/85 transition-colors w-full md:w-auto text-center'
                >
                    Save and Continue
                </button>
                <button
                    onClick={onSkip}
                    className='px-8 py-2.5 rounded-lg border border-main hover:border-main/80 hover:bg-main cursor-pointer text-main font-bold hover:text-white transition-colors'
                >
                    Skip
                </button>
            </div>
        </div>
    )
}

export default Liabilities