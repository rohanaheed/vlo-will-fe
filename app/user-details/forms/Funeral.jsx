"use client"
import React, { useState, useEffect } from 'react'
import Refresh from '@/components/assets/images/RefreshIcon.svg'
import Image from 'next/image'
import Commondropdown from '@/components/common/Commondropdown1.jsx'
import UKFlag from '@/components/assets/images/UkFlag.svg'

function Funeral({ onSave, onSkip, onBack, onDataChange, initialData }) {
    const [burialMethod, setBurialMethod] = useState(initialData?.burialMethod || ['burial'])
    const [hasLocationPreference, setHasLocationPreference] = useState(initialData?.hasLocationPreference || 'yes')
    const [cityLocation, setCityLocation] = useState(initialData?.cityLocation || '')
    const [specialRequests, setSpecialRequests] = useState(initialData?.specialRequests || '')
    const [payFromEstate, setPayFromEstate] = useState(initialData?.payFromEstate || 'yes')
    const [paymentPriority, setPaymentPriority] = useState(initialData?.paymentPriority || '')
    const [hasFuneralInsurance, setHasFuneralInsurance] = useState(initialData?.hasFuneralInsurance || 'yes')
    const [insuranceProvider, setInsuranceProvider] = useState(initialData?.insuranceProvider || '')
    const [policyNumber, setPolicyNumber] = useState(initialData?.policyNumber || '')
    const [policyholderTitle, setPolicyholderTitle] = useState(initialData?.policyholderTitle || 'Mr')
    const [policyholderName, setPolicyholderName] = useState(initialData?.policyholderName || '')
    const [coverageAmount, setCoverageAmount] = useState(initialData?.coverageAmount || '')
    const [phoneCode, setPhoneCode] = useState(initialData?.phoneCode || { label: "+44", value: "+44", icon: UKFlag })
    const [telephone, setTelephone] = useState(initialData?.telephone || '')
    const [email, setEmail] = useState(initialData?.email || '')
    const [websiteUrl, setWebsiteUrl] = useState(initialData?.websiteUrl || '')
    const [policyDocLocation, setPolicyDocLocation] = useState(initialData?.policyDocLocation || '')

    // Organ Donation
    const [wantOrganDonation, setWantOrganDonation] = useState(initialData?.wantOrganDonation || 'yes')
    const [donationType, setDonationType] = useState(initialData?.donationType || 'specific')
    const [organPreferences, setOrganPreferences] = useState(initialData?.organPreferences || {
        heart: 'yes',
        lungs: 'yes',
        kidneys: 'yes',
        liver: 'yes',
        corneas: 'yes',
        pancreas: 'yes',
        tissue: 'yes',
        smallBowel: 'yes'
    })
    const [nhsRegistered, setNhsRegistered] = useState(initialData?.nhsRegistered || 'yes')
    const [nhsReference, setNhsReference] = useState(initialData?.nhsReference || '')
    const [additionalNotes, setAdditionalNotes] = useState(initialData?.additionalNotes || '')

    const [errors, setErrors] = useState({})

    const titleOptions = ['Mr', 'Mrs', 'Ms', 'Dr']
    const phoneCodeOptions = [
        { label: "+44", value: "+44", icon: UKFlag },
    ]

    const validate = () => {
        const newErrors = {}
        if (hasLocationPreference === 'yes' && !cityLocation) {
            newErrors.cityLocation = "City/Location is required"
        }
        if (payFromEstate === 'yes' && !paymentPriority) {
            newErrors.paymentPriority = "Payment priority is required"
        }
        if (hasFuneralInsurance === 'yes') {
            if (!insuranceProvider) newErrors.insuranceProvider = "Insurance Provider Name is required"
            if (!policyNumber) newErrors.policyNumber = "Policy Number is required"
            if (!policyholderName) newErrors.policyholderName = "Policyholder Name is required"
        }
        if (nhsRegistered === 'yes' && !nhsReference) {
            newErrors.nhsReference = "Registration Reference No is required"
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSave = () => {
        if (validate()) {
            onSave()
        }
    }

    // Emit live data for preview
    useEffect(() => {
        if (onDataChange) onDataChange({
            burialMethod,
            hasLocationPreference,
            cityLocation,
            specialRequests,
            payFromEstate,
            paymentPriority,
            hasFuneralInsurance,
            insuranceProvider,
            policyNumber,
            policyholderTitle,
            policyholderName,
            coverageAmount,
            phoneCode,
            telephone,
            email,
            websiteUrl,
            policyDocLocation,
            wantOrganDonation,
            donationType,
            organPreferences,
            nhsRegistered,
            nhsReference,
            additionalNotes
        })
    }, [burialMethod, hasLocationPreference, cityLocation, specialRequests, payFromEstate,
        paymentPriority, hasFuneralInsurance, insuranceProvider, policyNumber, policyholderTitle,
        policyholderName, coverageAmount, phoneCode, telephone, email, websiteUrl,
        policyDocLocation, wantOrganDonation, donationType,
        organPreferences, nhsRegistered, nhsReference, additionalNotes])

    return (
        <div className='bg-[#FAFAFA] rounded-lg p-6'>
            <div className='flex items-center justify-between gap-4 flex-wrap w-full mb-5'>
                <h2 className='text-xl md:text-2xl lg:text-4xl font-bold text-text-1'>Funeral Wishes</h2>
                <button className='text-black flex text-xs items-center gap-1 cursor-pointer'>
                    Auto Saved
                    <Image src={Refresh} alt="Refresh" width={16} height={16} className='w-4 h-4' />
                </button>
            </div>

            <p className='text-text-4 text-sm md:text-base mb-4'>
                Record your funeral preferences, including burial, cremation, or any special instructions you wish to be followed.
            </p>

            <div className='space-y-4'>
                {/* Funeral / Burial Wishes */}
                <div>
                    <h3 className='text-lg font-bold text-text-1 mb-4'>Funeral / Burial Wishes</h3>

                    <div className='space-y-4'>
                        <div>
                            <label className='block text-sm font-medium text-text-4 mb-2'>How would you like your body to be handled?</label>
                            <div className='flex md:flex-row flex-col gap-6'>
                                <label className='flex gap-2 cursor-pointer'>
                                    <input
                                        type='checkbox'
                                        checked={burialMethod.includes('burial')}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setBurialMethod(prev => [...prev, 'burial'])
                                            } else {
                                                setBurialMethod(prev => prev.filter(m => m !== 'burial'))
                                            }
                                        }}
                                        className="appearance-none w-5 h-5 border border-[#D5D7DA] rounded-sm bg-white checked:bg-[#003966] checked:border-[#003966] focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden checked:after:block after:w-[6px] after:h-[10px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:mb-[2px]"
                                    />
                                    <span className='text-sm font-medium text-text-1'>Burial</span>
                                </label>
                                <label className='flex gap-2 cursor-pointer'>
                                    <input
                                        type='checkbox'
                                        checked={burialMethod.includes('cremation')}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setBurialMethod(prev => [...prev, 'cremation'])
                                            } else {
                                                setBurialMethod(prev => prev.filter(m => m !== 'cremation'))
                                            }
                                        }}
                                        className="appearance-none w-5 h-5 border border-[#D5D7DA] rounded-sm bg-white checked:bg-[#003966] checked:border-[#003966] focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden checked:after:block after:w-[6px] after:h-[10px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:mb-[2px]"
                                    />
                                    <span className='text-sm font-medium text-text-1'>Cremation</span>
                                </label>
                                <label className='flex gap-2 cursor-pointer'>
                                    <input
                                        type='checkbox'
                                        checked={burialMethod.includes('no-preference')}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setBurialMethod(prev => [...prev, 'no-preference'])
                                            } else {
                                                setBurialMethod(prev => prev.filter(m => m !== 'no-preference'))
                                            }
                                        }}
                                        className="appearance-none w-5 h-5 border border-[#D5D7DA] rounded-sm bg-white checked:bg-[#003966] checked:border-[#003966] focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden checked:after:block after:w-[6px] after:h-[10px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:mb-[2px]"
                                    />
                                    <span className='text-sm font-medium text-text-1'>No Preference</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <h4 className='text-sm font-bold text-text-1 mb-1.5'>Burial Location Preference</h4>
                            <p className='text-sm text-text-4 mb-2'>Do you have any preference to be buried in specific cemetery?</p>
                            <div className='flex items-center gap-6 mb-3'>
                                <label className='flex items-center gap-2 cursor-pointer'>
                                    <input
                                        type='radio'
                                        name='hasLocationPreference'
                                        checked={hasLocationPreference === 'yes'}
                                        onChange={() => setHasLocationPreference('yes')}
                                        className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                                    />
                                    <span className='text-sm font-medium text-text-1'>Yes</span>
                                </label>
                                <label className='flex items-center gap-2 cursor-pointer'>
                                    <input
                                        type='radio'
                                        name='hasLocationPreference'
                                        checked={hasLocationPreference === 'no-preference'}
                                        onChange={() => setHasLocationPreference('no-preference')}
                                        className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                                    />
                                    <span className='text-sm font-medium text-text-1'>No Preference</span>
                                </label>
                            </div>

                            {hasLocationPreference === 'yes' && (
                                <div>
                                    <label className='block text-sm font-medium text-text-4 mb-1.5'>City / Location</label>
                                    <input
                                        type='text'
                                        className={`w-full bg-white text-black border ${errors.cityLocation ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7`}
                                        placeholder='Enter your preferred location'
                                        value={cityLocation}
                                        onChange={(e) => {
                                            setCityLocation(e.target.value)
                                            if (errors.cityLocation) setErrors(prev => ({ ...prev, cityLocation: null }))
                                        }}
                                    />
                                    {errors.cityLocation && <p className='text-red-500 text-xs mt-1'>{errors.cityLocation}</p>}
                                </div>
                            )}
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Any special requests</label>
                            <textarea
                                rows={3}
                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7 resize-none'
                                placeholder='I wish my body to be handled only by the same gender etc...'
                                value={specialRequests}
                                onChange={(e) => setSpecialRequests(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Funeral Costs & Insurance */}
                <div>
                    <h3 className='text-sm font-bold text-text-1 mb-1.5'>Funeral Costs & Insurance</h3>

                    <div className='space-y-4'>
                        <div>
                            <p className='text-sm font-medium text-text-4 mb-2'>Would you like your funeral expenses to be paid from your estate?</p>
                            <div className='flex items-center gap-6'>
                                <label className='flex items-center gap-2 cursor-pointer'>
                                    <input
                                        type='radio'
                                        name='payFromEstate'
                                        checked={payFromEstate === 'yes'}
                                        onChange={() => setPayFromEstate('yes')}
                                        className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                                    />
                                    <span className='text-sm font-medium text-text-1'>Yes</span>
                                </label>
                                <label className='flex items-center gap-2 cursor-pointer'>
                                    <input
                                        type='radio'
                                        name='payFromEstate'
                                        checked={payFromEstate === 'no'}
                                        onChange={() => setPayFromEstate('no')}
                                        className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                                    />
                                    <span className='text-sm font-medium text-text-1'>No</span>
                                </label>
                            </div>
                        </div>

                        {payFromEstate === 'yes' && (
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>Specify payment priority</label>
                                <input
                                    type='text'
                                    className={`w-full bg-white text-black border ${errors.paymentPriority ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7`}
                                    placeholder='Funeral and burial expenses should be settled before debts or bequests'
                                    value={paymentPriority}
                                    onChange={(e) => {
                                        setPaymentPriority(e.target.value)
                                        if (errors.paymentPriority) setErrors(prev => ({ ...prev, paymentPriority: null }))
                                    }}
                                />
                                {errors.paymentPriority && <p className='text-red-500 text-xs mt-1'>{errors.paymentPriority}</p>}
                            </div>
                        )}

                        <div>
                            <p className='text-sm font-medium text-text-4 mb-2'>Would you like your funeral expenses to be paid from your estate?</p>
                            <div className='flex items-center gap-6 mb-4'>
                                <label className='flex items-center gap-2 cursor-pointer'>
                                    <input
                                        type='radio'
                                        name='hasFuneralInsurance'
                                        checked={hasFuneralInsurance === 'yes'}
                                        onChange={() => setHasFuneralInsurance('yes')}
                                        className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                                    />
                                    <span className='text-sm font-medium text-text-1'>Yes</span>
                                </label>
                                <label className='flex items-center gap-2 cursor-pointer'>
                                    <input
                                        type='radio'
                                        name='hasFuneralInsurance'
                                        checked={hasFuneralInsurance === 'no'}
                                        onChange={() => setHasFuneralInsurance('no')}
                                        className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                                    />
                                    <span className='text-sm font-medium text-text-1'>No</span>
                                </label>
                            </div>

                            {hasFuneralInsurance === 'yes' && (
                                <div>
                                    <h4 className='text-sm font-bold text-text-1 mb-1'>Funeral Insurance Policy Details:</h4>
                                    <p className='text-sm text-text-4 mb-4'>If you have funeral insurance or a prepaid funeral plan, please provide the following details:</p>

                                    <div className='space-y-4'>
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Insurance Provider Name</label>
                                            <input
                                                type='text'
                                                className={`w-full bg-white text-black border ${errors.insuranceProvider ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7`}
                                                placeholder='ABC Funeral Care'
                                                value={insuranceProvider}
                                                onChange={(e) => {
                                                    setInsuranceProvider(e.target.value)
                                                    if (errors.insuranceProvider) setErrors(prev => ({ ...prev, insuranceProvider: null }))
                                                }}
                                            />
                                            {errors.insuranceProvider && <p className='text-red-500 text-xs mt-1'>{errors.insuranceProvider}</p>}
                                        </div>

                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Policy Number</label>
                                            <input
                                                type='text'
                                                className={`w-full bg-white text-black border ${errors.policyNumber ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7`}
                                                placeholder='FUN-UK-987654'
                                                value={policyNumber}
                                                onChange={(e) => {
                                                    setPolicyNumber(e.target.value)
                                                    if (errors.policyNumber) setErrors(prev => ({ ...prev, policyNumber: null }))
                                                }}
                                            />
                                            {errors.policyNumber && <p className='text-red-500 text-xs mt-1'>{errors.policyNumber}</p>}
                                        </div>

                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Policyholder Name</label>
                                            <div className='flex items-center w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-2 focus-within:border-black'>
                                                <Commondropdown
                                                    options={titleOptions}
                                                    value={policyholderTitle}
                                                    onChange={(val) => setPolicyholderTitle(val)}
                                                    placeholder="Mr / Mrs / Ms / Dr"
                                                    className="border-none! w-fit gap-1! text-text-4 shadow-none! whitespace-nowrap py-0! pr-0! px-1.5!"
                                                    dropdownClassName="w-[100px]!"
                                                />
                                                <input
                                                    type='text'
                                                    className='flex-1 bg-transparent text-black border-none outline-none text-sm placeholder:text-text-7 py-2.5 pr-2'
                                                    placeholder='John Doe'
                                                    value={policyholderName}
                                                    onChange={(e) => {
                                                        setPolicyholderName(e.target.value)
                                                        if (errors.policyholderName) setErrors(prev => ({ ...prev, policyholderName: null }))
                                                    }}
                                                />
                                            </div>
                                            {errors.policyholderName && <p className='text-red-500 text-xs mt-1'>{errors.policyholderName}</p>}
                                        </div>

                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Coverage Amount</label>
                                            <input
                                                type='text'
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                                placeholder='£8,000'
                                                value={coverageAmount}
                                                onChange={(e) => setCoverageAmount(e.target.value)}
                                            />
                                        </div>

                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Telephone (Optional)</label>
                                            <div className='flex items-center w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-2 focus-within:border-black'>
                                                <Commondropdown
                                                    options={phoneCodeOptions}
                                                    value={phoneCode}
                                                    onChange={(val) => setPhoneCode(val)}
                                                    className="border-none! w-fit gap-1! text-text-4 shadow-none! whitespace-nowrap py-0! pr-0! px-1.5!"
                                                    dropdownClassName="w-[100px]!"
                                                />
                                                <input
                                                    type='text'
                                                    className='flex-1 bg-transparent text-black border-none outline-none text-sm placeholder:text-text-7 py-2.5 pr-2'
                                                    placeholder='7890 123456'
                                                    value={telephone}
                                                    onChange={(e) => setTelephone(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Email Address (Optional)</label>
                                            <input
                                                type='email'
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                                placeholder='johnsmith@email.com'
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>

                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Website URL (Optional)</label>
                                            <input
                                                type='text'
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                                placeholder='http://www.johnsmithfuneral.com'
                                                value={websiteUrl}
                                                onChange={(e) => setWebsiteUrl(e.target.value)}
                                            />
                                        </div>

                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Policy Document Location</label>
                                            <input
                                                type='text'
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                                placeholder='Filed with my solicitor, Smith & Partners LLP, London.'
                                                value={policyDocLocation}
                                                onChange={(e) => setPolicyDocLocation(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Organ Donation Details */}
                <div>
                    <h3 className='text-xl font-bold text-text-1 mb-4'>Organ Donation Details</h3>

                    <div className='space-y-4'>
                        <div>
                            <p className='text-sm font-medium text-text-4 mb-2'>Would you like to donate your organs or tissue after death?</p>
                            <div className='flex items-center gap-6'>
                                <label className='flex items-center gap-2 cursor-pointer'>
                                    <input
                                        type='radio'
                                        name='wantOrganDonation'
                                        checked={wantOrganDonation === 'yes'}
                                        onChange={() => setWantOrganDonation('yes')}
                                        className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                                    />
                                    <span className='text-sm font-medium text-text-1'>Yes</span>
                                </label>
                                <label className='flex items-center gap-2 cursor-pointer'>
                                    <input
                                        type='radio'
                                        name='wantOrganDonation'
                                        checked={wantOrganDonation === 'no'}
                                        onChange={() => setWantOrganDonation('no')}
                                        className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                                    />
                                    <span className='text-sm font-medium text-text-1'>No</span>
                                </label>
                            </div>
                        </div>

                        {wantOrganDonation === 'yes' && (
                            <div className='space-y-4'>
                                <div>
                                    <p className='text-sm font-medium text-text-4 mb-2'>I wish to donate:</p>
                                    <div className='flex md:flex-row flex-col gap-6'>
                                        <label className='flex gap-2 cursor-pointer'>
                                            <input
                                                type='radio'
                                                name='donationType'
                                                checked={donationType === 'all'}
                                                onChange={() => setDonationType('all')}
                                                className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                                            />
                                            <span className='text-sm font-medium text-text-1'>All my organs and tissue</span>
                                        </label>
                                        <label className='flex gap-2 cursor-pointer'>
                                            <input
                                                type='radio'
                                                name='donationType'
                                                checked={donationType === 'specific'}
                                                onChange={() => setDonationType('specific')}
                                                className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                                            />
                                            <span className='text-sm font-medium text-text-1'>Only specific organs/tissue listed below</span>
                                        </label>
                                    </div>
                                </div>

                                {donationType === 'specific' && (
                                    <div className='flex flex-col gap-3'>
                                        {[
                                            { key: 'heart', label: 'Heart' },
                                            { key: 'lungs', label: 'Lungs' },
                                            { key: 'kidneys', label: 'Kidneys' },
                                            { key: 'liver', label: 'Liver' },
                                            { key: 'corneas', label: 'Corneas' },
                                            { key: 'pancreas', label: 'Pancreas' },
                                            { key: 'tissue', label: 'Tissue' },
                                            { key: 'smallBowel', label: 'Small bowel' }
                                        ].map(organ => (
                                            <div key={organ.key} className='flex items-center'>
                                                <span className='text-sm font-medium text-text-1 w-25'>{organ.label}</span>
                                                <div className='flex items-center gap-4'>
                                                    <label className='flex items-center gap-2 cursor-pointer'>
                                                        <input
                                                            type='radio'
                                                            name={`organ-${organ.key}`}
                                                            checked={organPreferences[organ.key] === 'yes'}
                                                            onChange={() => setOrganPreferences(prev => ({ ...prev, [organ.key]: 'yes' }))}
                                                            className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                                                        />
                                                        <span className='text-sm text-text-4'>Yes</span>
                                                    </label>
                                                    <label className='flex items-center gap-2 cursor-pointer'>
                                                        <input
                                                            type='radio'
                                                            name={`organ-${organ.key}`}
                                                            checked={organPreferences[organ.key] === 'no'}
                                                            onChange={() => setOrganPreferences(prev => ({ ...prev, [organ.key]: 'no' }))}
                                                            className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                                                        />
                                                        <span className='text-sm text-text-4'>No</span>
                                                    </label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div>
                                    <p className='text-sm font-medium text-text-4 mb-2'>Are you registered on NHS Organ Donor Register?</p>
                                    <div className='flex items-center  gap-6 mb-3'>
                                        <label className='flex items-center gap-2 cursor-pointer'>
                                            <input
                                                type='radio'
                                                name='nhsRegistered'
                                                checked={nhsRegistered === 'yes'}
                                                onChange={() => setNhsRegistered('yes')}
                                                className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                                            />
                                            <span className='text-sm font-medium text-text-1'>Yes</span>
                                        </label>
                                        <label className='flex items-center gap-2 cursor-pointer'>
                                            <input
                                                type='radio'
                                                name='nhsRegistered'
                                                checked={nhsRegistered === 'no'}
                                                onChange={() => setNhsRegistered('no')}
                                                className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                                            />
                                            <span className='text-sm font-medium text-text-1'>No</span>
                                        </label>
                                    </div>

                                    {nhsRegistered === 'yes' && (
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Registration Reference No</label>
                                            <input
                                                type='text'
                                                className={`w-full bg-white text-black border ${errors.nhsReference ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7`}
                                                placeholder='Enter reference number'
                                                value={nhsReference}
                                                onChange={(e) => {
                                                    setNhsReference(e.target.value)
                                                    if (errors.nhsReference) setErrors(prev => ({ ...prev, nhsReference: null }))
                                                }}
                                            />
                                            {errors.nhsReference && <p className='text-red-500 text-xs mt-1'>{errors.nhsReference}</p>}
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <label className='block text-sm font-medium text-text-4 mb-1.5'>Additional Notes (optional)</label>
                                    <textarea
                                        rows={3}
                                        className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7 resize-none'
                                        placeholder='Additional Notes if any...'
                                        value={additionalNotes}
                                        onChange={(e) => setAdditionalNotes(e.target.value)}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {errors.global && <p className='text-red-500 text-sm mt-4 font-medium'>{errors.global}</p>}

            {/* Action Buttons */}
            <div className='flex items-center flex-wrap gap-4 mt-8'>
                <button
                    onClick={onBack}
                    type='button'
                    className='cursor-pointer px-6 py-2.5 rounded-lg border border-gray-300 text-text-1 font-medium hover:bg-main hover:text-white transition-colors w-full md:w-auto'
                >
                    Back
                </button>
                <button
                    onClick={handleSave}
                    type='button'
                    className='cursor-pointer flex-1 px-6 py-2.5 rounded-lg bg-main text-white font-medium whitespace-nowrap hover:bg-main/85 transition-colors w-full md:w-auto text-center'
                >
                    Save and Continue
                </button>
                <button
                    onClick={onSkip}
                    type='button'
                    className='cursor-pointer px-6 py-2.5 rounded-lg border border-gray-300 text-text-1 font-medium hover:bg-main hover:text-white transition-colors w-full md:w-auto'
                >
                    Skip
                </button>
            </div>
        </div>
    )
}

export default Funeral