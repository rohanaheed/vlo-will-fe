"use client"
import React, { useState, forwardRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Refresh from '@/components/assets/images/RefreshIcon.svg'
import Image from 'next/image'
import Commondropdown from '@/components/common/Commondropdown1.jsx'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import UKFlag from '@/components/assets/images/UkFlag.svg'
import UsFlag from '@/components/assets/images/USFlag.svg'
import calender from '@/components/assets/images/CalendarIcon1.svg'


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
                className="flex-1 w-full bg-transparent text-black border-none outline-none text-sm placeholder:text-text-7"
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

function Testatot({ onSave, onSkip, onBack, onDataChange, initialData }) {
    const [calendarView, setCalendarView] = useState('day')
    const defaultData = {
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
    }
    const [formData, setFormData] = useState(initialData || defaultData)

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

    const [errors, setErrors] = useState({})

    // Restore from initialData when navigating back
    useEffect(() => {
        if (initialData) setFormData(initialData)
    }, [initialData])

    // Emit live data for preview
    useEffect(() => {
        if (onDataChange) onDataChange(formData)
    }, [formData])

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }))
        // Clear error for this field when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: null }))
        }
    }

    const router = useRouter()

    const validateForm = () => {
        const newErrors = {}

        // Full Name validation
        if (!formData.title) newErrors.title = "Title is required"
        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"

        // Address validation - at least one address field is required
        const hasAddress = formData.buildingNumber || formData.buildingName ||
            formData.street || formData.town || formData.city ||
            formData.county || formData.postcode
        if (!hasAddress) {
            newErrors.address = "At least one address field is required"
        }

        // Date of Birth validation
        if (!formData.dob) newErrors.dob = "Date of birth is required"

        // Marital Status validation
        if (!formData.maritalStatus) newErrors.maritalStatus = "Marital status is required"

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSave = () => {
        if (validateForm()) {
            onSave()
        } else {
            // Scroll to first error
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <div className='bg-[#FAFAFA] rounded-lg p-6'>
            <div className='flex items-center justify-between gap-4 flex-wrap w-full mb-5'>
                <h2 className='text-xl md:text-2xl lg:text-4xl font-bold text-text-1'>Testator Information</h2>
                <button className='text-black flex text-xs items-center gap-1 cursor-pointer'>
                    Auto Saved
                    <Image src={Refresh} alt="Refresh" width={16} height={16} className='w-4 h-4' />
                </button>
            </div>

            <p className='text-text-5 text-sm md:text-base mb-4'>
                Enter your full legal details. These appear in your Will exactly as shown.
            </p>

            <form className='space-y-4'>
                {/* Full Name */}
                <div>
                    <label className='block text-sm font-medium text-text-1 mb-1.5'>Full Name <span className='text-red-500'>*</span></label>
                    <div className={`flex items-center w-full bg-white text-black border rounded-lg px-2 focus-within:border-black ${errors.title || errors.fullName ? 'border-red-500' : 'border-[#D5D7DA]'}`}>
                        <Commondropdown
                            options={titleOptions}
                            value={formData.title}
                            onChange={(val) => handleChange("title", val)}
                            placeholder="Mr / Mrs / Ms / Dr"
                            className="border-none! w-fit gap-1 text-text-4 shadow-none! whitespace-nowrap py-0! pr-0! px-1.5!"
                            dropdownClassName="!w-[200px]"
                        />
                        <input
                            type="text"
                            className='flex-1 w-full bg-transparent text-black border-none outline-none py-2.5 pl-1 pr-2 text-sm placeholder:text-text-7'
                            placeholder="John Alexander Smith"
                            value={formData.fullName}
                            onChange={(e) => handleChange("fullName", e.target.value)}
                        />
                    </div>
                    {(errors.title || errors.fullName) && (
                        <p className='text-red-500 text-xs mt-1'>{errors.title || errors.fullName}</p>
                    )}
                </div>

                {/* Other Name */}
                <div>
                    <label className='block text-sm font-medium text-text-1 mb-1.5'>Known by any other name (if applicable)</label>
                    <input
                        type="text"
                        className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
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
                        className="w-full bg-white text-text-4"
                        dropdownClassName="!hover:bg-zinc-200 !bg-white"
                    />
                </div>

                <div className=''>
                    <h3 className='text-lg font-bold text-text-1 mb-4'>Address Details <span className='text-red-500'>*</span></h3>
                    {errors.address && (
                        <p className='text-red-500 text-xs mb-2'>{errors.address}</p>
                    )}

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {/* Building Number & Name */}
                        <div>
                            <label className='block text-sm font-medium text-text-5 mb-1.5'>Building Number</label>
                            <input
                                type="text"
                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                placeholder="1568"
                                value={formData.buildingNumber}
                                onChange={(e) => handleChange("buildingNumber", e.target.value)}
                            />
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-text-5 mb-1.5'>Building Name</label>
                            <input
                                type="text"
                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                placeholder="Sky land"
                                value={formData.buildingName}
                                onChange={(e) => handleChange("buildingName", e.target.value)}
                            />
                        </div>

                        {/* Street & Town */}
                        <div>
                            <label className='block text-sm font-medium text-text-5 mb-1.5'>Street</label>
                            <input
                                type="text"
                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                placeholder="Wood Street"
                                value={formData.street}
                                onChange={(e) => handleChange("street", e.target.value)}
                            />
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-text-5 mb-1.5'>Town</label>
                            <input
                                type="text"
                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                placeholder="Leyton"
                                value={formData.town}
                                onChange={(e) => handleChange("town", e.target.value)}
                            />
                        </div>

                        {/* City & County */}
                        <div>
                            <label className='block text-sm font-medium text-text-5 mb-1.5'>City</label>
                            <input
                                type="text"
                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                placeholder="London"
                                value={formData.city}
                                onChange={(e) => handleChange("city", e.target.value)}
                            />
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-text-5 mb-1.5'>County/State</label>
                            <input
                                type="text"
                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
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
                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                placeholder="Post/zip code"
                                value={formData.postcode}
                                onChange={(e) => handleChange("postcode", e.target.value)}
                            />
                        </div>
                        <div className='text-text-4'>
                            <label className='block text-sm font-medium text-text-5 mb-1.5'>Country</label>
                            <Commondropdown
                                options={countryOptions}
                                value={formData.country}
                                onChange={(val) => handleChange("country", val)}
                                placeholder="Select Country"
                                className="w-full py-[10px] bg-white text-text-4"
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
                        className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                        placeholder="AB123456C"
                        value={formData.niNumber}
                        onChange={(e) => handleChange("niNumber", e.target.value)}
                    />
                </div>


                <div>
                    <label className='block text-sm font-medium text-text-1 mb-1.5'>Date of Birth <span className='text-red-500'>*</span></label>
                    {errors.dob && (
                        <p className='text-red-500 text-xs mb-1'>{errors.dob}</p>
                    )}
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
                        customInput={<CustomDateInput age={calculateAge(formData.dob)} />}
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
                </div>

                {/* Telephone */}
                <div>
                    <label className='block text-sm font-medium text-text-1 mb-1.5'>Telephone (Optional)</label>
                    <div className='flex items-center w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-2 focus-within:border-black'>
                        <Commondropdown
                            options={phoneCodeOptions}
                            value={formData.phoneCode}
                            onChange={(val) => handleChange("phoneCode", val)}
                            className="border-none! w-fit gap-1! text-text-4 shadow-none! bg-white whitespace-nowrap py-0! pr-0! px-1.5!"
                            dropdownClassName="!w-[200px]"
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
                    <label className='block text-sm font-medium text-text-1 mb-1.5'>Email Address</label>
                    <input
                        type="email"
                        className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
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
                        className={`w-full bg-white text-text-4 ${errors.maritalStatus ? 'border-red-500!' : ''}`}
                    />
                    {errors.maritalStatus && (
                        <p className='text-red-500 text-xs mt-1'>{errors.maritalStatus}</p>
                    )}
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

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 mt-8">
                    <button onClick={() => router.push("/create-your-will")} type="button" className="cursor-pointer px-6 py-2.5 rounded-lg border border-gray-300 text-text-1 font-medium hover:bg-main hover:text-white transition-colors w-full md:w-auto">
                        Back
                    </button>
                    <button onClick={handleSave}
                        type="button" className="cursor-pointer flex-1 px-6 py-2.5 rounded-lg bg-main text-white font-medium whitespace-nowrap hover:bg-main/85 transition-colors w-full md:w-auto text-center">
                        Save and Continue
                    </button>
                    <button onClick={onSkip} type="button" className="cursor-pointer px-6 py-2.5 rounded-lg border border-gray-300 text-text-1 font-medium hover:bg-main hover:text-white transition-colors w-full md:w-auto">
                        Skip
                    </button>
                </div>

                {/* Declaration */}
                <div className="">
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

export default Testatot