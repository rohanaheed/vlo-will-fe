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

function Beneficiaries({ onSave, onSkip, onBack }) {
    const [hasChildren, setHasChildren] = useState(true)
    const [beneficiaries, setBeneficiaries] = useState([])
    const [formData, setFormData] = useState({
        title: "",
        fullName: "",
        gender: "",
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
        inheritanceAge: "",
    })

    const [errors, setErrors] = useState({})
    const [calendarView, setCalendarView] = useState('day')

    const titleOptions = ["Mr", "Mrs", "Ms", "Dr", "Prof", "Rev", "Other"]

    const genderOptions = [
        "Male",
        "Female",
        "Trans",
        "Other",
        "Add"
    ]

    const relationshipOptions = [
        "Son",
        "Daughter",
        "Step Son",
        "Step Daughter",
        "Add"
    ]

    const countryOptions = [
        { label: "United Kingdom", value: "UK", icon: UKFlag },
    ]

    const inheritanceAgeOptions = [
        "18 years",
        "21 years",
        "25 years",
        "30 years"
    ]

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: null }))
        }
    }

    const validate = () => {
        const newErrors = {}
        if (hasChildren) {
            if (!formData.fullName) newErrors.fullName = "Full Name is required"
            if (!formData.relationship) newErrors.relationship = "Relationship is required"
            if (!formData.inheritanceAge) newErrors.inheritanceAge = "Age of inheritance is required"
            // Add check for other fields if strict validation needed
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const addBeneficiary = () => {
        if (validate()) {
            setBeneficiaries(prev => [...prev, { ...formData, id: Date.now() }])
            setFormData({
                title: "",
                fullName: "",
                gender: "",
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
                inheritanceAge: "",
            })
            setErrors({})
        }
    }

    const removeBeneficiary = (id) => {
        setBeneficiaries(prev => prev.filter(ben => ben.id !== id))
    }

    // Guardian State
    const [guardians, setGuardians] = useState([])
    const [hasBackupGuardian, setHasBackupGuardian] = useState(null)
    const [guardianErrors, setGuardianErrors] = useState({})

    const initialGuardianState = {
        title: "",
        fullName: "",
        relationship: "",
        dob: null,
        buildingNumber: "",
        buildingName: "",
        street: "",
        town: "",
        city: "",
        county: "",
        postcode: "",
        country: { label: "United Kingdom", value: "UK", icon: UKFlag },
        phoneCode: { label: "+44", value: "UK", icon: UKFlag },
        phone: "",
        email: ""
    };

    // Using single form for both initially for simplicity, but for clarity let's use separate states
    const [guardianForm, setGuardianForm] = useState({ ...initialGuardianState })

    // Backup Guardian State
    const [backupGuardians, setBackupGuardians] = useState([])
    const [backupGuardianErrors, setBackupGuardianErrors] = useState({})
    const [backupGuardianForm, setBackupGuardianForm] = useState({ ...initialGuardianState })
    const [isAlternateGuardian, setIsAlternateGuardian] = useState(false)

    // Trustee State
    const [isTrustee, setIsTrustee] = useState(false)
    const [trusteeForm, setTrusteeForm] = useState({ ...initialGuardianState })
    const [trusteeErrors, setTrusteeErrors] = useState({})
    const [trusteePowers, setTrusteePowers] = useState({
        allPowers: false,
        management: false,
        investment: false,
        delegate: false,
        property: false,
        lendBorrow: false,
        minors: false,
        advancements: false,
        appropriateAssets: false,
        majority: false,
        charge: false,
        nonInterestAccounts: false,
        additionalPowers: ''
    })

    // Charity State
    const [hasCharitableGifts, setHasCharitableGifts] = useState(false)
    const [beneficiaryDetailsList, setBeneficiaryDetailsList] = useState([])
    const [charityList, setCharityList] = useState([])

    // Form state for Beneficiary Details
    const [beneficiaryDetailsForm, setBeneficiaryDetailsForm] = useState({
        title: "",
        fullName: "",
        gender: "",
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
        telephone: "",
        email: ""
    })

    // Form state for Charity
    const [charityForm, setCharityForm] = useState({
        charityName: "",
        registeredNumber: "",
        address: "",
        gift: "",
        purpose: ""
    })

    const phoneCodeOptions = [
        { label: "+44", value: "+44", icon: UKFlag },
    ]

    const guardianRelationshipOptions = [
        "Son", "Daughter", "Brother", "Sister", "Mother", "Father",
        "Grandmother", "Grandfather", "Aunt", "Uncle", "Cousin",
        "Niece", "Nephew", "Spouse", "Friend", "Other", "Add"
    ]

    const handleGuardianChange = (field, value) => {
        setGuardianForm(prev => ({ ...prev, [field]: value }))
        if (guardianErrors[field]) {
            setGuardianErrors(prev => ({ ...prev, [field]: null }))
        }
    }

    const handleBackupGuardianChange = (field, value) => {
        setBackupGuardianForm(prev => ({ ...prev, [field]: value }))
        if (backupGuardianErrors[field]) {
            setBackupGuardianErrors(prev => ({ ...prev, [field]: null }))
        }
    }

    const handleBeneficiaryDetailsFormChange = (field, value) => {
        setBeneficiaryDetailsForm(prev => ({ ...prev, [field]: value }))
    }

    const handleCharityFormChange = (field, value) => {
        setCharityForm(prev => ({ ...prev, [field]: value }))
    }

    const handleTrusteeChange = (field, value) => {
        setTrusteeForm(prev => ({ ...prev, [field]: value }))
        if (trusteeErrors[field]) {
            setTrusteeErrors(prev => ({ ...prev, [field]: null }))
        }
    }

    const handleTrusteePowerChange = (power) => {
        if (power === 'allPowers') {
            const newValue = !trusteePowers.allPowers
            setTrusteePowers({
                allPowers: newValue,
                management: newValue,
                investment: newValue
            })
        } else {
            setTrusteePowers(prev => ({ ...prev, [power]: !prev[power] }))
            // If checking unchecks allPowers logic could be added here
            if (trusteePowers[power] && trusteePowers.allPowers) { // If currently true (so becoming false)
                setTrusteePowers(prev => ({ ...prev, [power]: false, allPowers: false }))
            }
        }
    }

    const validateTrustee = () => {
        const newErrors = {}
        if (!trusteeForm.fullName) newErrors.fullName = "Full Name is required"
        if (!trusteeForm.relationship) newErrors.relationship = "Relationship is required"
        setTrusteeErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }



    const validateGuardian = () => {
        const newErrors = {}
        if (!guardianForm.fullName) newErrors.fullName = "Full Name is required"
        if (!guardianForm.relationship) newErrors.relationship = "Relationship is required"
        // Add more validation as needed
        setGuardianErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const validateBackupGuardian = () => {
        const newErrors = {}
        if (!backupGuardianForm.fullName) newErrors.fullName = "Full Name is required"
        if (!backupGuardianForm.relationship) newErrors.relationship = "Relationship is required"
        // Add more validation as needed
        setBackupGuardianErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const addGuardian = () => {
        if (validateGuardian()) {
            setGuardians(prev => [...prev, { ...guardianForm, id: Date.now() }])
            setGuardianForm({ ...initialGuardianState })
            setGuardianErrors({})
        }
    }

    const addBackupGuardian = () => {
        if (validateBackupGuardian()) {
            setBackupGuardians(prev => [...prev, { ...backupGuardianForm, id: Date.now() }])
            setBackupGuardianForm({ ...initialGuardianState })
            setBackupGuardianErrors({})
        }
    }

    const removeGuardian = (id) => {
        setGuardians(prev => prev.filter(g => g.id !== id))
    }

    const removeBackupGuardian = (id) => {
        setBackupGuardians(prev => prev.filter(g => g.id !== id))
    }

    // Beneficiary Details Functions
    const addBeneficiaryDetail = () => {
        const newEntry = {
            id: Date.now(),
            ...beneficiaryDetailsForm
        }
        setBeneficiaryDetailsList(prev => [...prev, newEntry])
        // Reset form
        setBeneficiaryDetailsForm({
            title: "",
            fullName: "",
            gender: "",
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
            telephone: "",
            email: ""
        })
    }

    const removeBeneficiaryDetail = (id) => {
        setBeneficiaryDetailsList(prev => prev.filter(item => item.id !== id))
    }

    // Charity Functions
    const addCharity = () => {
        const newCharity = {
            id: Date.now(),
            ...charityForm
        }
        setCharityList(prev => [...prev, newCharity])
        // Reset form
        setCharityForm({
            charityName: "",
            registeredNumber: "",
            address: "",
            gift: "",
            purpose: ""
        })
    }

    const removeCharity = (id) => {
        setCharityList(prev => prev.filter(item => item.id !== id))
    }


    const handleSave = () => {
        let isValid = true;
        const newErrors = {};

        // 1. Children Validation
        if (hasChildren && beneficiaries.length === 0) {
            if (!validate()) {
                newErrors.children_global = "Please add at least one child or complete the current entry";
            } else {
                newErrors.children_global = "Please click 'Add' to include this child in your list";
            }
            isValid = false;
        }

        // 2. Guardian Validation (Mandatory if any child is under 18)
        if (hasChildren) {
            const hasMinor = beneficiaries.some(ben => {
                const ageMatch = calculateAge(ben.dob).match(/(\d+)/);
                return ageMatch && parseInt(ageMatch[1]) < 18;
            });

            if (hasMinor && guardians.length === 0) {
                if (!validateGuardian()) {
                    newErrors.guardian_global = "Please add at least one guardian for your minor children";
                } else {
                    newErrors.guardian_global = "Please click 'Add' to include this guardian in your list";
                }
                isValid = false;
            }
        }

        // 3. Other Beneficiaries Validation
        if (beneficiaryDetailsList.length === 0) {
            if (!beneficiaryDetailsForm.fullName) {
                newErrors.other_ben_global = "Please add at least one beneficiary or complete the form below";
            } else {
                newErrors.other_ben_global = "Please click 'Add' to include this beneficiary in your list";
            }
            isValid = false;
        }

        // 4. Charity Validation
        if (hasCharitableGifts && charityList.length === 0) {
            if (!charityForm.charityName) {
                newErrors.charity_global = "Please add at least one charity or complete the form below";
            } else {
                newErrors.charity_global = "Please click 'Add' to include this charity in your list";
            }
            isValid = false;
        }

        if (isValid) {
            onSave();
        } else {
            setErrors(prev => ({ ...prev, ...newErrors }));
            // Also need to set specific section error states if used
            if (newErrors.guardian_global) setGuardianErrors(prev => ({ ...prev, global: newErrors.guardian_global }));
        }
    }

    return (
        <div className='bg-[#FAFAFA] rounded-lg p-6'>
            <div className='flex items-center justify-between gap-4 flex-wrap w-full mb-5'>
                <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-text-1'>Beneficiaries</h2>
                <button className='text-black flex text-xs items-center gap-1 cursor-pointer'>
                    Auto Saved
                    <Image src={Refresh} alt="Refresh" width={16} height={16} className='w-4 h-4' />
                </button>
            </div>

            <p className='text-text-5 text-xl mb-4'>
                Specify the people or organizations who will receive your assets or gifts after your passing. Include their names and relationship to you.
            </p>

            <div className='mb-6'>
                <label className='block text-sm font-medium text-text-4 mb-3'>
                    Do you have any children?
                </label>
                <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="hasChildren"
                            checked={hasChildren === true}
                            onChange={() => setHasChildren(true)}
                            className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                        />
                        <span className="text-sm font-medium text-text-1">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="hasChildren"
                            checked={hasChildren === false}
                            onChange={() => setHasChildren(false)}
                            className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                        />
                        <span className="text-sm font-medium text-text-1">No</span>
                    </label>
                </div>
            </div>

            {hasChildren && (
                <div className='space-y-4'>
                    {/* Entry Form */}
                    <div className=''>
                        <div className="flex items-center gap-2 mb-4">
                            <h3 className='text-xl font-bold text-text-1'>Beneficiary Details</h3>
                            <div className="flex items-center justify-center w-[17px] h-[17px] rounded-full border border-black text-black text-[10px] font-bold cursor-pointer">?</div>
                        </div>
                        <div className='grid grid-cols-1 gap-4'>
                            {/* Child's Full Name */}
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>Child's Full Name <span className='text-red-500'>*</span></label>
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
                                        placeholder="Mohammed Ali Khan"
                                        value={formData.fullName}
                                        onChange={(e) => handleChange("fullName", e.target.value)}
                                    />
                                </div>
                                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                            </div>

                            {/* Gender */}
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>Gender</label>
                                <Commondropdown
                                    options={genderOptions}
                                    value={formData.gender}
                                    onChange={(val) => handleChange("gender", val)}
                                    placeholder="Male / Female / Trans/Other / Add"
                                    className="w-full py-2.5! text-text-4"
                                />
                            </div>

                            {/* Age / Date of Birth */}
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>Age / Date of Birth</label>
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

                            {/* Relationship to you */}
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>What is their relationship to you? <span className='text-red-500'>*</span></label>
                                <Commondropdown
                                    options={relationshipOptions}
                                    value={formData.relationship}
                                    onChange={(val) => handleChange("relationship", val)}
                                    placeholder="Son / Daughter / Step Son / Step Daughter / Add"
                                    className="w-full py-2.5! text-text-4"
                                />
                                {errors.relationship && <p className="text-red-500 text-xs mt-1">{errors.relationship}</p>}
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

                            {/* Age of inheritance */}
                            <div>
                                <div className="flex items-center gap-2 mb-1.5">
                                    <label className='block text-sm font-medium text-text-4'>Age of inheritance <span className='text-red-500'>*</span></label>
                                    <div className="flex items-center justify-center w-[17px] h-[17px] rounded-full border border-black text-black text-[10px] font-bold cursor-pointer">?</div>
                                </div>
                                <Commondropdown
                                    options={inheritanceAgeOptions}
                                    value={formData.inheritanceAge}
                                    onChange={(val) => handleChange("inheritanceAge", val)}
                                    placeholder="25 years"
                                    className="w-full py-2.5! text-text-4"
                                />
                                {errors.inheritanceAge && <p className="text-red-500 text-xs mt-1">{errors.inheritanceAge}</p>}
                            </div>
                        </div>

                        {/* List of Added Beneficiaries */}
                        {beneficiaries.length > 0 && (
                            <div className="space-y-3 mt-4">
                                <h3 className='text-sm font-bold text-text-1'>Added Beneficiaries</h3>
                                {beneficiaries.map((ben) => (
                                    <div key={ben.id} className="bg-white p-4 rounded-lg border border-gray-200 flex justify-between items-center shadow-sm">
                                        <div className="min-w-0 pr-4">
                                            <p className="font-medium text-text-1 truncate" title={[ben.title, ben.fullName].filter(Boolean).join(' ')}>
                                                {[ben.title, ben.fullName].filter(Boolean).join(' ')} - {ben.relationship}
                                            </p>
                                            <p className="text-sm text-text-5 truncate" title={[ben.town, ben.postcode, calculateAge(ben.dob)].filter(Boolean).join(', ')}>
                                                Age: {calculateAge(ben.dob)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}


                        {/* Add/Remove Buttons */}
                        <div className="pt-4 flex gap-4">
                            <button
                                onClick={addBeneficiary}
                                type="button"
                                className="flex cursor-pointer items-center gap-2 px-8.5 py-2.5 text-base font-semibold border border-[#003966] text-[#003966] rounded-lg hover:bg-[#F0F7FF] transition-colors shadow-sm"
                            >
                                <Image src={PlusBlueIcon} alt="Plus Blue Icon" width={24} height={24} className='w-6 h-6' />
                                Add
                            </button>
                            <button
                                onClick={() => {
                                    if (beneficiaries.length > 0) {
                                        removeBeneficiary(beneficiaries[beneficiaries.length - 1].id)
                                    }
                                }}
                                type="button"
                                className="flex cursor-pointer items-center gap-2 px-5 py-2.5 border border-[#FF383C] text-[#FF383C] rounded-lg hover:bg-[#FEF3F2] transition-colors text-base font-semibold shadow-sm"
                            >
                                <Image src={CrossRedIcon} alt="Cross Red Icon" width={24} height={24} className='w-6 h-6' />
                                Remove
                            </button>
                        </div>
                        {errors.children_global && <p className='text-red-500 text-sm mt-3 font-medium'>{errors.children_global}</p>}
                    </div>
                </div>
            )}

            {hasChildren && (
                <div className='pt-4'>
                    {/* GUARDIAN SECTION */}
                    <div className=''>
                        <div className="flex items-center gap-2 mb-4">
                            <h3 className='text-xl font-bold text-black'>Guardian(s)</h3>
                            <div className="flex items-center justify-center w-[17px] h-[17px] rounded-full border border-black text-black text-[10px] font-bold cursor-pointer">?</div>
                        </div>

                        <div className='grid grid-cols-1 gap-4'>
                            {/* Guardian's Full Name */}
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>Guardian's Full Name <span className='text-red-500'>*</span></label>
                                <div className={`flex items-center w-full bg-white text-black border ${guardianErrors.fullName ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-2 focus-within:border-black`}>
                                    <Commondropdown
                                        options={titleOptions}
                                        value={guardianForm.title}
                                        onChange={(val) => handleGuardianChange("title", val)}
                                        placeholder="Mr / Mrs / Ms / Dr"
                                        className="border-none! w-fit gap-1! text-text-4 shadow-none! whitespace-nowrap py-0! pr-0! px-1.5!"
                                        dropdownClassName="w-[120px]!"
                                    />
                                    <input
                                        type="text"
                                        className='flex-1 w-full bg-transparent text-black border-none outline-none py-2.5 pl-1 pr-2 text-sm placeholder:text-text-7'
                                        placeholder="Emi Johnson"
                                        value={guardianForm.fullName}
                                        onChange={(e) => handleGuardianChange("fullName", e.target.value)}
                                    />
                                </div>
                                {guardianErrors.fullName && <p className="text-red-500 text-xs mt-1">{guardianErrors.fullName}</p>}
                            </div>

                            {/* Relationship to you */}
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>What is their relationship to you? <span className='text-red-500'>*</span></label>
                                <Commondropdown
                                    options={guardianRelationshipOptions}
                                    value={guardianForm.relationship}
                                    onChange={(val) => handleGuardianChange("relationship", val)}
                                    placeholder="Son/Daughter/Brother/Sister/Mother/Father/Grandmother/Grandfather/Aunt/Uncle/Cousin/Niece/Nephew/Spouse/Friend/Other/Add"
                                    className="w-full py-2.5! text-text-4"
                                />
                                {guardianErrors.relationship && <p className="text-red-500 text-xs mt-1">{guardianErrors.relationship}</p>}
                            </div>

                            {/* Age / Date of Birth */}
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>Age / Date of Birth</label>
                                <DatePicker
                                    selected={guardianForm.dob}
                                    onChange={(date) => {
                                        // Simplified date logic for brevity, reusing calendarView if state is lifted or separate
                                        handleGuardianChange("dob", date)
                                    }}
                                    customInput={<CustomDateInput age={calculateAge(guardianForm.dob)} />}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="DD/MM/YYYY"
                                    wrapperClassName="w-full"
                                    maxDate={new Date()}
                                    showMonthYearPicker
                                    showYearPicker
                                />
                            </div>

                            {/* Address Details */}
                            <div>
                                <label className='block text-xl font-bold text-black mb-4'>Address</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className='block text-sm font-medium text-text-4 mb-1.5'>Building Number</label>
                                        <input
                                            type="text"
                                            className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                            placeholder="1568"
                                            value={guardianForm.buildingNumber}
                                            onChange={(e) => handleGuardianChange("buildingNumber", e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className='block text-sm font-medium text-text-4 mb-1.5'>Building Name</label>
                                        <input
                                            type="text"
                                            className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                            placeholder="Sky land"
                                            value={guardianForm.buildingName}
                                            onChange={(e) => handleGuardianChange("buildingName", e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <label className='block text-sm font-medium text-text-4 mb-1.5'>Street</label>
                                        <input
                                            type="text"
                                            className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                            placeholder="Wood Street"
                                            value={guardianForm.street}
                                            onChange={(e) => handleGuardianChange("street", e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className='block text-sm font-medium text-text-4 mb-1.5'>Town</label>
                                        <input
                                            type="text"
                                            className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                            placeholder="Leyton"
                                            value={guardianForm.town}
                                            onChange={(e) => handleGuardianChange("town", e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <label className='block text-sm font-medium text-text-4 mb-1.5'>City</label>
                                        <input
                                            type="text"
                                            className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                            placeholder="London"
                                            value={guardianForm.city}
                                            onChange={(e) => handleGuardianChange("city", e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className='block text-sm font-medium text-text-4 mb-1.5'>County/State</label>
                                        <input
                                            type="text"
                                            className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                            placeholder="London"
                                            value={guardianForm.county}
                                            onChange={(e) => handleGuardianChange("county", e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <label className='block text-sm font-medium text-text-4 mb-1.5'>Post/Zip Code</label>
                                        <input
                                            type="text"
                                            className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                            placeholder="Post/zip code"
                                            value={guardianForm.postcode}
                                            onChange={(e) => handleGuardianChange("postcode", e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className='block text-sm font-medium text-text-4 mb-1.5'>Country</label>
                                        <Commondropdown
                                            options={countryOptions}
                                            value={guardianForm.country}
                                            onChange={(val) => handleGuardianChange("country", val)}
                                            placeholder="Select Country"
                                            className="w-full py-2.5! text-text-4"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div>
                                <label className='block text-xl font-bold text-black mb-4'>Contact Information</label>
                                <div className="space-y-4">
                                    {/* Telephone */}
                                    <div>
                                        <label className='block text-sm font-medium text-text-4 mb-1.5'>Telephone (Optional)</label>
                                        <div className='flex items-center w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-2 focus-within:border-black'>
                                            <Commondropdown
                                                options={phoneCodeOptions}
                                                value={guardianForm.phoneCode}
                                                onChange={(val) => handleGuardianChange("phoneCode", val)}
                                                className="border-none! w-fit gap-1! text-text-4 shadow-none! whitespace-nowrap py-0! pr-0! px-1.5!"
                                                dropdownClassName="w-[100px]!"
                                            />
                                            <input
                                                type="text"
                                                className='flex-1 w-full bg-transparent text-black border-none outline-none py-2.5 pl-1 pr-2 text-sm placeholder:text-text-7'
                                                placeholder="7890 123456"
                                                value={guardianForm.phone}
                                                onChange={(e) => handleGuardianChange("phone", e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    {/* Email Address */}
                                    <div>
                                        <label className='block text-sm font-medium text-text-4 mb-1.5'>Email Address (Optional)</label>
                                        <input
                                            type="email"
                                            className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                            placeholder="johnsmith@email.com"
                                            value={guardianForm.email}
                                            onChange={(e) => handleGuardianChange("email", e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* List of Added Guardians */}
                        {guardians.length > 0 && (
                            <div className="space-y-3 mt-4">
                                <h3 className='text-sm font-bold text-text-1'>Added Guardian(s)</h3>
                                {guardians.map((g) => (
                                    <div key={g.id} className="bg-white p-4 rounded-lg border border-gray-200 flex justify-between items-center shadow-sm">
                                        <div className="min-w-0 pr-4">
                                            <p className="font-medium text-text-1 truncate" title={[g.title, g.fullName].filter(Boolean).join(' ')}>
                                                {[g.title, g.fullName].filter(Boolean).join(' ')} - {g.relationship}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Add/Remove Buttons for Guardians */}
                        <div className="pt-4 flex gap-4">
                            <button
                                onClick={addGuardian}
                                type="button"
                                className="flex cursor-pointer items-center gap-2 px-8.5 py-2.5 text-base font-semibold border border-[#003966] text-[#003966] rounded-lg hover:bg-[#F0F7FF] transition-colors shadow-sm"
                            >
                                <Image src={PlusBlueIcon} alt="Plus Blue Icon" width={24} height={24} className='w-6 h-6' />
                                Add
                            </button>
                            <button
                                onClick={() => {
                                    if (guardians.length > 0) {
                                        removeGuardian(guardians[guardians.length - 1].id)
                                    }
                                }}
                                type="button"
                                className="flex cursor-pointer items-center gap-2 px-5 py-2.5 border border-[#FF383C] text-[#FF383C] rounded-lg hover:bg-[#FEF3F2] transition-colors text-base font-semibold shadow-sm"
                            >
                                <Image src={CrossRedIcon} alt="Cross Red Icon" width={24} height={24} className='w-6 h-6' />
                                Remove
                            </button>
                        </div>
                        {(errors.guardian_global || guardianErrors.global) && <p className='text-red-500 text-sm mt-3 font-medium'>{errors.guardian_global || guardianErrors.global}</p>}
                        {/* Backup Guardian Toggle */}
                        <div className="mt-4">
                            <label className='block text-sm font-medium text-text-4 mb-3'>
                                Do you want to add a backup guardian?
                            </label>
                            <div className="flex items-center gap-6">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="hasBackupGuardian"
                                        checked={hasBackupGuardian === true}
                                        onChange={() => setHasBackupGuardian(true)}
                                        className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                                    />
                                    <span className="text-sm font-medium text-text-1">Yes</span>

                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="hasBackupGuardian"
                                        checked={hasBackupGuardian === false}
                                        onChange={() => setHasBackupGuardian(false)}
                                        className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                                    />
                                    <span className="text-sm font-medium text-text-1">No</span>
                                </label>
                            </div>
                        </div>


                        {/* Alternate Guardian Section */}
                        <div className="mt-4">
                            <div className="flex items-center gap-2 mb-4">
                                <h4 className="text-xl font-bold text-black">Alternate Guardian</h4>
                                <div className="flex items-center justify-center w-[17px] h-[17px] rounded-full border border-black text-black text-[10px] font-bold cursor-pointer">?</div>
                            </div>

                            <div className="space-y-2 mb-4">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={isAlternateGuardian}
                                        onChange={(e) => setIsAlternateGuardian(e.target.checked)}
                                        className="appearance-none w-5 h-5 border border-[#D5D7DA] rounded-sm bg-white checked:bg-[#003966] checked:border-[#003966] focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden checked:after:block after:w-[6px] after:h-[10px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:mb-[2px]"
                                    />
                                    <span className="text-base text-text-5">Backup Guardian</span>
                                </label>

                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={isTrustee}
                                        onChange={(e) => setIsTrustee(e.target.checked)}
                                        className="appearance-none w-5 h-5 border border-[#D5D7DA] rounded-sm bg-white checked:bg-[#003966] checked:border-[#003966] focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden checked:after:block after:w-[6px] after:h-[10px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:mb-[2px]"
                                    />
                                    <span className="text-base text-text-5">Trustee(s)</span>
                                    <div className="flex items-center justify-center w-[15px] h-[15px] rounded-full border border-black text-black text-[9px] font-bold cursor-pointer">?</div>
                                </label>
                            </div>
                        </div>

                        {isAlternateGuardian && (
                            <div className="space-y-4">
                                <h4 className='text-lg font-bold text-text-1'>Backup Guardian Details</h4>

                                {/* Guardian's Full Name */}
                                <div>
                                    <label className='block text-sm font-medium text-text-4 mb-1.5'>Guardian's Full Name <span className='text-red-500'>*</span></label>
                                    <div className={`flex items-center w-full bg-white text-black border ${backupGuardianErrors.fullName ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-2 focus-within:border-black`}>
                                        <Commondropdown
                                            options={titleOptions}
                                            value={backupGuardianForm.title}
                                            onChange={(val) => handleBackupGuardianChange("title", val)}
                                            placeholder="Mr / Mrs / Ms / Dr"
                                            className="border-none! w-fit gap-1! text-text-4 shadow-none! whitespace-nowrap py-0! pr-0! px-1.5!"
                                            dropdownClassName="w-[120px]!"
                                        />
                                        <input
                                            type="text"
                                            className='flex-1 w-full bg-transparent text-black border-none outline-none py-2.5 pl-1 pr-2 text-sm placeholder:text-text-7'
                                            placeholder="Emi Johnson"
                                            value={backupGuardianForm.fullName}
                                            onChange={(e) => handleBackupGuardianChange("fullName", e.target.value)}
                                        />
                                    </div>
                                    {backupGuardianErrors.fullName && <p className="text-red-500 text-xs mt-1">{backupGuardianErrors.fullName}</p>}
                                </div>

                                {/* Relationship to you */}
                                <div>
                                    <label className='block text-sm font-medium text-text-4 mb-1.5'>What is their relationship to you? <span className='text-red-500'>*</span></label>
                                    <Commondropdown
                                        options={guardianRelationshipOptions}
                                        value={backupGuardianForm.relationship}
                                        onChange={(val) => handleBackupGuardianChange("relationship", val)}
                                        placeholder="Son/Daughter/Brother/Sister/Mother/Father/Grandmother/Grandfather/Aunt/Uncle/Cousin/Niece/Nephew/Spouse/Friend/Other/Add"
                                        className="w-full py-2.5! text-text-4"
                                    />
                                    {backupGuardianErrors.relationship && <p className="text-red-500 text-xs mt-1">{backupGuardianErrors.relationship}</p>}
                                </div>

                                {/* Age / Date of Birth */}
                                <div>
                                    <label className='block text-sm font-medium text-text-4 mb-1.5'>Age / Date of Birth</label>
                                    <DatePicker
                                        selected={backupGuardianForm.dob}
                                        onChange={(date) => {
                                            handleBackupGuardianChange("dob", date)
                                        }}
                                        customInput={<CustomDateInput age={calculateAge(backupGuardianForm.dob)} />}
                                        dateFormat="dd/MM/yyyy"
                                        placeholderText="DD/MM/YYYY"
                                        wrapperClassName="w-full"
                                        maxDate={new Date()}
                                        showMonthYearPicker
                                        showYearPicker
                                    />
                                </div>

                                {/* Address Details */}
                                <div>
                                    <label className='block text-lg font-bold text-black mb-4'>Address</label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Building Number</label>
                                            <input
                                                type="text"
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                                placeholder="1568"
                                                value={backupGuardianForm.buildingNumber}
                                                onChange={(e) => handleBackupGuardianChange("buildingNumber", e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Building Name</label>
                                            <input
                                                type="text"
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                                placeholder="Sky land"
                                                value={backupGuardianForm.buildingName}
                                                onChange={(e) => handleBackupGuardianChange("buildingName", e.target.value)}
                                            />
                                        </div>

                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Street</label>
                                            <input
                                                type="text"
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                                placeholder="Wood Street"
                                                value={backupGuardianForm.street}
                                                onChange={(e) => handleBackupGuardianChange("street", e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Town</label>
                                            <input
                                                type="text"
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                                placeholder="Leyton"
                                                value={backupGuardianForm.town}
                                                onChange={(e) => handleBackupGuardianChange("town", e.target.value)}
                                            />
                                        </div>
                                        {/* Simplified other address fields for brevity but could add them all */}
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Post/Zip Code</label>
                                            <input
                                                type="text"
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                                placeholder="Post/zip code"
                                                value={backupGuardianForm.postcode}
                                                onChange={(e) => handleBackupGuardianChange("postcode", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* List of Added Backup Guardians */}
                                {backupGuardians.length > 0 && (
                                    <div className="space-y-3 mt-4">
                                        <h3 className='text-sm font-bold text-text-1'>Added Backup Guardian(s)</h3>
                                        {backupGuardians.map((g) => (
                                            <div key={g.id} className="bg-white p-4 rounded-lg border border-gray-200 flex justify-between items-center shadow-sm">
                                                <div className="min-w-0 pr-4">
                                                    <p className="font-medium text-text-1 truncate" title={[g.title, g.fullName].filter(Boolean).join(' ')}>
                                                        {[g.title, g.fullName].filter(Boolean).join(' ')} - {g.relationship}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Add/Remove Buttons for Backup Guardians */}
                                <div className="pt-4 flex gap-4">
                                    <button
                                        onClick={addBackupGuardian}
                                        type="button"
                                        className="flex cursor-pointer items-center gap-2 px-8.5 py-2.5 text-base font-semibold border border-[#003966] text-[#003966] rounded-lg hover:bg-[#F0F7FF] transition-colors shadow-sm"
                                    >
                                        <Image src={PlusBlueIcon} alt="Plus Blue Icon" width={24} height={24} className='w-6 h-6' />
                                        Add
                                    </button>
                                    <button
                                        onClick={() => {
                                            if (backupGuardians.length > 0) {
                                                removeBackupGuardian(backupGuardians[backupGuardians.length - 1].id)
                                            }
                                        }}
                                        type="button"
                                        className="flex cursor-pointer items-center gap-2 px-5 py-2.5 border border-[#FF383C] text-[#FF383C] rounded-lg hover:bg-[#FEF3F2] transition-colors text-base font-semibold shadow-sm"
                                    >
                                        <Image src={CrossRedIcon} alt="Cross Red Icon" width={24} height={24} className='w-6 h-6' />
                                        Remove
                                    </button>
                                </div>
                            </div>
                        )}

                        {isTrustee && (
                            <div className="space-y-4">
                                <h4 className='text-xl font-bold text-black'>Trustee(s) Details</h4>

                                {/* Trustee Form Fields */}
                                <div>
                                    <label className='block text-sm font-medium text-text-4 mb-1.5'>Trustee(s) Full Name</label>
                                    <div className={`flex items-center w-full bg-white text-black border ${trusteeErrors.fullName ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-2 focus-within:border-black`}>
                                        <Commondropdown
                                            options={titleOptions}
                                            value={trusteeForm.title}
                                            onChange={(val) => handleTrusteeChange("title", val)}
                                            placeholder="Mr / Mrs / Ms / Dr"
                                            className="border-none! w-fit gap-1! text-text-4 shadow-none! whitespace-nowrap py-0! pr-0! px-1.5!"
                                            dropdownClassName="w-[120px]!"
                                        />
                                        <input
                                            type="text"
                                            className='flex-1 w-full bg-transparent text-black border-none outline-none py-2.5 pl-1 pr-2 text-sm placeholder:text-text-7'
                                            placeholder="Emi Johnson"
                                            value={trusteeForm.fullName}
                                            onChange={(e) => handleTrusteeChange("fullName", e.target.value)}
                                        />
                                    </div>
                                    {trusteeErrors.fullName && <p className="text-red-500 text-xs mt-1">{trusteeErrors.fullName}</p>}
                                </div>

                                {/* Relationship */}
                                <div>
                                    <label className='text-sm font-medium text-text-4 mb-1.5 flex items-center gap-1'>What is their relationship to you?
                                        <div className="flex items-center justify-center w-[15px] h-[15px] rounded-full border border-black text-black text-[9px] font-bold cursor-pointer">?</div>
                                    </label>
                                    <Commondropdown
                                        options={guardianRelationshipOptions}
                                        value={trusteeForm.relationship}
                                        onChange={(val) => handleTrusteeChange("relationship", val)}
                                        placeholder="Son/Daughter/Brother/Sister/Mother/Father/Grandmother/Grandfather/Aunt/Uncle/Cousin/Niece/Nephew/Spouse/Friend/Other/Add"
                                        className="w-full py-2.5! text-text-4"
                                    />
                                    {trusteeErrors.relationship && <p className="text-red-500 text-xs mt-1">{trusteeErrors.relationship}</p>}
                                </div>


                                {/* Address Section */}
                                <div>
                                    <label className='block text-xl font-bold text-black mb-4'>Address</label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Building Number</label>
                                            <input
                                                type="text"
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                                placeholder="1568"
                                                value={trusteeForm.buildingNumber}
                                                onChange={(e) => handleTrusteeChange("buildingNumber", e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Building Name</label>
                                            <input
                                                type="text"
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                                placeholder="Sky land"
                                                value={trusteeForm.buildingName}
                                                onChange={(e) => handleTrusteeChange("buildingName", e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Street</label>
                                            <input
                                                type="text"
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                                placeholder="Wood Street"
                                                value={trusteeForm.street}
                                                onChange={(e) => handleTrusteeChange("street", e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Town</label>
                                            <input
                                                type="text"
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                                placeholder="Leyton"
                                                value={trusteeForm.town}
                                                onChange={(e) => handleTrusteeChange("town", e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>City</label>
                                            <input
                                                type="text"
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                                placeholder="London"
                                                value={trusteeForm.city}
                                                onChange={(e) => handleTrusteeChange("city", e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>County/State</label>
                                            <input
                                                type="text"
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                                placeholder="London"
                                                value={trusteeForm.county}
                                                onChange={(e) => handleTrusteeChange("county", e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Post/Zip Code</label>
                                            <input
                                                type="text"
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                                placeholder="Post/zip code"
                                                value={trusteeForm.postcode}
                                                onChange={(e) => handleTrusteeChange("postcode", e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Country</label>
                                            <Commondropdown
                                                options={[trusteeForm.country]}
                                                value={trusteeForm.country}
                                                onChange={() => { }}
                                                className="w-full py-2.5! text-text-4"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Information */}
                                <div>
                                    <label className='block text-xl font-bold text-black mb-4'>Contact Information</label>
                                    <div className="space-y-4">
                                        {/* Telephone */}
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Telephone (Optional)</label>
                                            <div className='flex items-center w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-2 focus-within:border-black'>
                                                <Commondropdown
                                                    options={phoneCodeOptions}
                                                    value={trusteeForm.phoneCode}
                                                    onChange={(val) => handleTrusteeChange("phoneCode", val)}
                                                    className="border-none! w-fit gap-1! text-text-4 shadow-none! whitespace-nowrap py-0! pr-0! px-1.5!"
                                                    dropdownClassName="w-[100px]!"
                                                />
                                                <input
                                                    type="text"
                                                    className='flex-1 w-full bg-transparent text-black border-none outline-none py-2.5 pl-1 pr-2 text-sm placeholder:text-text-7'
                                                    placeholder="7890 123456"
                                                    value={trusteeForm.phone}
                                                    onChange={(e) => handleTrusteeChange("phone", e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Email Address (Optional)</label>
                                            <input
                                                type="email"
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                                placeholder="johnsmith@email.com"
                                                value={trusteeForm.email}
                                                onChange={(e) => handleTrusteeChange("email", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* General Powers of Trustees */}
                                <div>
                                    <h4 className='text-xl font-bold text-black mb-4'>General Powers of Trustees</h4>
                                    <p className="text-base font-bold text-text-5 mb-3">Please confirm the powers you wish to include in your Will:</p>

                                    <div className="space-y-4">
                                        <label className="flex items-start gap-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={trusteePowers.allPowers}
                                                onChange={() => handleTrusteePowerChange('allPowers')}
                                                className="mt-1 appearance-none min-w-[20px] w-5 h-5 border border-[#D5D7DA] rounded-sm bg-white checked:bg-[#003966] checked:border-[#003966] focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden checked:after:block after:w-[6px] after:h-[10px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:mb-[2px]"
                                            />
                                            <span className="text-base font-medium text-text-5 mt-0.5">Include all general powers of trustees</span>
                                        </label>

                                        <div className="space-y-1">
                                            <label className="flex items-start gap-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={trusteePowers.management}
                                                    onChange={() => handleTrusteePowerChange('management')}
                                                    className="mt-1 appearance-none min-w-[20px] w-5 h-5 border border-[#D5D7DA] rounded-sm bg-white checked:bg-[#003966] checked:border-[#003966] focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden checked:after:block after:w-[6px] after:h-[10px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:mb-[2px]"
                                                />
                                                <span className="text-base font-bold text-text-5 mt-0.75">General Power of Management</span>
                                            </label>
                                            <p className="text-base text-text-5 ml-8">Trustees may buy, sell, lease, mortgage, or manage any part of the estate as if they were absolute owners.</p>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="flex items-start gap-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={trusteePowers.investment}
                                                    onChange={() => handleTrusteePowerChange('investment')}
                                                    className="mt-1 appearance-none min-w-[20px] w-5 h-5 border border-[#D5D7DA] rounded-sm bg-white checked:bg-[#003966] checked:border-[#003966] focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden checked:after:block after:w-[6px] after:h-[10px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:mb-[2px]"
                                                />
                                                <span className="text-base font-bold text-text-5 mt-0.75">Power of Investment</span>
                                            </label>
                                            <p className="text-base text-text-5 ml-8">Trustees may invest in any property or asset type, including businesses or unproductive land.</p>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="flex items-start gap-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={trusteePowers.delegate}
                                                    onChange={() => handleTrusteePowerChange('delegate')}
                                                    className="mt-1 appearance-none min-w-[20px] w-5 h-5 border border-[#D5D7DA] rounded-sm bg-white checked:bg-[#003966] checked:border-[#003966] focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden checked:after:block after:w-[6px] after:h-[10px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:mb-[2px]"
                                                />
                                                <span className="text-base font-bold text-text-5 mt-0.75">Power to Delegate</span>
                                            </label>
                                            <p className="text-base text-text-5 ml-8">Trustees may appoint agents or professionals (e.g., solicitors, accountants) to assist with trust administration.</p>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="flex items-start gap-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={trusteePowers.property}
                                                    onChange={() => handleTrusteePowerChange('property')}
                                                    className="mt-1 appearance-none min-w-[20px] w-5 h-5 border border-[#D5D7DA] rounded-sm bg-white checked:bg-[#003966] checked:border-[#003966] focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden checked:after:block after:w-[6px] after:h-[10px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:mb-[2px]"
                                                />
                                                <span className="text-base font-bold text-text-5 mt-0.75">Power in Relation to Property</span>
                                            </label>
                                            <p className="text-base text-text-5 ml-8">Trustees may retain, insure, or manage any property, including improvements or leasing.</p>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="flex items-start gap-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={trusteePowers.lendBorrow}
                                                    onChange={() => handleTrusteePowerChange('lendBorrow')}
                                                    className="mt-1 appearance-none min-w-[20px] w-5 h-5 border border-[#D5D7DA] rounded-sm bg-white checked:bg-[#003966] checked:border-[#003966] focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden checked:after:block after:w-[6px] after:h-[10px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:mb-[2px]"
                                                />
                                                <span className="text-base font-bold text-text-5 mt-0.75">Power to Lend and Borrow</span>
                                            </label>
                                            <p className="text-base text-text-5 ml-8">Trustees may lend to beneficiaries or borrow funds, using estate assets as security.</p>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="flex items-start gap-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={trusteePowers.minors}
                                                    onChange={() => handleTrusteePowerChange('minors')}
                                                    className="mt-1 appearance-none min-w-[20px] w-5 h-5 border border-[#D5D7DA] rounded-sm bg-white checked:bg-[#003966] checked:border-[#003966] focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden checked:after:block after:w-[6px] after:h-[10px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:mb-[2px]"
                                                />
                                                <span className="text-base font-bold text-text-5 mt-0.75">Power to Apply Income for Minors</span>
                                            </label>
                                            <p className="text-base text-text-5 ml-8">Income may be used for children's maintenance, education, or welfare.</p>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="flex items-start gap-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={trusteePowers.advancements}
                                                    onChange={() => handleTrusteePowerChange('advancements')}
                                                    className="mt-1 appearance-none min-w-[20px] w-5 h-5 border border-[#D5D7DA] rounded-sm bg-white checked:bg-[#003966] checked:border-[#003966] focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden checked:after:block after:w-[6px] after:h-[10px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:mb-[2px]"
                                                />
                                                <span className="text-base font-bold text-text-5 mt-0.75">Power to Make Advancements (Capital)</span>
                                            </label>
                                            <p className="text-base text-text-5 ml-8">Trustees may advance capital for a beneficiary's benefit before full entitlement.</p>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="flex items-start gap-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={trusteePowers.appropriateAssets}
                                                    onChange={() => handleTrusteePowerChange('appropriateAssets')}
                                                    className="mt-1 appearance-none min-w-[20px] w-5 h-5 border border-[#D5D7DA] rounded-sm bg-white checked:bg-[#003966] checked:border-[#003966] focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden checked:after:block after:w-[6px] after:h-[10px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:mb-[2px]"
                                                />
                                                <span className="text-base font-bold text-text-5 mt-0.75">Power to Appropriate Assets</span>
                                            </label>
                                            <p className="text-base text-text-5 ml-8">Trustees may assign assets to satisfy legacies without requiring beneficiary consent.</p>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="flex items-start gap-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={trusteePowers.majority}
                                                    onChange={() => handleTrusteePowerChange('majority')}
                                                    className="mt-1 appearance-none min-w-[20px] w-5 h-5 border border-[#D5D7DA] rounded-sm bg-white checked:bg-[#003966] checked:border-[#003966] focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden checked:after:block after:w-[6px] after:h-[10px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:mb-[2px]"
                                                />
                                                <span className="text-base font-bold text-text-5 mt-0.75">Power to Act by Majority</span>
                                            </label>
                                            <p className="text-base text-text-5 ml-8">Trustee decisions are valid by majority vote (both must agree if only two).</p>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="flex items-start gap-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={trusteePowers.charge}
                                                    onChange={() => handleTrusteePowerChange('charge')}
                                                    className="mt-1 appearance-none min-w-[20px] w-5 h-5 border border-[#D5D7DA] rounded-sm bg-white checked:bg-[#003966] checked:border-[#003966] focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden checked:after:block after:w-[6px] after:h-[10px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:mb-[2px]"
                                                />
                                                <span className="text-base font-bold text-text-5 mt-0.75">Power to Charge</span>
                                            </label>
                                            <p className="text-base text-text-5 ml-8">Professional Trustees (e.g., solicitors) may charge reasonable fees for their work.</p>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="flex items-start gap-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={trusteePowers.nonInterestAccounts}
                                                    onChange={() => handleTrusteePowerChange('nonInterestAccounts')}
                                                    className="mt-1 appearance-none min-w-[20px] w-5 h-5 border border-[#D5D7DA] rounded-sm bg-white checked:bg-[#003966] checked:border-[#003966] focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden checked:after:block after:w-[6px] after:h-[10px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:mb-[2px]"
                                                />
                                                <span className="text-base font-bold text-text-5 mt-0.75">Power to Invest in Non-Interest Bearing Accounts</span>
                                            </label>
                                            <p className="text-base text-text-5 ml-8">Trustees may hold funds in non-interest-bearing accounts for administrative purposes.</p>
                                        </div>
                                    </div>

                                    {/* Additional Powers */}
                                    <div className="mt-4">
                                        <h5 className="text-sm fontmedium text-text-4 mb-3">Additional Powers</h5>
                                        <textarea
                                            value={trusteePowers.additionalPowers}
                                            onChange={(e) => setTrusteePowers({ ...trusteePowers, additionalPowers: e.target.value })}
                                            placeholder="Additional power (If applicable)..."
                                            className="w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7 min-h-[100px] resize-vertical"
                                        />
                                    </div>
                                </div>

                            </div>
                        )}



                    </div>
                </div>
            )}



            {/* Beneficiary Details Section - Standalone */}
            <div className="">
                <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-xl font-bold text-black">Beneficiary Details</h3>
                    <div className="flex items-center justify-center w-[17px] h-[17px] rounded-full border border-black text-black text-[10px] font-bold cursor-pointer">?</div>
                </div>

                <div className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <label className='block text-sm font-medium text-text-4 mb-1.5'>Full Name</label>
                        <div className="flex items-center w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-2 focus-within:border-black">
                            <Commondropdown
                                options={titleOptions}
                                value={beneficiaryDetailsForm.title}
                                onChange={(val) => handleBeneficiaryDetailsFormChange('title', val)}
                                placeholder="Mr / Mrs / Ms / Dr"
                                className="border-none! w-fit gap-1! text-text-4 shadow-none! whitespace-nowrap py-0! pr-0! px-1.5!"
                                dropdownClassName="w-[150px]!"
                            />
                            <input
                                name="fullName"
                                type="text"
                                value={beneficiaryDetailsForm.fullName}
                                onChange={(e) => handleBeneficiaryDetailsFormChange('fullName', e.target.value)}
                                className='flex-1 w-full bg-transparent text-black border-none outline-none py-2.5 pl-1 pr-2 text-sm placeholder:text-text-7'
                                placeholder="Emil Johnson"
                            />
                        </div>
                    </div>

                    {/* Gender */}
                    <div>
                        <label className='block text-sm font-medium text-text-4 mb-1.5'>Gender</label>
                        <Commondropdown
                            options={genderOptions}
                            value={beneficiaryDetailsForm.gender}
                            onChange={(val) => handleBeneficiaryDetailsFormChange('gender', val)}
                            placeholder="Male/Female/Trans/Other / Add"
                            className="w-full py-2.5! text-text-4"
                        />
                    </div>

                    {/* Age / Date of Birth */}
                    <div>
                        <label className='block text-sm font-medium text-text-4 mb-1.5'>Age / Date of Birth</label>
                        <div className="relative">
                            <input
                                name="dob"
                                type="text"
                                value={beneficiaryDetailsForm.dob || ""}
                                onChange={(e) => handleBeneficiaryDetailsFormChange('dob', e.target.value)}
                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                placeholder="01/09/2025"
                            />
                            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-sm text-text-4">29 Year</span>
                        </div>
                    </div>

                    {/* Relationship */}
                    <div>
                        <label className='block text-sm font-medium text-text-4 mb-1.5'>What is their relationship to you?</label>
                        <Commondropdown
                            options={relationshipOptions}
                            value={beneficiaryDetailsForm.relationship}
                            onChange={(val) => handleBeneficiaryDetailsFormChange('relationship', val)}
                            placeholder="Son/Daughter/Step-son/Step-daughter/Brother/Sister/Step-brother/Step-sister/Mother/Father/Grandmother/Grandfather/Aunt/Uncle/Cousin/Niece/Nephew/Spouse/Partner/Friend/Other/Add"
                            className="w-full py-2.5! text-text-4"
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label className='block text-xl font-bold text-black mb-4'>Address</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>Building Number</label>
                                <input
                                    name="buildingNumber"
                                    type="text"
                                    value={beneficiaryDetailsForm.buildingNumber}
                                    onChange={(e) => handleBeneficiaryDetailsFormChange('buildingNumber', e.target.value)}
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="1568"
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>Building Name</label>
                                <input
                                    name="buildingName"
                                    type="text"
                                    value={beneficiaryDetailsForm.buildingName}
                                    onChange={(e) => handleBeneficiaryDetailsFormChange('buildingName', e.target.value)}
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="Building name"
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>Street</label>
                                <input
                                    name="street"
                                    type="text"
                                    value={beneficiaryDetailsForm.street}
                                    onChange={(e) => handleBeneficiaryDetailsFormChange('street', e.target.value)}
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="Wood Street"
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>Town</label>
                                <input
                                    name="town"
                                    type="text"
                                    value={beneficiaryDetailsForm.town}
                                    onChange={(e) => handleBeneficiaryDetailsFormChange('town', e.target.value)}
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="Leyton"
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>City</label>
                                <input
                                    name="city"
                                    type="text"
                                    value={beneficiaryDetailsForm.city}
                                    onChange={(e) => handleBeneficiaryDetailsFormChange('city', e.target.value)}
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="London"
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>County/State</label>
                                <input
                                    name="county"
                                    type="text"
                                    value={beneficiaryDetailsForm.county}
                                    onChange={(e) => handleBeneficiaryDetailsFormChange('county', e.target.value)}
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="London"
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>Post/Zip Code</label>
                                <input
                                    name="postcode"
                                    type="text"
                                    value={beneficiaryDetailsForm.postcode}
                                    onChange={(e) => handleBeneficiaryDetailsFormChange('postcode', e.target.value)}
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="Post/zip code"
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>Country</label>
                                <Commondropdown
                                    options={countryOptions}
                                    value={beneficiaryDetailsForm.country}
                                    onChange={(val) => handleBeneficiaryDetailsFormChange('country', val)}
                                    placeholder="United Kingdom"
                                    className="w-full py-2.5! text-text-4"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <label className='block text-xl font-bold text-black mb-4'>Contact Information</label>
                        <div className="space-y-4">
                            {/* Telephone */}
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>Telephone (Optional)</label>
                                <div className="flex items-center w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-2 focus-within:border-black">
                                    <Commondropdown
                                        options={phoneCodeOptions}
                                        value={phoneCodeOptions[0]}
                                        onChange={() => { }}
                                        placeholder="+44"
                                        className="border-none! w-fit gap-1! text-text-4 shadow-none! whitespace-nowrap py-0! pr-0! px-1.5!"
                                        dropdownClassName="w-[120px]!"
                                    />
                                    <input
                                        name="telephone"
                                        type="text"
                                        value={beneficiaryDetailsForm.telephone}
                                        onChange={(e) => handleBeneficiaryDetailsFormChange('telephone', e.target.value)}
                                        className='flex-1 w-full bg-transparent text-black border-none outline-none py-2.5 pl-1 pr-2 text-sm placeholder:text-text-7'
                                        placeholder="7890 123456"
                                    />
                                </div>
                            </div>

                            {/* Email Address */}
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>Email Address (Optional)</label>
                                <input
                                    name="email"
                                    type="email"
                                    value={beneficiaryDetailsForm.email}
                                    onChange={(e) => handleBeneficiaryDetailsFormChange('email', e.target.value)}
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="johnsmith@gmail.com"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Add/Remove Buttons */}
                    <div className="flex gap-4">
                        <button
                            onClick={addBeneficiaryDetail}
                            type="button"
                            className="flex cursor-pointer text-base font-semibold items-center gap-2 px-8.5 py-2.5 border border-[#003966] text-[#003966] rounded-lg hover:bg-[#F0F7FF] transition-colors shadow-sm"
                        >
                            <Image src={PlusBlueIcon} alt="Plus Blue Icon" width={24} height={24} className='w-6 h-6' />
                            Add
                        </button>
                        <button
                            onClick={() => {
                                if (beneficiaryDetailsList.length > 0) {
                                    removeBeneficiaryDetail(beneficiaryDetailsList[beneficiaryDetailsList.length - 1].id)
                                }
                            }}
                            type="button"
                            className="flex cursor-pointer items-center gap-2 px-5 py-2.5 border border-[#FF383C] text-[#FF383C] rounded-lg hover:bg-[#FEF3F2] transition-colors text-base font-semibold shadow-sm"
                        >
                            <Image src={CrossRedIcon} alt="Cross Red Icon" width={24} height={24} className='w-6 h-6' />
                            Remove
                        </button>
                    </div>
                    {errors.other_ben_global && <p className='text-red-500 text-sm mt-3 font-medium'>{errors.other_ben_global}</p>}

                    {/* List of Added Beneficiary Details */}
                    {beneficiaryDetailsList.length > 0 && (
                        <div className="space-y-3 mt-6">
                            <h4 className="text-base font-semibold text-text-1">Added Beneficiaries:</h4>
                            {beneficiaryDetailsList.map((entry) => (
                                <div key={entry.id} className="bg-white border border-[#D5D7DA] rounded-lg p-4">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1 grid grid-cols-2 gap-2 text-sm">
                                            <div><span className="font-medium text-text-4">Name:</span> <span className="text-text-1">{entry.title} {entry.fullName || 'Not provided'}</span></div>
                                            <div><span className="font-medium text-text-4">Gender:</span> <span className="text-text-1">{entry.gender || 'Not provided'}</span></div>
                                            <div><span className="font-medium text-text-4">Relationship:</span> <span className="text-text-1">{entry.relationship || 'Not provided'}</span></div>
                                            <div><span className="font-medium text-text-4">Email:</span> <span className="text-text-1">{entry.email || 'Not provided'}</span></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Charity Section */}
            <div className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-xl font-bold text-black">Charity</h3>
                    <div className="flex items-center justify-center w-[17px] h-[17px] rounded-full border border-black text-black text-[10px] font-bold cursor-pointer">?</div>
                </div>

                <div className="space-y-4">
                    {/* Charitable Gifts Question */}
                    <div>
                        <label className='block text-sm font-medium text-text-4 mb-3'>Would you like to make any charitable gifts in your Will?</label>
                        <div className="flex items-center gap-6">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="charitableGifts"
                                    value="yes"
                                    checked={hasCharitableGifts === true}
                                    onChange={() => setHasCharitableGifts(true)}
                                    className="w-5 h-5 accent-[#003966]"
                                />
                                <span className="text-sm text-text-4">Yes</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="charitableGifts"
                                    value="no"
                                    checked={hasCharitableGifts === false}
                                    onChange={() => setHasCharitableGifts(false)}
                                    className="w-5 h-5 accent-[#003966]"
                                />
                                <span className="text-sm text-text-4">No</span>
                            </label>
                        </div>
                    </div>

                    {/* Show charity fields only when Yes is selected */}
                    {hasCharitableGifts === true && (
                        <>
                            {/* Charity Name */}
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>Charity Name</label>
                                <input
                                    name="charityName"
                                    type="text"
                                    value={charityForm.charityName}
                                    onChange={(e) => handleCharityFormChange('charityName', e.target.value)}
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="British Heart Foundation"
                                />
                            </div>

                            {/* Registered Charity Number */}
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>Registered Charity Number</label>
                                <input
                                    name="registeredNumber"
                                    type="text"
                                    value={charityForm.registeredNumber}
                                    onChange={(e) => handleCharityFormChange('registeredNumber', e.target.value)}
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="225158"
                                />
                            </div>

                            {/* Address */}
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>Address</label>
                                <input
                                    name="address"
                                    type="text"
                                    value={charityForm.address}
                                    onChange={(e) => handleCharityFormChange('address', e.target.value)}
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="2300 The Crescent, Birmingham Business Park, Birmingham B37 7YE"
                                />
                            </div>

                            {/* Gift */}
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>Gift</label>
                                <input
                                    name="gift"
                                    type="text"
                                    value={charityForm.gift}
                                    onChange={(e) => handleCharityFormChange('gift', e.target.value)}
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="£2,000 or 5% of estate"
                                />
                            </div>

                            {/* Purpose */}
                            <div>
                                <label className='block text-sm font-medium text-text-4 mb-1.5'>Purpose</label>
                                <textarea
                                    name="purpose"
                                    value={charityForm.purpose}
                                    onChange={(e) => handleCharityFormChange('purpose', e.target.value)}
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7 min-h-[100px] resize-vertical'
                                    placeholder="For heart disease research etc."
                                />
                            </div>

                            <div className="pt-4 flex gap-4">
                                <button
                                    onClick={addCharity}
                                    type="button"
                                    className="flex cursor-pointer text-base font-semibold items-center gap-2 px-8.5 py-2.5 border border-[#003966] text-[#003966] rounded-lg hover:bg-[#F0F7FF] transition-colors shadow-sm"
                                >
                                    <Image src={PlusBlueIcon} alt="Plus Blue Icon" width={24} height={24} className='w-6 h-6' />
                                    Add
                                </button>
                                <button
                                    onClick={() => {
                                        if (charityList.length > 0) {
                                            removeCharity(charityList[charityList.length - 1].id)
                                        }
                                    }}
                                    type="button"
                                    className="flex cursor-pointer items-center gap-2 px-5 py-2.5 border border-[#FF383C] text-[#FF383C] rounded-lg hover:bg-[#FEF3F2] transition-colors text-base font-semibold shadow-sm"
                                >
                                    <Image src={CrossRedIcon} alt="Cross Red Icon" width={24} height={24} className='w-6 h-6' />
                                    Remove
                                </button>
                            </div>
                            {errors.charity_global && <p className='text-red-500 text-sm mt-3 font-medium'>{errors.charity_global}</p>}
                            {/* List of Added Charities */}
                            {charityList.length > 0 && (
                                <div className="space-y-3 mt-6">
                                    <h4 className="text-base font-semibold text-text-1">Added Charities:</h4>
                                    {charityList.map((charity) => (
                                        <div key={charity.id} className="bg-white border border-[#D5D7DA] rounded-lg p-4">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1 grid grid-cols-2 gap-2 text-sm">
                                                    <div><span className="font-medium text-text-4">Charity Name:</span> <span className="text-text-1">{charity.charityName || 'Not provided'}</span></div>
                                                    <div><span className="font-medium text-text-4">Registered Number:</span> <span className="text-text-1">{charity.registeredNumber || 'Not provided'}</span></div>
                                                    <div><span className="font-medium text-text-4">Gift:</span> <span className="text-text-1">{charity.gift || 'Not provided'}</span></div>
                                                    <div><span className="font-medium text-text-4">Address:</span> <span className="text-text-1">{charity.address || 'Not provided'}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>


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

            {/* Information Tip */}
            <div className="mt-4">
                <h4 className="text-base font-semibold text-text-5 mb-2">Information Tip:</h4>
                <p className="text-base text-text-5 -mt-1">
                    A guardian will take parental responsibility for your children if both parents pass away. Always discuss guardianship with the person before naming them.
                </p>
            </div>
        </div>
    )
}

export default Beneficiaries;