"use client"
import React, { useState, forwardRef } from 'react'
import Refresh from '@/components/assets/images/RefreshIcon.svg'
import Image from 'next/image'
import Commondropdown from '@/components/common/Commondropdown1.jsx'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import UKFlag from '@/components/assets/images/UkFlag.svg'
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
                className="flex-1 w-full bg-transparent text-black border-none outline-none text-sm placeholder:text-text-7"
            />
            {age && (
                <span className="text-sm text-text-4 font-medium whitespace-nowrap">
                    {age}
                </span>
            )}
        </div>
    </div>
));
CustomDateInput.displayName = "CustomDateInput";

function Spouse({ onSave, onSkip, onBack }) {
    const [hasSpouse, setHasSpouse] = useState(true)
    const [spouseList, setSpouseList] = useState([])
    const initialFormData = {
        title: "",
        fullName: "",
        dob: null,
        relationship: "",
        buildingNumber: "",
        buildingName: "",
        street: "",
        town: "",
        city: "",
        county: "",
        postcode: "",
        country: { label: "United Kingdom", value: "UK", icon: UKFlag },
        phoneCode: { label: "+44", value: "+44", icon: UKFlag },
        phone: "",
    }

    const [formData, setFormData] = useState({ ...initialFormData })

    const [errors, setErrors] = useState({})
    const [calendarView, setCalendarView] = useState('day')

    const titleOptions = ["Mr", "Mrs", "Ms", "Dr", "Prof", "Rev", "Other"]

    // Relationship Options
    const relationshipOptions = [
        "Spouse",
        "Civil Partner",
        "Long-term Partner",
        "Add"
    ]

    const phoneCodeOptions = [
        { label: "+44", value: "+44", icon: UKFlag },
    ]

    const countryOptions = [
        { label: "United Kingdom", value: "UK", icon: UKFlag },
    ]


    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: null }))
        }
    }


    const validate = () => {
        const newErrors = {}
        if (hasSpouse) {
            if (!formData.fullName) newErrors.fullName = "Full Name is required"
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const addSpouse = () => {
        if (validate()) {
            setSpouseList(prev => [...prev, { ...formData, id: Date.now() }])
            setFormData({ ...initialFormData })
            setErrors({})
        }
    }

    const removeSpouse = () => {
        if (spouseList.length > 0) {
            setSpouseList(prev => prev.slice(0, -1))
        }
    }

    const handleSave = () => {
        if (hasSpouse && spouseList.length === 0) {
            if (!validate()) {
                setErrors(prev => ({ ...prev, global: "Please add spouse details or complete the current entry" }))
            } else {
                setErrors(prev => ({ ...prev, global: "Please click 'Add' to include these details in your list" }))
            }
            return
        }
        onSave()
    }

    return (
        <div className='bg-[#FAFAFA] rounded-lg p-6'>
            <div className='flex items-center justify-between gap-4 flex-wrap w-full mb-5'>
                <h2 className='text-xl md:text-2xl lg:text-4xl font-bold text-text-1'>Spouse Details</h2>
                <button className='text-black flex text-xs items-center gap-1 cursor-pointer'>
                    Auto Saved
                    <Image src={Refresh} alt="Refresh" width={16} height={16} className='w-4 h-4' />
                </button>
            </div>

            <p className='text-text-5 text-xl mb-4'>
                Add details about your spouse or partner (if applicable).
            </p>

            <div className='mb-6'>
                <label className='block text-sm font-medium text-text-4 mb-3'>
                    Do you have a spouse or civil partner?
                </label>
                <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="hasSpouse"
                            checked={hasSpouse === true}
                            onChange={() => setHasSpouse(true)}
                            className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                        />
                        <span className="text-sm font-medium text-text-1">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="hasSpouse"
                            checked={hasSpouse === false}
                            onChange={() => setHasSpouse(false)}
                            className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                        />
                        <span className="text-sm font-medium text-text-1">No</span>
                    </label>
                </div>
            </div>

            {hasSpouse && (
                <form className='space-y-4'>
                    {/* Full Name */}
                    <div>
                        <label className='block text-sm font-medium text-text-4 mb-1.5'>Full Name <span className='text-red-500'>*</span></label>
                        <div className={`flex items-center w-full bg-white text-black border ${errors.fullName ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-2 focus-within:border-black`}>
                            <Commondropdown
                                options={titleOptions}
                                value={formData.title}
                                onChange={(val) => handleChange("title", val)}
                                placeholder="Mr / Mrs / Ms / Dr"
                                className="border-none! w-fit gap-1! text-text-4 shadow-none! whitespace-nowrap! py-0! pr-0! px-1.5!"
                                dropdownClassName="!w-[120px]"
                            />
                            <input
                                type="text"
                                className='flex-1 w-full bg-transparent text-black border-none outline-none py-2.5 pl-1 pr-2 text-sm placeholder:text-text-7'
                                placeholder="John Alexander Smith"
                                value={formData.fullName}
                                onChange={(e) => handleChange("fullName", e.target.value)}
                            />
                        </div>
                        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Date of Birth */}
                    <div>
                        <label className='block text-sm font-medium text-text-4 mb-1.5'>Date of Birth (optional)</label>
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
                                    newDate.setFullYear(date.getFullYear())
                                    handleChange("dob", date)
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

                    {/* Relationship Type */}
                    <div>
                        <label className='block text-sm font-medium text-text-4 mb-1.5'>Relationship Type <span className='text-red-500'>*</span></label>
                        <Commondropdown
                            options={relationshipOptions}
                            value={formData.relationship}
                            onChange={(val) => handleChange("relationship", val)}
                            placeholder="Spouse / Civil Partner / Long-term Partner / Add"
                            className="w-full py-2.5! text-text-4"
                        />
                    </div>

                    {/* Address Details */}
                    <div>
                        <label className='block text-xl font-bold text-black mb-4'>Address Details <span className='text-red-500'>*</span></label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>Building Number</label>
                                <input
                                    type="text"
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="1568"
                                    value={formData.buildingNumber}
                                    onChange={(e) => handleChange("buildingNumber", e.target.value)}
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>Building Name</label>
                                <input
                                    type="text"
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="Sky land"
                                    value={formData.buildingName}
                                    onChange={(e) => handleChange("buildingName", e.target.value)}
                                />
                            </div>

                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>Street</label>
                                <input
                                    type="text"
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="Wood Street"
                                    value={formData.street}
                                    onChange={(e) => handleChange("street", e.target.value)}
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>Town</label>
                                <input
                                    type="text"
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="Leyton"
                                    value={formData.town}
                                    onChange={(e) => handleChange("town", e.target.value)}
                                />
                            </div>

                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>City</label>
                                <input
                                    type="text"
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="London"
                                    value={formData.city}
                                    onChange={(e) => handleChange("city", e.target.value)}
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>County/State</label>
                                <input
                                    type="text"
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="London"
                                    value={formData.county}
                                    onChange={(e) => handleChange("county", e.target.value)}
                                />
                            </div>

                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>Post/Zip Code</label>
                                <input
                                    type="text"
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="Post/zip code"
                                    value={formData.postcode}
                                    onChange={(e) => handleChange("postcode", e.target.value)}
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>Country</label>
                                <Commondropdown
                                    options={countryOptions}
                                    value={formData.country}
                                    onChange={(val) => handleChange("country", val)}
                                    placeholder="Select Country"
                                    className="w-full py-2.5! text-text-4"
                                />
                            </div>
                        </div>
                    </div>


                    {/* Telephone */}
                    <div>
                        <label className='block text-sm font-medium text-text-4 mb-1.5'>Telephone (Optional)</label>
                        <div className='flex items-center w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-2 focus-within:border-black'>
                            <Commondropdown
                                options={phoneCodeOptions}
                                value={formData.phoneCode}
                                onChange={(val) => handleChange("phoneCode", val)}
                                className="border-none! w-fit gap-1! text-text-4 shadow-none! whitespace-nowrap! py-0! pr-0! px-1.5!"
                                dropdownClassName="!w-[100px]"
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

                    {/* List of Added Spouses */}
                    {spouseList.length > 0 && (
                        <div className="space-y-3 mt-4">
                            <h3 className='text-sm font-bold text-text-1'>Added Spouse/Partner Details</h3>
                            {spouseList.map((spouse) => (
                                <div key={spouse.id} className="bg-white p-4 rounded-lg border border-gray-200 flex justify-between items-center shadow-sm">
                                    <div className="min-w-0 pr-4">
                                        <p className="font-medium text-text-1 truncate" title={[spouse.title, spouse.fullName].filter(Boolean).join(' ')}>
                                            {[spouse.title, spouse.fullName].filter(Boolean).join(' ')} - {spouse.relationship}
                                        </p>
                                        <p className="text-sm text-text-5 truncate">
                                            Age: {calculateAge(spouse.dob)} | {spouse.phone || "No telephone"}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Add/Remove Buttons */}
                    <div className="flex gap-4 pt-4">
                        <button
                            onClick={addSpouse}
                            type="button"
                            className="flex cursor-pointer text-base font-semibold items-center gap-2 px-8.5 py-2.5 border border-[#003966] text-[#003966] rounded-lg hover:bg-[#F0F7FF] transition-colors shadow-sm"
                        >
                            <Image src={PlusBlueIcon} alt="Plus Blue Icon" width={24} height={24} className='w-6 h-6' />
                            Add
                        </button>
                        <button
                            onClick={removeSpouse}
                            type="button"
                            className="flex cursor-pointer items-center gap-2 px-5 py-2.5 border border-[#FF383C] text-[#FF383C] rounded-lg hover:bg-[#FEF3F2] transition-colors text-base font-semibold shadow-sm"
                        >
                            <Image src={CrossRedIcon} alt="Cross Red Icon" width={24} height={24} className='w-6 h-6' />
                            Remove
                        </button>
                    </div>
                    {errors.global && <p className='text-red-500 text-sm mt-3 font-medium'>{errors.global}</p>}

                </form>
            )}

            {/* Action Buttons */}
            <div className="flex items-center flex-wrap gap-4 mt-8">
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
        </div>
    )
}

export default Spouse