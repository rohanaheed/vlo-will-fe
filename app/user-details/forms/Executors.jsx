"use client"
import React, { useState, useEffect } from 'react'
import Refresh from '@/components/assets/images/RefreshIcon.svg'
import Image from 'next/image'
import Commondropdown from '@/components/common/Commondropdown1.jsx'
import UKFlag from '@/components/assets/images/UkFlag.svg'
import PlusBlueIcon from '@/components/assets/images/PlusBlueIcon.svg'
import CrossRedIcon from '@/components/assets/images/CrossRedIcon.svg'

function Executors({ onSave, onSkip, onBack, onDataChange, initialData }) {
    const [executorType, setExecutorType] = useState('individual')
    const [appointAlternate, setAppointAlternate] = useState(true)
    const [executorsList, setExecutorsList] = useState(initialData?.executorsList || [])
    const [errors, setErrors] = useState({})

    const initialFormData = {
        // Individual Fields
        title: "",
        fullName: "",
        relationship: "",
        phoneCode: { label: "+44", value: "+44", icon: UKFlag },
        phone: "",
        email: "",

        // Professional Fields
        firmName: "",
        role: "",

        // Common
        isAlternate: false,
        isBackup: false
    }

    // Main Executor Data
    const [formData, setFormData] = useState({ ...initialFormData })

    const titleOptions = ["Mr", "Mrs", "Ms", "Dr", "Prof", "Rev", "Other"]

    // Relationship Options
    const relationshipOptions = [
        "Spouse",
        "Civil Partner",
        "Long-term Partner",
        "Brother",
        "Sister",
        "Friend",
        "Child",
        "Parent",
        "Add"
    ]

    // Professional Role Options
    const roleOptions = [
        "Solicitor",
        "Accountant",
        "Manager",
        "Add"
    ]

    const phoneCodeOptions = [
        { label: "+44", value: "+44", icon: UKFlag },
        // Add more codes as needed
    ]

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: null }))
        }
    }

    // Handlers for Main Executors
    const addExecutor = () => {
        if (validate()) {
            setExecutorsList(prev => [...prev, { ...formData, id: Date.now(), type: executorType }])
            setFormData({ ...initialFormData })
            setErrors({})
        }
    }

    const removeExecutor = () => {
        if (executorsList.length > 0) {
            setExecutorsList(prev => prev.slice(0, -1))
        }
    }

    const validate = () => {
        const newErrors = {}
        if (executorType === 'individual') {
            if (!formData.fullName) newErrors.fullName = "Full Name is required"
            if (!formData.relationship) newErrors.relationship = "Relationship is required"
        } else {
            if (!formData.firmName) newErrors.firmName = "Firm Name is required"
            if (!formData.role) newErrors.role = "Role is required"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSave = () => {
        if (executorsList.length === 0) {
            if (!validate()) {
                setErrors(prev => ({ ...prev, global: "Please add at least one executor or complete the current entry" }))
            } else {
                setErrors(prev => ({ ...prev, global: "Please click 'Add' to include this executor in your list" }))
            }
            return
        }
        onSave()
    }

    // Emit live data for preview
    useEffect(() => {
        if (onDataChange) onDataChange({ executorType, executorsList })
    }, [executorsList, executorType])

    return (
        <div className='bg-[#FAFAFA] rounded-lg p-6'>
            <div className='flex items-center justify-between gap-4 flex-wrap w-full mb-5'>
                <h2 className='text-xl md:text-2xl lg:text-4xl font-bold text-text-1'>Executors' Details</h2>
                <button className='text-black flex text-xs items-center gap-1 cursor-pointer'>
                    Auto Saved
                    <Image src={Refresh} alt="Refresh" width={16} height={16} className='w-4 h-4' />
                </button>
            </div>

            <p className='text-text-4 text-sm md:text-base mb-4'>
                Appoint one or more executors to carry out your wishes.
            </p>

            <div className='mb-4'>
                <div className="flex items-center gap-2 mb-1.5">
                    <label className='block text-sm font-medium text-text-4'>
                        Who will be your Executor?
                    </label>
                    <div className="flex ml-2.5 items-center justify-center w-[17px] h-[17px] rounded-full border border-black text-black text-[10px] font-bold cursor-pointer">?</div>
                </div>
                <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="executorType"
                            checked={executorType === 'individual'}
                            onChange={() => setExecutorType('individual')}
                            className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                        />
                        <span className="text-sm font-medium text-text-1">Individual</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="executorType"
                            checked={executorType === 'professional'}
                            onChange={() => setExecutorType('professional')}
                            className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                        />
                        <span className="text-sm font-medium text-text-1">Professional Advisors</span>
                    </label>
                </div>
            </div>

            <form className='space-y-4'>

                {/* INDIVIDUAL SECTION */}
                {executorType === 'individual' && (
                    <div className="space-y-4">
                        <h3 className="font-bold text-xl text-black">Individual</h3>

                        {/* Full Name */}
                        <div>
                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Full Name <span className='text-red-500'>*</span></label>
                            <div className={`flex items-center w-full bg-white text-black border ${errors.fullName ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-2 focus-within:border-black`}>
                                <Commondropdown
                                    options={titleOptions}
                                    value={formData.title}
                                    onChange={(val) => handleChange("title", val)}
                                    placeholder="Mr / Mrs / Ms / Dr"
                                    className="border-none! w-fit gap-1! text-text-4 shadow-none! whitespace-nowrap py-0! pr-0! px-1.5!"
                                    dropdownClassName="w-[120px]!"
                                />

                                <input
                                    type="text"
                                    className='flex-1 w-full bg-transparent text-black border-none outline-none py-2.5 pl-1 pr-2 text-sm placeholder:text-text-7'
                                    placeholder="Robert Wilson"
                                    value={formData.fullName}
                                    onChange={(e) => handleChange("fullName", e.target.value)}
                                />
                            </div>
                            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                        </div>

                        {/* Relationship */}
                        <div>
                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Relationship to You <span className='text-red-500'>*</span></label>
                            <Commondropdown
                                options={relationshipOptions}
                                value={formData.relationship}
                                onChange={(val) => handleChange("relationship", val)}
                                placeholder="Spouse / Civil Partner / Long-term Partner / Brother / Friend / Add"
                                className={`w-full py-2.5! text-text-4 ${errors.relationship ? 'border-red-500' : ''}`}
                            />
                            {errors.relationship && <p className="text-red-500 text-xs mt-1">{errors.relationship}</p>}
                        </div>

                        {/* Telephone */}
                        <div>
                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Telephone (Optional)</label>
                            <div className='flex items-center w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-2 focus-within:border-black'>
                                <Commondropdown
                                    options={phoneCodeOptions}
                                    value={formData.phoneCode}
                                    onChange={(val) => handleChange("phoneCode", val)}
                                    className="border-none! w-fit gap-1! text-text-4 shadow-none! whitespace-nowrap py-0! pr-0! px-1.5!"
                                    dropdownClassName="w-[100px]!"
                                />

                                <input
                                    type="text"
                                    className='flex-1 w-full bg-transparent text-black border-none outline-none py-2.5 pl-1 pr-2 text-sm placeholder:text-text-7'
                                    placeholder="7890 123456"
                                    value={formData.phone}
                                    onChange={(e) => handleChange("phone", e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Email Address */}
                        <div>
                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Email Address</label>
                            <input
                                type="email"
                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                placeholder="robert@wilsonsolicitors.co.uk"
                                value={formData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                            />
                        </div>

                        {/* Alternate Executor Section (Individual) */}
                        <div className="pt-2">
                            <div className="flex items-center gap-2 mb-4">
                                <h4 className="font-bold text-black">Alternate Executor/s</h4>
                                <div className="flex ml-2.5 items-center justify-center w-[17px] h-[17px] rounded-full border border-black text-black text-[10px] font-bold cursor-pointer">?</div>
                            </div>

                            <div className="space-y-2 mb-4">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={formData.isAlternate}
                                        onChange={(e) => handleChange('isAlternate', e.target.checked)}
                                        className="appearance-none w-5 h-5 border border-[#D5D7DA] rounded-sm bg-white checked:bg-[#003966] checked:border-[#003966] focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden checked:after:block after:w-[6px] after:h-[10px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:mb-[2px]"
                                    />
                                    <span className="text-sm text-text-4">Alternate Executor / Executrix</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={formData.isBackup}
                                        onChange={(e) => handleChange('isBackup', e.target.checked)}
                                        className="appearance-none w-5 h-5 border border-[#D5D7DA] rounded-sm bg-white checked:bg-[#003966] checked:border-[#003966] focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden checked:after:block after:w-[6px] after:h-[10px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:mb-[2px]"
                                    />
                                    <span className="text-sm text-text-4">Backup Executor / Executrix</span>
                                </label>
                            </div>
                        </div>
                    </div>
                )}


                {/* PROFESSIONAL SECTION */}
                {executorType === 'professional' && (
                    <div className="space-y-4">
                        <h3 className="font-bold text-xl text-black">Professional Advisor</h3>

                        {/* Business / Firm Name */}
                        <div>
                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Business / Firm Name <span className='text-red-500'>*</span></label>
                            <input
                                type="text"
                                className={`w-full bg-white text-black border ${errors.firmName ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7`}
                                placeholder="Wilson & Co. Solicitors"
                                value={formData.firmName}
                                onChange={(e) => handleChange("firmName", e.target.value)}
                            />
                            {errors.firmName && <p className="text-red-500 text-xs mt-1">{errors.firmName}</p>}
                        </div>

                        {/* Role/Title */}
                        <div>
                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Role/Title <span className='text-red-500'>*</span></label>
                            <Commondropdown
                                options={roleOptions}
                                value={formData.role}
                                onChange={(val) => handleChange("role", val)}
                                placeholder="Solicitor / Accountant / Manager / Add"
                                className={`w-full py-2.5! text-text-4 ${errors.role ? 'border-red-500' : ''}`}
                            />
                            {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
                        </div>

                        {/* Telephone */}
                        <div>
                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Telephone (Optional)</label>
                            <div className='flex items-center w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-2 focus-within:border-black'>
                                <Commondropdown
                                    options={phoneCodeOptions}
                                    value={formData.phoneCode}
                                    onChange={(val) => handleChange("phoneCode", val)}
                                    className="border-none! w-fit gap-1! text-text-4 shadow-none! whitespace-nowrap py-0! pr-0! px-1.5!"
                                    dropdownClassName="w-[100px]!"
                                />
                                <input
                                    type="text"
                                    className='flex-1 w-full bg-transparent text-black border-none outline-none py-2.5 pl-1 pr-2 text-sm placeholder:text-text-7'
                                    placeholder="7890 123456"
                                    value={formData.phone}
                                    onChange={(e) => handleChange("phone", e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Email Address */}
                        <div>
                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Email Address</label>
                            <input
                                type="email"
                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                placeholder="robert@wilsonsolicitors.co.uk"
                                value={formData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                            />
                        </div>

                        <div className="pt-2">
                            <div className="flex items-center gap-2 mb-2">
                                <label className='block text-sm font-medium text-black'>
                                    Do you want to appoint an alternate executor?
                                </label>
                                <div className="flex ml-2.5 items-center justify-center w-[17px] h-[17px] rounded-full border border-black text-black text-[10px] font-bold cursor-pointer">?</div>
                            </div>
                            <div className="flex items-center gap-6 mb-4">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="appointAlternate"
                                        className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                                        checked={appointAlternate === true}
                                        onChange={() => setAppointAlternate(true)}
                                    />
                                    <span className="text-sm font-medium text-black">Yes</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="appointAlternate"
                                        className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                                        checked={appointAlternate === false}
                                        onChange={() => setAppointAlternate(false)}
                                    />
                                    <span className="text-sm font-medium text-text-1">No</span>
                                </label>
                            </div>


                            {appointAlternate && (
                                <>
                                    <div className="flex items-center gap-2 mb-3">
                                        <h4 className="font-bold text-text-1">Alternate Executor/s</h4>
                                        <div className="flex ml-2.5 items-center justify-center w-[17px] h-[17px] rounded-full border border-black text-black text-[10px] font-bold cursor-pointer">?</div>
                                    </div>

                                    <div className="space-y-2 mb-4">
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={formData.isAlternate}
                                                onChange={(e) => handleChange('isAlternate', e.target.checked)}
                                                className="appearance-none w-5 h-5 border border-[#D5D7DA] rounded-sm bg-white checked:bg-[#003966] checked:border-[#003966] focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden checked:after:block after:w-[6px] after:h-[10px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:mb-[2px]"
                                            />
                                            <span className="text-sm text-text-4">Alternate Executor / Executrix</span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={formData.isBackup}
                                                onChange={(e) => handleChange('isBackup', e.target.checked)}
                                                className="appearance-none w-5 h-5 border border-[#D5D7DA] rounded-sm bg-white checked:bg-[#003966] checked:border-[#003966] focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden checked:after:block after:w-[6px] after:h-[10px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:mb-[2px]"
                                            />
                                            <span className="text-sm text-text-4">Backup Executor / Executrix</span>
                                        </label>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}



                {/* List of Added Main Executors */}
                {
                    executorsList.length > 0 && (
                        <div className="space-y-3 mt-4">
                            <h3 className='text-sm font-bold text-text-1'>Added Executors</h3>
                            {executorsList.map((executor) => (
                                <div key={executor.id} className="bg-white p-4 rounded-lg border border-gray-200 flex justify-between items-center shadow-sm">
                                    <div className="min-w-0 pr-4">
                                        <p className="font-medium text-text-1 truncate" title={executor.type === 'individual' ? [executor.title, executor.fullName].filter(Boolean).join(' ') : executor.firmName}>
                                            {executor.type === 'individual'
                                                ? `${[executor.title, executor.fullName].filter(Boolean).join(' ')} - ${executor.relationship}`
                                                : `${executor.firmName} - ${executor.role}`
                                            }
                                        </p>
                                        <p className="text-sm text-text-5 truncate">
                                            {executor.email || executor.phone || "No contact info"}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                }

                {/* Main Add/Remove Buttons */}
                <div className="flex gap-4">
                    <button
                        onClick={addExecutor}
                        type="button"
                        className="flex cursor-pointer items-center gap-2 px-8.5 py-2.5 border border-[#003966] text-[#003966] rounded-lg hover:bg-[#F0F7FF] transition-colors text-base font-semibold shadow-sm"
                    >
                        <Image src={PlusBlueIcon} alt="Plus Blue Icon" width={24} height={24} className='w-6 h-6' />
                        Add
                    </button>
                    <button
                        onClick={removeExecutor}
                        type="button"
                        className="flex cursor-pointer items-center gap-2 px-5 py-2.5 border border-[#FF383C] text-[#FF383C] rounded-lg hover:bg-[#FEF3F2] transition-colors text-base font-semibold shadow-sm"
                    >
                        <Image src={CrossRedIcon} alt="Cross Red Icon" width={24} height={24} className='w-6 h-6' />
                        Remove
                    </button>
                </div>
                {errors.global && <p className='text-red-500 text-sm mt-3 font-medium'>{errors.global}</p>}

                {/* Action Buttons */}
                <div className="flex items-center flex-wrap gap-4 mt-4">
                    <button onClick={onBack} type="button" className="cursor-pointer px-6 py-2.5 rounded-lg border border-gray-300 text-text-1 font-medium hover:bg-main hover:text-white transition-colors w-full md:w-auto">
                        Back
                    </button>
                    <button onClick={handleSave} type="button" className="cursor-pointer flex-1 px-6 py-2.5 rounded-lg bg-main text-white font-medium whitespace-nowrap hover:bg-main/85 transition-colors w-full md:w-auto text-center">
                        Save and Continue
                    </button>
                    <button onClick={onSkip} type="button" className="cursor-pointer px-6 py-2.5 rounded-lg border border-gray-300 text-text-1 font-medium hover:bg-main hover:text-white transition-colors w-full md:w-auto">
                        Skip
                    </button>
                </div>
            </form >
        </div >
    )
}

export default Executors