"use client"
import React, { useState } from 'react'
import Refresh from '@/components/assets/images/RefreshIcon.svg'
import Image from 'next/image'
import Commondropdown from '@/components/common/Commondropdown1.jsx'
import PlusBlueIcon from '@/components/assets/images/PlusBlueIcon.svg'
import CrossRedIcon from '@/components/assets/images/CrossRedIcon.svg'

function Residual({ onSave, onSkip, onBack }) {
    const [residueList, setResidueList] = useState([])
    const [currentResidue, setCurrentResidue] = useState({
        fullName: "",
        relationship: "",
        description: "",
        additionalInfo: ""
    })
    const [errors, setErrors] = useState({})

    const fullNameOptions = ["Sarah Johnson", "John Doe", "Add Custom"]
    const relationshipOptions = [
        "Son", "Daughter", "Step-son", "Step-daughter", "Brother", "Sister",
        "Step-brother", "Step-sister", "Mother", "Father", "Grandmother",
        "Grandfather", "Aunt", "Uncle", "Cousin", "Niece", "Nephew",
        "Spouse", "Partner", "Friend", "Other", "Add"
    ]

    const handleChange = (field, value) => {
        setCurrentResidue(prev => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: null }))
        }
    }

    const validate = () => {
        const newErrors = {}
        if (!currentResidue.fullName) newErrors.fullName = "Full Name is required"
        if (!currentResidue.relationship) newErrors.relationship = "Relationship is required"
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleAdd = () => {
        if (validate()) {
            setResidueList(prev => [...prev, { ...currentResidue, id: Date.now() }])
            setCurrentResidue({
                fullName: "",
                relationship: "",
                description: "",
                additionalInfo: ""
            })
        }
    }

    const handleRemove = (id) => {
        setResidueList(prev => prev.filter(item => item.id !== id))
    }

    const handleSave = () => {
        if (residueList.length === 0) {
            if (!validate()) {
                setErrors(prev => ({ ...prev, global: "Please add at least one heir or complete the current entry" }))
            } else {
                setErrors(prev => ({ ...prev, global: "Please click 'Add' to include this heir in your list" }))
            }
            return
        }
        onSave()
    }

    return (
        <div className='bg-[#FAFAFA] rounded-lg p-6'>
            <div className='flex items-center justify-between gap-4 flex-wrap w-full mb-5'>
                <h2 className='text-3xl font-bold text-text-1'>Residual Estate</h2>
                <button className='text-black flex text-xs items-center gap-1 cursor-pointer'>
                    Auto Saved
                    <Image src={Refresh} alt="Refresh" width={16} height={16} className='w-4 h-4' />
                </button>
            </div>

            <p className='text-text-5 text-base md:text-xl mb-4'>
                Decide who will receive the remainder of your estate after debts and gifts are settled.
            </p>

            <div className='mb-2'>
                <p className='text-text-1 font-medium mb-1.5 text-sm'>Who will inherit the remainder of your estate?</p>

                <div className='space-y-4'>
                    <div>
                        <label className='block text-sm font-medium text-text-1 mb-1.5'>Full Name</label>
                        <Commondropdown
                            options={fullNameOptions}
                            value={currentResidue.fullName}
                            onChange={(val) => handleChange("fullName", val)}
                            placeholder="Sarah Johnson/Add Custom"
                            className={`w-full py-2.5! text-text-4 ${errors.fullName ? 'border-red-500' : ''}`}
                        />
                        {errors.fullName && <p className='text-red-500 text-xs mt-1'>{errors.fullName}</p>}
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-text-1 mb-1.5'>What is their relationship to you?</label>
                        <Commondropdown
                            options={relationshipOptions}
                            value={currentResidue.relationship}
                            onChange={(val) => handleChange("relationship", val)}
                            placeholder="Son/Daughter/Step-son/Step-daughter/Brother/Sister/Step-brother/Step-sister/Mother/Father/Grandmother/Grandfather/Aunt/Uncle/Cousin/Niece/Nephew/Spouse/Partner/Friend/Other/Add"
                            className={`w-full py-2.5! text-text-4 ${errors.relationship ? 'border-red-500' : ''}`}
                        />
                        {errors.relationship && <p className='text-red-500 text-xs mt-1'>{errors.relationship}</p>}
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-text-1 mb-1.5'>Residue Estate Description</label>
                        <textarea
                            rows={3}
                            className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7 resize-none'
                            placeholder='e.g "Remaining estate distribute equally between children." or "Remaining go to my wife/husband"'
                            value={currentResidue.description}
                            onChange={(e) => handleChange("description", e.target.value)}
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-text-1 mb-1.5'>Additional Information</label>
                        <textarea
                            rows={4}
                            className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7 resize-none'
                            placeholder="Additional information if any..."
                            value={currentResidue.additionalInfo}
                            onChange={(e) => handleChange("additionalInfo", e.target.value)}
                        />
                    </div>

                    {residueList.length > 0 && (
                        <div className="space-y-3 mt-4">
                            <h4 className='text-sm font-bold text-text-1'>Added Residue Heirs</h4>
                            {residueList.map((item) => (
                                <div key={item.id} className="bg-white p-4 rounded-lg border border-gray-200 flex justify-between items-center shadow-sm">
                                    <div className="min-w-0 pr-4">
                                        <p className="font-bold text-text-1 truncate">{item.fullName}</p>
                                        <p className="text-sm text-text-5 truncate">{item.relationship}</p>
                                    </div>
                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="p-1 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
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
                                if (residueList.length > 0) {
                                    handleRemove(residueList[residueList.length - 1].id)
                                }
                            }}
                            className='flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#FDA29B] text-[#D92D20] text-base font-semibold hover:bg-red-50 transition-colors shadow-sm cursor-pointer'
                        >
                            <Image src={CrossRedIcon} alt="Remove" width={18} height={18} />
                            Remove
                        </button>
                    </div>
                    {errors.global && <p className='text-red-500 text-sm mt-3 font-medium'>{errors.global}</p>}
                </div>
            </div>

            {/* Action Buttons */}
            <div className='flex items-center flex-wrap gap-4 mt-8'>
                <button
                    onClick={onBack}
                    className='px-8 py-2.5 rounded-lg border border-main text-main font-bold hover:border-main/80 hover:bg-main hover:text-white transition-colors cursor-pointer'
                >
                    Back
                </button>
                <button
                    onClick={handleSave}
                    className='flex-1 px-8 py-2.5 whitespace-nowrap rounded-lg bg-main text-white font-bold hover:bg-main/80 transition-colors shadow-sm cursor-pointer'
                >
                    Save and Continue
                </button>
                <button
                    onClick={onSkip}
                    className='px-8 py-2.5 rounded-lg border border-main text-main font-bold hover:border-main/80 hover:bg-main hover:text-white transition-colors cursor-pointer'
                >
                    Skip
                </button>
            </div>
        </div>
    )
}

export default Residual