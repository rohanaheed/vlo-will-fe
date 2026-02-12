"use client"
import React, { useState, forwardRef } from 'react'
import Refresh from '@/components/assets/images/RefreshIcon.svg'
import Image from 'next/image'
import Commondropdown from '@/components/common/Commondropdown1.jsx'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import UKFlag from '@/components/assets/images/UkFlag.svg'
import UsFlag from '@/components/assets/images/USFlag.svg'
import calender from '@/components/assets/images/CalendarIcon1.svg'
import PlusBlueIcon from '@/components/assets/images/PlusBlueIcon.svg'
import CrossRedIcon from '@/components/assets/images/CrossRedIcon.svg'


const calculateAge = (dob) => {
    if (!dob) return "";
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return `${age} Year`;
}

const CustomDateInput = forwardRef(({ value, onClick, onChange, placeholder, age }, ref) => (
    <div
        className="flex items-center justify-between border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 bg-white w-full focus-within:border-black"
        onClick={onClick}
    >
        <div className="flex items-center gap-2 w-full">
            <Image src={calender} alt="Calendar" width={20} height={20} className="cursor-pointer" />
            <input
                ref={ref}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="flex-1 w-full bg-transparent text-black border-none outline-none text-sm placeholder:text-[#717680]"
            />
            {age && (
                <span className="text-sm text-text-1 font-medium whitespace-nowrap">
                    {age}
                </span>
            )}
        </div>
    </div>
));
CustomDateInput.displayName = "CustomDateInput";

function Beneficiaries({ onSave, onSkip, onBack }) {
    const [calendarView, setCalendarView] = useState('day')
    const [beneficiaries, setBeneficiaries] = useState([])
    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({
        title: "",
        fullName: "",
        otherName: "",
        gender: "",
        buildingNumber: "",
        buildingName: "",
        street: "",
        town: "",
        city: "",
        county: "",
        postcode: "",
        country: { label: "United Kingdom", value: "UK", icon: UKFlag },
        niNumber: "",
        dob: null,
        phoneCode: { label: "+44", value: "+44", icon: UKFlag },
        phone: "",
        email: "",
        maritalStatus: "",
        marriageClause: "",
        declaration: false
    })

    const titleOptions = ["Mr", "Mrs", "Ms", "Dr", "Prof", "Rev", "Other"]
    const genderOptions = ["Male", "Female", "Trans", "Other", "Prefer not to say"]
    const maritalStatusOptions = [
        "Single",
        "Married",
        "Divorced",
        "Widowed",
        "Civil partner",
        "Previously civil partner",
        "Separated",
        "Living as Partners",
        "Other"
    ]

    // Placeholder options for country and phone code
    const countryOptions = [
        { label: "United Kingdom", value: "UK", icon: UKFlag },
        // Add more countries as needed
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

    const validateBeneficiary = () => {
        const newErrors = {}
        if (!formData.fullName) newErrors.fullName = "Full Name is required"
        if (!formData.dob) newErrors.dob = "Date of Birth is required"
        if (!formData.buildingNumber && !formData.buildingName) newErrors.buildingName = "Building Name or Number is required"
        if (!formData.street) newErrors.street = "Street is required"
        if (!formData.town) newErrors.town = "Town is required"
        if (!formData.postcode) newErrors.postcode = "Postcode is required"
        if (!formData.maritalStatus) newErrors.maritalStatus = "Marital Status is required"

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const addBeneficiary = () => {
        if (validateBeneficiary()) {
            setBeneficiaries(prev => [...prev, { ...formData, id: Date.now() }])
            // Reset form
            setFormData({
                title: "",
                fullName: "",
                otherName: "",
                gender: "",
                buildingNumber: "",
                buildingName: "",
                street: "",
                town: "",
                city: "",
                county: "",
                postcode: "",
                country: { label: "United Kingdom", value: "UK", icon: UKFlag },
                niNumber: "",
                dob: null,
                phoneCode: { label: "+44", value: "+44", icon: UKFlag },
                phone: "",
                email: "",
                maritalStatus: "",
                marriageClause: "",
                declaration: false
            })
            setErrors({})
        }
    }

    const removeBeneficiary = (id) => {
        setBeneficiaries(prev => prev.filter(ben => ben.id !== id))
    }

    return (
        <div className='bg-[#FAFAFA] rounded-lg p-6'>
            <div className='flex items-center justify-between gap-4 flex-wrap w-full mb-6'>
                <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-text-1'>Beneficiary</h2>
                <button className='text-black flex text-xs items-center gap-1 cursor-pointer'>
                    Auto Saved
                    <Image src={Refresh} alt="Refresh" width={16} height={16} className='w-4 h-4' />
                </button>
            </div>

            <p className='text-text-5 text-sm md:text-base mb-4'>
                Enter your full legal details. These appear in your Will exactly as shown.
            </p>

            <form className='space-y-4'>
                <div>
                    <label className='block text-sm font-medium text-text-1 mb-1.5'>Full Name <span className='text-red-500'>*</span></label>
                    <div className={`flex items-center w-full bg-white text-black border ${errors.fullName ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-2 focus-within:border-black`}>
                        <Commondropdown
                            options={titleOptions}
                            value={formData.title}
                            onChange={(val) => handleChange("title", val)}
                            placeholder="Mr / Mrs / Ms / Dr"
                            className="!border-none w-fit !gap-1 text-[#414651] !shadow-none !bg-transparent whitespace-nowrap !py-0 !pr-0 !px-1.5"
                            dropdownClassName="!w-[200px]"
                        />
                        <input
                            type="text"
                            className='flex-1 w-full bg-transparent text-black border-none outline-none py-2.5 pl-1 pr-2 text-sm placeholder:text-[#717680]'
                            placeholder="John Alexander Smith"
                            value={formData.fullName}
                            onChange={(e) => handleChange("fullName", e.target.value)}
                        />
                    </div>
                </div>

                {/* Other Name */}
                <div>
                    <label className='block text-sm font-medium text-text-1 mb-1.5'>Known by any other name (if applicable)</label>
                    <input
                        type="text"
                        className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]'
                        placeholder="Please leave blank if this does not apply."
                        value={formData.otherName}
                        onChange={(e) => handleChange("otherName", e.target.value)}
                    />
                </div>

                {/* Gender */}
                <div>
                    <label className='block text-sm font-medium text-text-1 mb-1.5'>Gender</label>
                    <Commondropdown
                        options={genderOptions}
                        value={formData.gender}
                        onChange={(val) => handleChange("gender", val)}
                        placeholder="Male/Female/Trans/Other / Add"
                        className="w-full"
                    />
                </div>

                <div className=''>
                    <h3 className='text-lg font-bold text-text-1 mb-4'>Address Details <span className='text-red-500'>*</span></h3>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {/* Building Number & Name */}
                        <div>
                            <label className='block text-sm font-medium text-text-5 mb-1.5'>Building Number</label>
                            <input
                                type="text"
                                className={`w-full bg-white text-black border ${errors.buildingName ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]`}
                                placeholder="1568"
                                value={formData.buildingNumber}
                                onChange={(e) => handleChange("buildingNumber", e.target.value)}
                            />
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-text-5 mb-1.5'>Building Name</label>
                            <input
                                type="text"
                                className={`w-full bg-white text-black border ${errors.buildingName ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]`}
                                placeholder="Sky land"
                                value={formData.buildingName}
                                onChange={(e) => handleChange("buildingName", e.target.value)}
                            />
                        </div>
                        {errors.buildingName && <p className='text-red-500 text-xs mt-1 col-span-2'>{errors.buildingName}</p>}

                        {/* Street & Town */}
                        <div>
                            <label className='block text-sm font-medium text-text-5 mb-1.5'>Street</label>
                            <input
                                type="text"
                                className={`w-full bg-white text-black border ${errors.street ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]`}
                                placeholder="Wood Street"
                                value={formData.street}
                                onChange={(e) => handleChange("street", e.target.value)}
                            />
                            {errors.street && <p className='text-red-500 text-xs mt-1'>{errors.street}</p>}
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-text-5 mb-1.5'>Town</label>
                            <input
                                type="text"
                                className={`w-full bg-white text-black border ${errors.town ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]`}
                                placeholder="Leyton"
                                value={formData.town}
                                onChange={(e) => handleChange("town", e.target.value)}
                            />
                            {errors.town && <p className='text-red-500 text-xs mt-1'>{errors.town}</p>}
                        </div>

                        {/* City & County */}
                        <div>
                            <label className='block text-sm font-medium text-text-5 mb-1.5'>City</label>
                            <input
                                type="text"
                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]'
                                placeholder="London"
                                value={formData.city}
                                onChange={(e) => handleChange("city", e.target.value)}
                            />
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-text-5 mb-1.5'>County/State</label>
                            <input
                                type="text"
                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]'
                                placeholder="London"
                                value={formData.county}
                                onChange={(e) => handleChange("county", e.target.value)}
                            />
                        </div>

                        {/* PostCode & Country */}
                        <div>
                            <label className='block text-sm font-medium text-text-5 mb-1.5'>Post/Zip Code</label>
                            <input
                                type="text"
                                className={`w-full bg-white text-black border ${errors.postcode ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]`}
                                placeholder="Post/zip code"
                                value={formData.postcode}
                                onChange={(e) => handleChange("postcode", e.target.value)}
                            />
                            {errors.postcode && <p className='text-red-500 text-xs mt-1'>{errors.postcode}</p>}
                        </div>
                        <div className='text-[#414651]'>
                            <label className='block text-sm font-medium text-text-1 text-text-5 mb-1.5'>Country</label>
                            <Commondropdown
                                options={countryOptions}
                                value={formData.country}
                                onChange={(val) => handleChange("country", val)}
                                placeholder="Select Country"
                                className="w-full py-[10px]"
                                inputClassName=""
                            />
                        </div>
                    </div>
                </div>

                {/* National Insurance Number */}
                <div>
                    <label className='block text-sm font-medium text-text-1 mb-1.5'>National Insurance Number</label>
                    <input
                        type="text"
                        className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]'
                        placeholder="AB123456C"
                        value={formData.niNumber}
                        onChange={(e) => handleChange("niNumber", e.target.value)}
                    />
                </div>


                <div>
                    <label className='block text-sm font-medium text-text-1 mb-1.5'>Date of Birth <span className='text-red-500'>*</span></label>
                    <DatePicker
                        selected={formData.dob}
                        onChange={(date) => {
                            if (calendarView === 'year') {
                                setCalendarView('month')
                                const newDate = new Date(formData.dob || new Date())
                                newDate.setFullYear(date.getFullYear())
                                handleChange("dob", newDate)
                            } else if (calendarView === 'month') {
                                setCalendarView('day')
                                const newDate = new Date(formData.dob || new Date())
                                newDate.setMonth(date.getMonth())
                                newDate.setFullYear(date.getFullYear()) // Month picker might return 1st of month with current year if not careful, but date object usually has correct year if we are in that context
                                handleChange("dob", date) // Actually date from month picker is full date
                            } else {
                                handleChange("dob", date)
                            }
                        }}
                        customInput={<CustomDateInput age={calculateAge(formData.dob)} className={errors.dob ? 'border-red-500' : ''} />}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="DD/MM/YYYY"
                        wrapperClassName="w-full"
                        maxDate={new Date()}
                        showMonthYearPicker={calendarView === 'month'}
                        showYearPicker={calendarView === 'year'}
                        onCalendarClose={() => setCalendarView('day')}
                        shouldCloseOnSelect={calendarView === 'day'}
                        renderCustomHeader={({
                            date,
                            changeYear,
                            changeMonth,
                            decreaseMonth,
                            increaseMonth,
                            prevMonthButtonDisabled,
                            nextMonthButtonDisabled,
                            decreaseYear,
                            increaseYear,
                            prevYearButtonDisabled,
                            nextYearButtonDisabled
                        }) => (
                            <div className="flex items-center justify-between px-2 py-2">
                                <button
                                    onClick={calendarView === 'year' ? decreaseYear : decreaseMonth}
                                    disabled={calendarView === 'year' ? prevYearButtonDisabled : prevMonthButtonDisabled}
                                    type="button"
                                    className={`p-1 hover:bg-gray-100 rounded-full ${(calendarView === 'year' ? prevYearButtonDisabled : prevMonthButtonDisabled) ? 'opacity-30' : ''}`}
                                >
                                    <span className="text-gray-600 text-xl font-bold">{'<'}</span>
                                </button>
                                <div className="flex items-center gap-2 font-bold text-gray-800">
                                    <span
                                        onClick={() => setCalendarView('month')}
                                        className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded transition-colors"
                                    >
                                        {date.toLocaleString('default', { month: 'long' })}
                                    </span>
                                    <span
                                        onClick={() => setCalendarView('year')}
                                        className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded transition-colors"
                                    >
                                        {date.getFullYear()}
                                    </span>
                                </div>
                                <button
                                    onClick={calendarView === 'year' ? increaseYear : increaseMonth}
                                    disabled={calendarView === 'year' ? nextYearButtonDisabled : nextMonthButtonDisabled}
                                    type="button"
                                    className={`p-1 hover:bg-gray-100 rounded-full ${(calendarView === 'year' ? nextYearButtonDisabled : nextMonthButtonDisabled) ? 'opacity-30' : ''}`}
                                >
                                    <span className="text-gray-600 text-xl font-bold">{'>'}</span>
                                </button>
                            </div>
                        )}
                    />
                    {errors.dob && <p className='text-red-500 text-xs mt-1'>{errors.dob}</p>}
                </div>

                {/* Telephone */}
                <div>
                    <label className='block text-sm font-medium text-text-1 mb-1.5'>Telephone (Optional)</label>
                    <div className='flex items-center w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-2 focus-within:border-black'>
                        <Commondropdown
                            options={phoneCodeOptions}
                            value={formData.phoneCode}
                            onChange={(val) => handleChange("phoneCode", val)}
                            className="!border-none w-fit !gap-1 text-[#414651] !shadow-none !bg-transparent whitespace-nowrap !py-0 !pr-0 !px-1.5"
                            dropdownClassName="!w-[200px]"
                        />
                        <input
                            type="text"
                            className='flex-1 w-full bg-transparent text-black border-none outline-none py-2.5 pl-1 pr-2 text-sm placeholder:text-[#717680]'
                            placeholder="7890 123456"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                        />
                    </div>
                </div>

                {/* Email Address */}
                <div>
                    <label className='block text-sm font-medium text-text-1 mb-1.5'>Email Address</label>
                    <input
                        type="email"
                        className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]'
                        placeholder="johnsmith@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                    />
                </div>

                {/* Marital Status */}
                <div>
                    <label className='block text-sm font-medium text-text-1 mb-1.5'>Marital Status <span className='text-red-500'>*</span></label>
                    <Commondropdown
                        options={maritalStatusOptions}
                        value={formData.maritalStatus}
                        onChange={(val) => handleChange("maritalStatus", val)}
                        placeholder="Single / Married / Divorced / Widowed / Civil partner / Previously married / Separated / Living as Partners/Add"
                        className={`w-full ${errors.maritalStatus ? 'border-red-500' : ''}`}
                    />
                    {errors.maritalStatus && <p className='text-red-500 text-xs mt-1'>{errors.maritalStatus}</p>}
                </div>
                {/* Future Marriage Clause */}
                <div className="space-y-4">
                    <p className="text-text-5 text-base md:text-lg lg:text-xl  font-medium">
                        Do you want to include a clause to keep your Will valid after future marriage?
                    </p>
                    <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <div className="relative flex items-center mt-1">
                                <input
                                    type="radio"
                                    name="marriageClause"
                                    value="yes"
                                    checked={formData.marriageClause === 'yes'}
                                    onChange={(e) => handleChange("marriageClause", e.target.value)}
                                    className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                                />
                            </div>
                            <div className="text-sm">
                                <span className="text-black font-medium">Yes, I want to include a clause that keeps my Will valid after marriage.</span>
                            </div>
                        </label>
                        <p className="text-black text-sm">“This Will is made in contemplation of my future marriage, and it shall remain valid and effective after such marriage.”</p>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <div className="relative flex items-center mt-1">
                                <input
                                    type="radio"
                                    name="marriageClause"
                                    value="no"
                                    checked={formData.marriageClause === 'no'}
                                    onChange={(e) => handleChange("marriageClause", e.target.value)}
                                    className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                                />
                            </div>
                            <div className="text-sm text-black">
                                No, I'll update my Will if I get married.
                            </div>
                        </label>
                    </div>
                    <p className="text-sm text-black">
                        <span className="font-bold text-sm text-black">Please note:</span> This Will may become invalid if you marry in the future. It is recommended that you review and update your Will after marriage.
                    </p>
                </div>

                {beneficiaries.length > 0 && (
                    <div className="space-y-3 mt-4">
                        <h3 className='text-sm font-bold text-text-1'>Added Beneficiaries</h3>
                        {beneficiaries.map((ben) => (
                            <div key={ben.id} className="bg-white p-4 rounded-lg border border-gray-200 flex justify-between items-center shadow-sm">
                                <div className="min-w-0 pr-4">
                                    <p className="font-medium text-text-1 truncate" title={[ben.title, ben.fullName].filter(Boolean).join(' ')}>
                                        {[ben.title, ben.fullName].filter(Boolean).join(' ')}
                                    </p>
                                    <p className="text-sm text-text-5 truncate" title={[ben.town, ben.postcode, calculateAge(ben.dob)].filter(Boolean).join(', ')}>
                                        {[ben.town, ben.postcode, calculateAge(ben.dob)].filter(Boolean).join(', ')}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="pt-6 flex gap-4">
                    <button
                        onClick={addBeneficiary}
                        type="button"
                        className="flex cursor-pointer items-center gap-2 px-6 py-2.5 border border-[#003966] text-[#003966] rounded-lg hover:bg-[#F0F7FF] transition-colors text-sm font-bold shadow-sm"
                    >
                        <Image src={PlusBlueIcon} alt="Plus Blue Icon" width={24} height={24} className='w-6 h-6' />
                        Add
                    </button>
                    {beneficiaries.length > 0 && (
                        <button
                            onClick={() => removeBeneficiary(beneficiaries[beneficiaries.length - 1].id)}
                            type="button"
                            className="flex cursor-pointer items-center gap-2 px-6 py-2.5 border border-[#FF383C] text-[#FF383C] rounded-lg hover:bg-[#FEF3F2] transition-colors text-sm font-bold shadow-sm"
                        >
                            <Image src={CrossRedIcon} alt="Cross Red Icon" width={24} height={24} className='w-6 h-6' />
                            Remove
                        </button>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200 mt-6 md:mt-8">
                    <button onClick={onBack} type="button" className="px-6 py-2.5 rounded-lg border border-gray-300 text-text-1 font-medium hover:bg-gray-50 transition-colors w-full md:w-auto">
                        Back
                    </button>
                    <button onClick={onSave} type="button" className="flex-1 px-6 py-2.5 rounded-lg bg-[#003966] text-white font-medium hover:bg-[#002d52] transition-colors w-full md:w-auto text-center">
                        Save and Continue
                    </button>
                    <button onClick={onSkip} type="button" className="px-6 py-2.5 rounded-lg border border-gray-300 text-text-1 font-medium hover:bg-gray-50 transition-colors w-full md:w-auto">
                        Skip
                    </button>
                </div>

                {/* Declaration */}
                <div className="pt-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                        <div className="relative flex items-center mt-0.5">
                            <input
                                type="checkbox"
                                checked={formData.declaration}
                                onChange={(e) => handleChange("declaration", e.target.checked)}
                                className="appearance-none w-5 h-5 border border-gray-300 rounded bg-white checked:bg-[#003966] checked:border-[#003966] focus:outline-none relative flex items-center justify-center cursor-pointer after:content-[''] after:hidden after:absolute after:w-1.5 after:h-2.5 after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:mb-0.5 checked:after:block"
                            />
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            <span className="font-bold text-sm text-text-5">Declaration:</span> “I declare that I am over 18 years of age, of sound mind, and making this Will voluntarily, in accordance with the laws of England and Wales.”
                        </p>
                    </label>
                </div>
            </form>
        </div>
    )
}

export default Beneficiaries