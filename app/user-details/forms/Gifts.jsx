"use client"
import React, { useState } from 'react'
import Refresh from '@/components/assets/images/RefreshIcon.svg'
import Image from 'next/image'
import Commondropdown from '@/components/common/Commondropdown1.jsx'
import PlusBlueIcon from '@/components/assets/images/PlusBlueIcon.svg'
import CrossRedIcon from '@/components/assets/images/CrossRedIcon.svg'

function Gifts({ onSave, onSkip, onBack }) {
    // Individual Gifts State
    const [individualGifts, setIndividualGifts] = useState([])
    const [currentGift, setCurrentGift] = useState({
        beneficiary: "",
        assetType: "",
        giftType: "",
        description: "",
        additionalInfo: ""
    })

    // Charity Donations State
    const [hasCharity, setHasCharity] = useState('yes')
    const [charityDonations, setCharityDonations] = useState([])
    const [currentDonation, setCurrentDonation] = useState({
        charityName: "",
        assetType: "",
        giftType: "",
        description: "",
        additionalInfo: ""
    })

    const [errors, setErrors] = useState({})

    // Options
    const beneficiaryOptions = ["John Alexander Smith", "Add New"]
    const assetTypeOptions = [
        "Residential Property",
        "Bank Account",
        "Investment/Bonds",
        "Vehicle",
        "Jewellery",
        "Cryptocurrency",
        "Trademark/Patent",
        "Other",
        "Add"
    ]
    const giftTypeOptions = ["Money Gift", "Property Gift", "Personal Item", "Add"]
    const charityOptions = [
        "British Heart Foundation",
        "Cancer Research UK",
        "Red Cross",
        "Mosque",
        "Temple",
        "Church",
        "Other",
        "Add"
    ]

    const handleGiftChange = (field, value) => {
        setCurrentGift(prev => ({ ...prev, [field]: value }))
        if (errors[`gift_${field}`]) {
            setErrors(prev => ({ ...prev, [`gift_${field}`]: null }))
        }
    }

    const handleDonationChange = (field, value) => {
        setCurrentDonation(prev => ({ ...prev, [field]: value }))
        if (errors[`donation_${field}`]) {
            setErrors(prev => ({ ...prev, [`donation_${field}`]: null }))
        }
    }

    const validateGift = () => {
        const newErrors = {}
        if (!currentGift.beneficiary) newErrors.gift_beneficiary = "Beneficiary is required"
        if (!currentGift.assetType) newErrors.gift_assetType = "Asset Type is required"
        if (!currentGift.giftType) newErrors.gift_giftType = "Gift Type is required"
        setErrors(prev => ({ ...prev, ...newErrors }))
        return Object.keys(newErrors).length === 0
    }

    const validateDonation = () => {
        const newErrors = {}
        if (!currentDonation.charityName) newErrors.donation_charityName = "Charity Name is required"
        if (!currentDonation.assetType) newErrors.donation_assetType = "Asset Type is required"
        if (!currentDonation.giftType) newErrors.donation_giftType = "Gift Type is required"
        setErrors(prev => ({ ...prev, ...newErrors }))
        return Object.keys(newErrors).length === 0
    }

    const addGift = () => {
        if (validateGift()) {
            setIndividualGifts(prev => [...prev, { ...currentGift, id: Date.now() }])
            setCurrentGift({
                beneficiary: "",
                assetType: "",
                giftType: "",
                description: "",
                additionalInfo: ""
            })
        }
    }

    const removeGift = (id) => {
        setIndividualGifts(prev => prev.filter(g => g.id !== id))
    }

    const addDonation = () => {
        if (validateDonation()) {
            setCharityDonations(prev => [...prev, { ...currentDonation, id: Date.now() }])
            setCurrentDonation({
                charityName: "",
                assetType: "",
                giftType: "",
                description: "",
                additionalInfo: ""
            })
        }
    }

    const removeDonation = (id) => {
        setCharityDonations(prev => prev.filter(d => d.id !== id))
    }

    const handleSave = () => {
        let isValid = true
        const newErrors = {}

        if (individualGifts.length === 0) {
            if (!validateGift()) {
                newErrors.gift_global = "Please add at least one gift or complete the current entry"
            } else {
                newErrors.gift_global = "Please click 'Add' to include this gift in your list"
            }
            isValid = false
        }

        if (hasCharity === 'yes' && charityDonations.length === 0) {
            if (!validateDonation()) {
                newErrors.donation_global = "Please add at least one charity donation or complete the current entry"
            } else {
                newErrors.donation_global = "Please click 'Add' to include this donation in your list"
            }
            isValid = false
        }

        if (isValid) {
            onSave()
        } else {
            setErrors(prev => ({ ...prev, ...newErrors }))
        }
    }

    return (
        <div className='bg-[#FAFAFA] rounded-lg p-6'>
            <div className='flex items-center justify-between gap-4 flex-wrap w-full mb-5'>
                <h2 className='text-2xl md:text-3xl font-bold text-text-1'>Gifts & Donations</h2>
                <button className='text-black flex text-xs items-center gap-1 cursor-pointer'>
                    Auto Saved
                    <Image src={Refresh} alt="Refresh" width={16} height={16} className='w-4 h-4' />
                </button>
            </div>

            <p className='text-text-5 text-base md:text-xl mb-4'>
                Assign specific items, money, or property to individual or organisation.
            </p>

            {/* Individual Gifts Section */}
            <div className='mb-4'>
                <p className='text-text-1 font-medium mb-4 text-sm'>Who you wish to leave your property?</p>
                <h3 className='text-lg font-bold text-text-1 mb-4'>Gift Details</h3>

                <div className='space-y-4'>
                    <div>
                        <label className='block text-sm font-medium text-text-1 mb-1.5'>Please Select from Beneficiaries</label>
                        <Commondropdown
                            options={beneficiaryOptions}
                            value={currentGift.beneficiary}
                            onChange={(val) => handleGiftChange("beneficiary", val)}
                            placeholder="John Alexander Smith / Custom Add"
                            className={`w-full !py-2.5 text-[#414651] ${errors.gift_beneficiary ? 'border-red-500' : ''}`}
                        />
                        {errors.gift_beneficiary && <p className='text-red-500 text-xs mt-1'>{errors.gift_beneficiary}</p>}
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-text-1 mb-1.5'>Assets Type</label>
                        <Commondropdown
                            options={assetTypeOptions}
                            value={currentGift.assetType}
                            onChange={(val) => handleGiftChange("assetType", val)}
                            placeholder="Residential Property / Bonds / Vehicle / Cryptocurrency / Trademark / Add"
                            className={`w-full !py-2.5 text-[#414651] ${errors.gift_assetType ? 'border-red-500' : ''}`}
                        />
                        {errors.gift_assetType && <p className='text-red-500 text-xs mt-1'>{errors.gift_assetType}</p>}
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-text-1 mb-1.5'>Gift Type</label>
                        <Commondropdown
                            options={giftTypeOptions}
                            value={currentGift.giftType}
                            onChange={(val) => handleGiftChange("giftType", val)}
                            placeholder="Money Gift / Property Gift / Personal Item / Add"
                            className={`w-full !py-2.5 text-[#414651] ${errors.gift_giftType ? 'border-red-500' : ''}`}
                        />
                        {errors.gift_giftType && <p className='text-red-500 text-xs mt-1'>{errors.gift_giftType}</p>}
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-text-1 mb-1.5'>Gift Description</label>
                        <input
                            type="text"
                            className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]'
                            placeholder="£0.00"
                            value={currentGift.description}
                            onChange={(e) => handleGiftChange("description", e.target.value)}
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-text-1 mb-1.5'>Additional Information</label>
                        <textarea
                            rows={3}
                            className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680] resize-none'
                            placeholder="Additional information if any..."
                            value={currentGift.additionalInfo}
                            onChange={(e) => handleGiftChange("additionalInfo", e.target.value)}
                        />
                    </div>

                    {individualGifts.length > 0 && (
                        <div className="space-y-3 mt-4">
                            <h4 className='text-sm font-bold text-text-1'>Added Gifts</h4>
                            {individualGifts.map((gift) => (
                                <div key={gift.id} className="bg-white p-4 rounded-lg border border-gray-200 flex justify-between items-center shadow-sm">
                                    <div className="min-w-0 pr-4">
                                        <p className="font-bold text-text-1 truncate">{gift.beneficiary}</p>
                                        <p className="text-sm text-text-5 truncate">{gift.giftType} • {gift.assetType}</p>
                                    </div>
                                    <button
                                        onClick={() => removeGift(gift.id)}
                                        className="p-1 hover:bg-red-50 rounded-lg transition-colors"
                                    >
                                        <Image src={CrossRedIcon} alt="Remove" width={20} height={20} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className='flex items-center gap-3'>
                        <button
                            onClick={addGift}
                            className='flex cursor-pointer text-base font-semibold items-center gap-2 px-8.5 py-2.5 border border-[#003966] text-[#003966] rounded-lg hover:bg-[#F0F7FF] transition-colors text-sm font-bold shadow-sm'
                        >
                            <Image src={PlusBlueIcon} alt="Add" width={18} height={18} />
                            Add
                        </button>
                        <button
                            onClick={() => {
                                if (individualGifts.length > 0) {
                                    removeGift(individualGifts[individualGifts.length - 1].id)
                                }
                            }}
                            className='flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#FDA29B] text-[#D92D20] font-bold text-sm hover:bg-red-50 transition-colors shadow-sm cursor-pointer'
                        >
                            <Image src={CrossRedIcon} alt="Remove" width={18} height={18} />
                            Remove
                        </button>
                    </div>
                    {errors.gift_global && <p className='text-red-500 text-sm mt-3 font-medium'>{errors.gift_global}</p>}
                </div>
            </div>

            {/* Charity Section */}
            <div className='mb-4'>
                <p className='text-text-1 font-medium mb-4 text-sm'>Do you wish to leave any charity?</p>
                <div className='flex gap-6 mb-6'>
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <input
                            type="radio"
                            name="hasCharity"
                            value="yes"
                            checked={hasCharity === 'yes'}
                            onChange={() => setHasCharity('yes')}
                            className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                        />
                        <span className='text-sm font-medium text-text-1'>Yes</span>
                    </label>
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <input
                            type="radio"
                            name="hasCharity"
                            value="no"
                            checked={hasCharity === 'no'}
                            onChange={() => setHasCharity('no')}
                            className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                        />
                        <span className='text-sm font-medium text-text-1'>No</span>
                    </label>
                </div>

                {hasCharity === 'yes' && (
                    <div className='space-y-4'>
                        <h3 className='text-lg font-bold text-text-1 mb-4'>Charity Organisation Details</h3>

                        <div>
                            <label className='block text-sm font-medium text-text-1 mb-1.5'>Please add charity organisation</label>
                            <Commondropdown
                                options={charityOptions}
                                value={currentDonation.charityName}
                                onChange={(val) => handleDonationChange("charityName", val)}
                                placeholder="British Heart Foundation / Mosque / Temple / Church / Custom Add"
                                className={`w-full !py-2.5 text-[#414651] ${errors.donation_charityName ? 'border-red-500' : ''}`}
                            />
                            {errors.donation_charityName && <p className='text-red-500 text-xs mt-1'>{errors.donation_charityName}</p>}
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-text-1 mb-1.5'>Asset Type</label>
                            <Commondropdown
                                options={assetTypeOptions}
                                value={currentDonation.assetType}
                                onChange={(val) => handleDonationChange("assetType", val)}
                                placeholder="Residential Property / Bonds / Vehicle / Cryptocurrency / Trademark / Charity Donation / Add"
                                className={`w-full !py-2.5 text-[#414651] ${errors.donation_assetType ? 'border-red-500' : ''}`}
                            />
                            {errors.donation_assetType && <p className='text-red-500 text-xs mt-1'>{errors.donation_assetType}</p>}
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-text-1 mb-1.5'>Gift Type</label>
                            <Commondropdown
                                options={giftTypeOptions}
                                value={currentDonation.giftType}
                                onChange={(val) => handleDonationChange("giftType", val)}
                                placeholder="Money Gift / Property Gift / Personal Item / Charity Donation / Add"
                                className={`w-full !py-2.5 text-[#414651] ${errors.donation_giftType ? 'border-red-500' : ''}`}
                            />
                            {errors.donation_giftType && <p className='text-red-500 text-xs mt-1'>{errors.donation_giftType}</p>}
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-text-1 mb-1.5'>Gift Description</label>
                            <input
                                type="text"
                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]'
                                placeholder="£0.00"
                                value={currentDonation.description}
                                onChange={(e) => handleDonationChange("description", e.target.value)}
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-text-1 mb-1.5'>Additional Information</label>
                            <textarea
                                rows={3}
                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680] resize-none'
                                placeholder="Additional information if any..."
                                value={currentDonation.additionalInfo}
                                onChange={(e) => handleDonationChange("additionalInfo", e.target.value)}
                            />
                        </div>

                        {charityDonations.length > 0 && (
                            <div className="space-y-3 mt-4">
                                <h4 className='text-sm font-bold text-text-1'>Added Donations</h4>
                                {charityDonations.map((d) => (
                                    <div key={d.id} className="bg-white p-4 rounded-lg border border-gray-200 flex justify-between items-center shadow-sm">
                                        <div className="min-w-0 pr-4">
                                            <p className="font-bold text-text-1 truncate">{d.charityName}</p>
                                            <p className="text-sm text-text-5 truncate">{d.giftType} • {d.assetType}</p>
                                        </div>
                                        <button
                                            onClick={() => removeDonation(d.id)}
                                            className="p-1 hover:bg-red-50 rounded-lg transition-colors"
                                        >
                                            <Image src={CrossRedIcon} alt="Remove" width={20} height={20} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className='flex items-center gap-3'>
                            <button
                                onClick={addDonation}
                                className='flex cursor-pointer text-base font-semibold items-center gap-2 px-8.5 py-2.5 border border-[#003966] text-[#003966] rounded-lg hover:bg-[#F0F7FF] transition-colors text-sm font-bold shadow-sm'
                            >
                                <Image src={PlusBlueIcon} alt="Add" width={18} height={18} />
                                Add
                            </button>
                            <button
                                onClick={() => {
                                    if (charityDonations.length > 0) {
                                        removeDonation(charityDonations[charityDonations.length - 1].id)
                                    }
                                }}
                                className='flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#FDA29B] text-[#D92D20] font-bold text-sm hover:bg-red-50 transition-colors shadow-sm cursor-pointer'
                            >
                                <Image src={CrossRedIcon} alt="Remove" width={18} height={18} />
                                Remove
                            </button>
                        </div>
                        {errors.donation_global && <p className='text-red-500 text-sm mt-3 font-medium'>{errors.donation_global}</p>}
                    </div>
                )}
            </div>

            {/* Action Buttons */}
            <div className='flex items-center flex-wrap gap-4 mt-4'>
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

            {/* Information Tip */}
            <div className='mt-4 rounded-lg border'>
                <p className='text-base text-text-5 leading-relaxed'>
                    <span className='font-bold text-text-1'>Information Tip:</span><br />
                    Gifts can Include money, possessions, or donations to charity. You can list as many beneficiaries as needed.
                </p>
            </div>
        </div>
    )
}

export default Gifts