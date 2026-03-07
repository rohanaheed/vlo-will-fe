"use client"
import React, { useState, forwardRef, useEffect } from 'react'
import Refresh from '@/components/assets/images/RefreshIcon.svg'
import Image from 'next/image'
import Commondropdown from '@/components/common/Commondropdown1.jsx'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import PlusBlueIcon from '@/components/assets/images/PlusBlueIcon.svg'
import UKFlag from '@/components/assets/images/UkFlag.svg'
import CrossRedIcon from '@/components/assets/images/CrossRedIcon.svg'

function Assets({ onSave, onSkip, onBack, onDataChange, initialData }) {
    const [hasProperty, setHasProperty] = useState(initialData?.hasProperty === false ? 'no' : 'yes')
    const [properties, setProperties] = useState(initialData?.assetsList || []) // List of added properties
    const [currentProperty, setCurrentProperty] = useState({
        buildingNumber: "",
        buildingName: "",
        street: "",
        town: "",
        city: "",
        county: "",
        postcode: "",
        country: { label: "United Kingdom", value: "UK", icon: UKFlag },
        ownershipType: "",
        estimatedValue: "",
        accountLocation: "",
        hasMortgage: 'yes',
        mortgageLender: "",
        note: ""
    })

    // Bank Accounts State
    const [hasBankAccount, setHasBankAccount] = useState(initialData?.hasBankAccount === false ? 'no' : 'yes')
    const [bankAccounts, setBankAccounts] = useState(initialData?.bankAccounts || [])
    const [currentBankAccount, setCurrentBankAccount] = useState({
        bankName: "",
        accountType: "",
        accountNumber: "",
        accountLocation: "",
        additionalInfo: ""
    })

    // Investments State
    const [hasInvestment, setHasInvestment] = useState(initialData?.hasInvestment === false ? 'no' : 'yes')
    const [investments, setInvestments] = useState(initialData?.investments || [])
    const [currentInvestment, setCurrentInvestment] = useState({
        companyName: "",
        investmentType: "",
        accountPolicyNumber: "",
        managedBy: "",
        additionalInfo: ""
    })

    // Valuable Items State
    const [hasValuableItem, setHasValuableItem] = useState(initialData?.hasValuableItem === false ? 'no' : 'yes')
    const [valuableItems, setValuableItems] = useState(initialData?.valuableItems || [])
    const [currentValuableItem, setCurrentValuableItem] = useState({
        category: "",
        itemDescription: "",
        location: "",
        additionalInfo: ""
    })

    // Digital Assets State
    const [hasDigitalAsset, setHasDigitalAsset] = useState(initialData?.hasDigitalAsset === false ? 'no' : 'yes')
    const [digitalAssets, setDigitalAssets] = useState(initialData?.digitalAssets || [])
    const [currentDigitalAsset, setCurrentDigitalAsset] = useState({
        assetType: "",
        platformName: "",
        accountId: "",
        location: "",
        additionalInfo: ""
    })

    // Intellectual Assets State
    const [hasIntellectualAsset, setHasIntellectualAsset] = useState(initialData?.hasIntellectualAsset === false ? 'no' : 'yes')
    const [intellectualAssets, setIntellectualAssets] = useState(initialData?.intellectualAssets || [])
    const [currentIntellectualAsset, setCurrentIntellectualAsset] = useState({
        assetType: "",
        title: "",
        description: "",
        location: "",
        status: ""
    })

    const [errors, setErrors] = useState({})

    const countryOptions = [
        { label: "United Kingdom", value: "UK", icon: UKFlag },
    ]

    const ownershipOptions = [
        "Sole Owner",
        "Joint Ownership",
        "Leasehold",
        "Freehold"
    ]

    const accountTypeOptions = [
        "Savings",
        "Current",
        "Joint",
        "ISA"
    ]

    const investmentTypeOptions = [
        "Stocks",
        "Bonds",
        "Mutual Funds",
        "Crypto",
        "Other",
        "Add"
    ]

    const valuableItemCategoryOptions = [
        "Vehicle",
        "Jewellery",
        "Artwork",
        "Collectible",
        "Other",
        "Add"
    ]

    const digitalAssetTypeOptions = [
        "Cryptocurrency",
        "PayPal",
        "Online Bank",
        "Subscription",
        "Social Media",
        "Cloud Storage",
        "Other",
        "Add"
    ]

    const intellectualAssetTypeOptions = [
        "Patents",
        "Copyrights",
        "Trademarks",
        "Trade Secrets",
        "Industrial Design",
        "Add"
    ]

    const intellectualAssetStatusOptions = [
        "Draft",
        "Filed",
        "Registered",
        "Pending",
        "Granted",
        "In Use",
        "Protected"
    ]


    const handleChange = (field, value) => {
        // Validation for number fields
        if (field === 'estimatedValue') {
            const numericValue = value.replace(/[^0-9.]/g, '')
            setCurrentProperty(prev => ({ ...prev, [field]: numericValue }))
        } else {
            setCurrentProperty(prev => ({ ...prev, [field]: value }))
        }

        // Clear error when user types
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: null }))
        }
    }

    const validateForm = () => {
        const newErrors = {}
        if (!currentProperty.buildingNumber && !currentProperty.buildingName) newErrors.buildingName = "Building Name or Number is required"
        if (!currentProperty.street) newErrors.street = "Street is required"
        if (!currentProperty.town) newErrors.town = "Town is required"
        if (!currentProperty.postcode) newErrors.postcode = "Postcode is required"
        if (!currentProperty.ownershipType) newErrors.ownershipType = "Ownership Type is required"
        if (!currentProperty.estimatedValue) newErrors.estimatedValue = "Estimated Value is required"

        if (currentProperty.hasMortgage === 'yes' && !currentProperty.mortgageLender) {
            newErrors.mortgageLender = "Lender Name is required"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const addProperty = () => {
        if (validateForm()) {
            setProperties(prev => [...prev, { ...currentProperty, id: Date.now() }])
            // Reset form
            setCurrentProperty({
                buildingNumber: "",
                buildingName: "",
                street: "",
                town: "",
                city: "",
                county: "",
                postcode: "",
                country: { label: "United Kingdom", value: "UK", icon: UKFlag },
                ownershipType: "",
                estimatedValue: "",
                accountLocation: "",
                hasMortgage: 'yes',
                mortgageLender: "",
                note: ""
            })
            setErrors({})
        }
    }

    const removeProperty = (id) => {
        setProperties(prev => prev.filter(prop => prop.id !== id))
    }

    // --- Bank Accounts Helper Functions ---
    const handleBankAccountChange = (field, value) => {
        setCurrentBankAccount(prev => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: null }))
        }
    }

    const validateBankAccount = () => {
        const newErrors = {}
        if (!currentBankAccount.bankName) newErrors.bankName = "Bank Name is required"
        if (!currentBankAccount.accountType) newErrors.accountType = "Account Type is required"

        // Add specific error handling for Bank Account fields to errors state
        setErrors(prev => ({ ...prev, ...newErrors }))
        return Object.keys(newErrors).length === 0
    }

    const addBankAccount = () => {
        if (validateBankAccount()) {
            setBankAccounts(prev => [...prev, { ...currentBankAccount, id: Date.now() }])
            setCurrentBankAccount({
                bankName: "",
                accountType: "",
                accountNumber: "",
                accountLocation: "",
                additionalInfo: ""
            })
            setErrors({})
        }
    }

    const removeBankAccount = (id) => {
        setBankAccounts(prev => prev.filter(acc => acc.id !== id))
    }

    // --- Investments Helper Functions ---
    const handleInvestmentChange = (field, value) => {
        setCurrentInvestment(prev => ({ ...prev, [field]: value }))

        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: null }))
        }
    }

    const validateInvestment = () => {
        const newErrors = {}
        if (!currentInvestment.companyName) newErrors.companyName = "Company/Fund Name is required"
        if (!currentInvestment.investmentType) newErrors.investmentType = "Investment Type is required"

        setErrors(prev => ({ ...prev, ...newErrors }))
        return Object.keys(newErrors).length === 0
    }

    const addInvestment = () => {
        if (validateInvestment()) {
            setInvestments(prev => [...prev, { ...currentInvestment, id: Date.now() }])
            setCurrentInvestment({
                companyName: "",
                investmentType: "",
                accountPolicyNumber: "",
                managedBy: "",
                additionalInfo: ""
            })
            setErrors({})
        }
    }

    const removeInvestment = (id) => {
        setInvestments(prev => prev.filter(inv => inv.id !== id))
    }

    // --- Valuable Items Helper Functions ---
    const handleValuableItemChange = (field, value) => {
        setCurrentValuableItem(prev => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: null }))
        }
    }

    const validateValuableItem = () => {
        const newErrors = {}
        if (!currentValuableItem.category) newErrors.category = "Category is required"
        if (!currentValuableItem.itemDescription) newErrors.itemDescription = "Item Description is required"

        setErrors(prev => ({ ...prev, ...newErrors }))
        return Object.keys(newErrors).length === 0
    }

    const addValuableItem = () => {
        if (validateValuableItem()) {
            setValuableItems(prev => [...prev, { ...currentValuableItem, id: Date.now() }])
            setCurrentValuableItem({
                category: "",
                itemDescription: "",
                location: "",
                additionalInfo: ""
            })
            setErrors({})
        }
    }

    const removeValuableItem = (id) => {
        setValuableItems(prev => prev.filter(item => item.id !== id))
    }

    // --- Digital Assets Helper Functions ---
    const handleDigitalAssetChange = (field, value) => {
        setCurrentDigitalAsset(prev => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: null }))
        }
    }

    const validateDigitalAsset = () => {
        const newErrors = {}
        if (!currentDigitalAsset.assetType) newErrors.assetType = "Asset Type is required"
        if (!currentDigitalAsset.platformName) newErrors.platformName = "Platform/Service Name is required"

        setErrors(prev => ({ ...prev, ...newErrors }))
        return Object.keys(newErrors).length === 0
    }

    const addDigitalAsset = () => {
        if (validateDigitalAsset()) {
            setDigitalAssets(prev => [...prev, { ...currentDigitalAsset, id: Date.now() }])
            setCurrentDigitalAsset({
                assetType: "",
                platformName: "",
                accountId: "",
                location: "",
                additionalInfo: ""
            })
            setErrors({})
        }
    }

    const removeDigitalAsset = (id) => {
        setDigitalAssets(prev => prev.filter(asset => asset.id !== id))
    }

    // --- Intellectual Assets Helper Functions ---
    const handleIntellectualAssetChange = (field, value) => {
        setCurrentIntellectualAsset(prev => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: null }))
        }
    }

    const validateIntellectualAsset = () => {
        const newErrors = {}
        if (!currentIntellectualAsset.assetType) newErrors.assetType = "Asset Type is required"
        if (!currentIntellectualAsset.title) newErrors.title = "Title is required"

        setErrors(prev => ({ ...prev, ...newErrors }))
        return Object.keys(newErrors).length === 0
    }

    const addIntellectualAsset = () => {
        if (validateIntellectualAsset()) {
            setIntellectualAssets(prev => [...prev, { ...currentIntellectualAsset, id: Date.now() }])
            setCurrentIntellectualAsset({
                assetType: "",
                title: "",
                description: "",
                location: "",
                status: ""
            })
            setErrors({})
        }
    }

    const removeIntellectualAsset = (id) => {
        setIntellectualAssets(prev => prev.filter(asset => asset.id !== id))
    }

    const handleSave = () => {
        const allErrors = {}
        let isValid = true

        // Property Validation
        if (hasProperty === 'yes' && properties.length === 0) {
            if (!validateForm()) {
                allErrors.property = "Please add at least one property or complete the current entry"
                isValid = false
            } else {
                // Auto-add if valid and list is empty? Or just block.
                // Better to block and show error saying click add.
                allErrors.property = "Please click 'Add' to include this property in your list"
                isValid = false
            }
        }

        // Bank Account Validation
        if (hasBankAccount === 'yes' && bankAccounts.length === 0) {
            if (!validateBankAccount()) {
                allErrors.bank = "Please add at least one bank account or complete the current entry"
                isValid = false
            } else {
                allErrors.bank = "Please click 'Add' to include this bank account in your list"
                isValid = false
            }
        }

        // Investment Validation
        if (hasInvestment === 'yes' && investments.length === 0) {
            if (!validateInvestment()) {
                allErrors.investment = "Please add at least one investment or complete the current entry"
                isValid = false
            } else {
                allErrors.investment = "Please click 'Add' to include this investment in your list"
                isValid = false
            }
        }

        // Valuable Item Validation
        if (hasValuableItem === 'yes' && valuableItems.length === 0) {
            if (!validateValuableItem()) {
                allErrors.valuable = "Please add at least one valuable item or complete the current entry"
                isValid = false
            } else {
                allErrors.valuable = "Please click 'Add' to include this item in your list"
                isValid = false
            }
        }

        // Digital Asset Validation
        if (hasDigitalAsset === 'yes' && digitalAssets.length === 0) {
            if (!validateDigitalAsset()) {
                allErrors.digital = "Please add at least one digital asset or complete the current entry"
                isValid = false
            } else {
                allErrors.digital = "Please click 'Add' to include this digital asset in your list"
                isValid = false
            }
        }

        // Intellectual Asset Validation
        if (hasIntellectualAsset === 'yes' && intellectualAssets.length === 0) {
            if (!validateIntellectualAsset()) {
                allErrors.intellectual = "Please add at least one intellectual asset or complete the current entry"
                isValid = false
            } else {
                allErrors.intellectual = "Please click 'Add' to include this asset in your list"
                isValid = false
            }
        }

        if (isValid) {
            onSave()
        } else {
            // Set global or specific section errors
            setErrors(prev => ({ ...prev, ...allErrors }))
            // Scroll to top or first error could be good but let's start with blocking
        }
    }

    // Emit live data for preview
    useEffect(() => {
        if (onDataChange) onDataChange({
            hasProperty: hasProperty === 'yes',
            assetsList: properties,
            hasBankAccount: hasBankAccount === 'yes',
            bankAccounts,
            hasInvestment: hasInvestment === 'yes',
            investments,
            hasValuableItem: hasValuableItem === 'yes',
            valuableItems,
            hasDigitalAsset: hasDigitalAsset === 'yes',
            digitalAssets,
            hasIntellectualAsset: hasIntellectualAsset === 'yes',
            intellectualAssets
        })
    }, [hasProperty, properties, hasBankAccount, bankAccounts, hasInvestment, investments, hasValuableItem, valuableItems, hasDigitalAsset, digitalAssets, hasIntellectualAsset, intellectualAssets])


    return (
        <div className='bg-[#FAFAFA] rounded-lg p-6'>
            <div className='flex items-center justify-between gap-4 flex-wrap w-full mb-5'>
                <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-text-1'>Assets</h2>
                <button className='text-black flex text-xs items-center gap-1 cursor-pointer'>
                    Auto Saved
                    <Image src={Refresh} alt="Refresh" width={16} height={16} className='w-4 h-4' />
                </button>
            </div>

            <p className='text-text-5 text-base md:text-xl font-medium mb-4'>
                List your major assets and debts to help executors identify your estate.
            </p>

            <div className="mb-6">
                <p className="text-text-4 text-sm font-medium mb-1.5">Do you own any property?</p>
                <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <div className="relative flex items-center">
                            <input
                                type="radio"
                                name="hasProperty"
                                value="yes"
                                checked={hasProperty === 'yes'}
                                onChange={() => setHasProperty('yes')}
                                className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                            />
                        </div>
                        <span className="text-sm text-text-1">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <div className="relative flex items-center">
                            <input
                                type="radio"
                                name="hasProperty"
                                value="no"
                                checked={hasProperty === 'no'}
                                onChange={() => setHasProperty('no')}
                                className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                            />
                        </div>
                        <span className="text-sm text-text-1">No</span>
                    </label>
                </div>
            </div>

            {hasProperty === 'yes' && (
                <div className='space-y-8'>
                    {/* List of Added Properties */}


                    {/* Entry Form */}
                    <div className=''>
                        <h3 className='text-xl font-bold text-text-1 mb-4'>Property Address Details</h3>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            {/* Building Number & Name */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Building Number</label>
                                <input
                                    type="text"
                                    className={`w-full bg-white text-black border ${errors.buildingName ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7`}
                                    placeholder="1568"
                                    value={currentProperty.buildingNumber}
                                    onChange={(e) => handleChange("buildingNumber", e.target.value)}
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Building Name</label>
                                <input
                                    type="text"
                                    className={`w-full bg-white text-black border ${errors.buildingName ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7`}
                                    placeholder="Sky land"
                                    value={currentProperty.buildingName}
                                    onChange={(e) => handleChange("buildingName", e.target.value)}
                                />
                                {errors.buildingName && <p className="text-red-500 text-xs mt-1">{errors.buildingName}</p>}
                            </div>

                            {/* Street & Town */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Street</label>
                                <input
                                    type="text"
                                    className={`w-full bg-white text-black border ${errors.street ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7`}
                                    placeholder="Wood Street"
                                    value={currentProperty.street}
                                    onChange={(e) => handleChange("street", e.target.value)}
                                />
                                {errors.street && <p className="text-red-500 text-xs mt-1">{errors.street}</p>}
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Town</label>
                                <input
                                    type="text"
                                    className={`w-full bg-white text-black border ${errors.town ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7`}
                                    placeholder="Leyton"
                                    value={currentProperty.town}
                                    onChange={(e) => handleChange("town", e.target.value)}
                                />
                                {errors.town && <p className="text-red-500 text-xs mt-1">{errors.town}</p>}
                            </div>

                            {/* City & County */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>City</label>
                                <input
                                    type="text"
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="London"
                                    value={currentProperty.city}
                                    onChange={(e) => handleChange("city", e.target.value)}
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>County/State</label>
                                <input
                                    type="text"
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="London"
                                    value={currentProperty.county}
                                    onChange={(e) => handleChange("county", e.target.value)}
                                />
                            </div>

                            {/* PostCode & Country */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Post/Zip Code</label>
                                <input
                                    type="text"
                                    className={`w-full bg-white text-black border ${errors.postcode ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7`}
                                    placeholder="Post/zip code"
                                    value={currentProperty.postcode}
                                    onChange={(e) => handleChange("postcode", e.target.value)}
                                />
                                {errors.postcode && <p className="text-red-500 text-xs mt-1">{errors.postcode}</p>}
                            </div>
                            <div className='text-text-4'>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Country</label>
                                <Commondropdown
                                    options={countryOptions}
                                    value={currentProperty.country}
                                    onChange={(val) => handleChange("country", val)}
                                    placeholder="Select Country"
                                    className="w-full py-2.5! whitespace-nowrap truncate"
                                    inputClassName=""
                                />
                            </div>

                            {/* Ownership Type */}
                            <div className="md:col-span-2">
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Ownership Type</label>
                                <Commondropdown
                                    options={ownershipOptions}
                                    value={currentProperty.ownershipType}
                                    onChange={(val) => handleChange("ownershipType", val)}
                                    placeholder="Sole Owner/Joint Ownership/Leasehold/Freehold"
                                    className={`w-full py-2.5! text-text-4 ${errors.ownershipType ? 'border-red-500' : ''}`}
                                />
                                {errors.ownershipType && <p className="text-red-500 text-xs mt-1">{errors.ownershipType}</p>}
                            </div>

                            {/* Estimated Value */}
                            <div className="md:col-span-2">
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Estimated Value (£)</label>
                                <input
                                    type="text"
                                    className={`w-full bg-white text-black border ${errors.estimatedValue ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7`}
                                    placeholder="£0.00"
                                    value={currentProperty.estimatedValue}
                                    onChange={(e) => handleChange("estimatedValue", e.target.value)}
                                />
                                {errors.estimatedValue && <p className="text-red-500 text-xs mt-1">{errors.estimatedValue}</p>}
                            </div>

                            {/* Account Location */}
                            <div className="md:col-span-2">
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Account Location</label>
                                <input
                                    type="text"
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="Enter Account Location"
                                    value={currentProperty.accountLocation}
                                    onChange={(e) => handleChange("accountLocation", e.target.value)}
                                />
                            </div>

                            {/* Mortgage Toggle */}
                            <div className="md:col-span-2">
                                <label className="text-text-5 text-sm font-medium mb-2 block">Mortgage?</label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <div className="relative flex items-center">
                                            <input
                                                type="radio"
                                                name="mortgage"
                                                value="yes"
                                                checked={currentProperty.hasMortgage === 'yes'}
                                                onChange={() => handleChange("hasMortgage", 'yes')}
                                                className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                                            />
                                        </div>
                                        <span className="text-sm text-text-5">Yes</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <div className="relative flex items-center">
                                            <input
                                                type="radio"
                                                name="mortgage"
                                                value="no"
                                                checked={currentProperty.hasMortgage === 'no'}
                                                onChange={() => handleChange("hasMortgage", 'no')}
                                                className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                                            />
                                        </div>
                                        <span className="text-sm text-text-5">No</span>
                                    </label>
                                </div>
                            </div>

                            {/* Mortgage Lender Name */}
                            {currentProperty.hasMortgage === 'yes' && (
                                <div className="md:col-span-2">
                                    <label className='block text-sm font-medium text-text-5 mb-1.5'>Mortgage Lender Name</label>
                                    <input
                                        type="text"
                                        className={`w-full bg-white text-black border ${errors.mortgageLender ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7`}
                                        placeholder="Enter Mortgage Lender Name"
                                        value={currentProperty.mortgageLender}
                                        onChange={(e) => handleChange("mortgageLender", e.target.value)}
                                    />
                                    {errors.mortgageLender && <p className="text-red-500 text-xs mt-1">{errors.mortgageLender}</p>}
                                </div>
                            )}

                            {/* Note */}
                            <div className="md:col-span-2">
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Note</label>
                                <textarea
                                    rows={4}
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7 resize-none'
                                    placeholder="Write optional text"
                                    value={currentProperty.note}
                                    onChange={(e) => handleChange("note", e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Li
                        st of Added Properties */}
                        {properties.length > 0 && (
                            <div className="space-y-3 mt-4">
                                <h3 className='text-sm font-bold text-text-1'>Added Properties</h3>
                                {properties.map((prop) => (
                                    <div key={prop.id} className="bg-white p-4 rounded-lg border border-gray-200 flex justify-between items-center shadow-sm">
                                        <div>
                                            <p className="font-medium text-text-1">
                                                {[prop.buildingNumber, prop.buildingName, prop.street].filter(Boolean).join(', ')}
                                            </p>
                                            <p className="text-sm text-text-5">
                                                {[prop.town, prop.postcode].filter(Boolean).join(', ')} • {prop.estimatedValue}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="pt-4 flex gap-4">
                            <button
                                onClick={addProperty}
                                type="button"
                                className="flex cursor-pointer text-base font-semibold items-center gap-2 px-8.5 py-2.5 border border-[#003966] text-[#003966] rounded-lg hover:bg-[#F0F7FF] transition-colors shadow-sm"
                            >
                                <Image src={PlusBlueIcon} alt="Plus Blue Icon" width={24} height={24} className='w-6 h-6' />
                                Add
                            </button>
                            <button
                                onClick={() => {
                                    if (properties.length > 0) {
                                        removeProperty(properties[properties.length - 1].id)
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
                </div>
            )}

            {/* Bank Accounts Section */}
            <div className="mb-6 pt-4">
                {/* <h3 className='text-xl font-bold text-text-1 mb-4'>Bank Accounts</h3> */}
                <p className="text-text-4 text-sm font-medium mb-1.5">Do you have any bank accounts?</p>
                <div className="flex gap-4 mb-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <div className="relative flex items-center">
                            <input
                                type="radio"
                                name="hasBankAccount"
                                value="yes"
                                checked={hasBankAccount === 'yes'}
                                onChange={() => setHasBankAccount('yes')}
                                className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                            />
                        </div>
                        <span className="text-sm text-text-1">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <div className="relative flex items-center">
                            <input
                                type="radio"
                                name="hasBankAccount"
                                value="no"
                                checked={hasBankAccount === 'no'}
                                onChange={() => setHasBankAccount('no')}
                                className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                            />
                        </div>
                        <span className="text-sm text-text-1">No</span>
                    </label>
                </div>

                {hasBankAccount === 'yes' && (
                    <div className=''>
                        <div className='space-y-4'>
                            {/* Bank Name */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Bank Name</label>
                                <input
                                    type="text"
                                    className={`w-full bg-white text-black border ${errors.bankName ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7`}
                                    placeholder="Enter Bank Name"
                                    value={currentBankAccount.bankName}
                                    onChange={(e) => handleBankAccountChange("bankName", e.target.value)}
                                />
                                {errors.bankName && <p className="text-red-500 text-xs mt-1">{errors.bankName}</p>}
                            </div>

                            {/* Account Type */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Account Type</label>
                                <Commondropdown
                                    options={accountTypeOptions}
                                    value={currentBankAccount.accountType}
                                    onChange={(val) => handleBankAccountChange("accountType", val)}
                                    placeholder="Savings / Current / Joint / ISA"
                                    className={`w-full py-2.5! text-text-4 ${errors.accountType ? 'border-red-500' : ''}`}
                                />
                                {errors.accountType && <p className="text-red-500 text-xs mt-1">{errors.accountType}</p>}
                            </div>

                            {/* Account Number */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Account Number (optional)</label>
                                <input
                                    type="text"
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="Enter Account Number (optional)"
                                    value={currentBankAccount.accountNumber}
                                    onChange={(e) => handleBankAccountChange("accountNumber", e.target.value)}
                                />
                            </div>

                            {/* Account Location */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Account Location</label>
                                <input
                                    type="text"
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="Enter Account Location"
                                    value={currentBankAccount.accountLocation}
                                    onChange={(e) => handleBankAccountChange("accountLocation", e.target.value)}
                                />
                            </div>

                            {/* Additional Information */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Additional Information</label>
                                <textarea
                                    rows={4}
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7 resize-none'
                                    placeholder="Additional information if any.."
                                    value={currentBankAccount.additionalInfo}
                                    onChange={(e) => handleBankAccountChange("additionalInfo", e.target.value)}
                                />
                            </div>
                        </div>

                        {/* List of Added Bank Accounts */}
                        {bankAccounts.length > 0 && (
                            <div className="space-y-3 mt-4">
                                <h3 className='text-sm font-bold text-text-1'>Added Bank Accounts</h3>
                                {bankAccounts.map((acc) => (
                                    <div key={acc.id} className="bg-white p-4 rounded-lg border border-gray-200 flex justify-between items-center shadow-sm">
                                        <div className="min-w-0 pr-4">
                                            <p className="font-medium text-text-1 truncate" title={acc.bankName}>
                                                {acc.bankName}
                                            </p>
                                            <p className="text-sm text-text-5 truncate" title={[acc.accountType, acc.accountNumber].filter(Boolean).join(' - ')}>
                                                {[acc.accountType, acc.accountNumber].filter(Boolean).join(' - ')}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="pt-4 flex gap-4">
                            <button
                                onClick={addBankAccount}
                                type="button"
                                className="flex cursor-pointer text-base font-semibold items-center gap-2 px-8.5 py-2.5 border border-[#003966] text-[#003966] rounded-lg hover:bg-[#F0F7FF] transition-colors shadow-sm"
                            >
                                <Image src={PlusBlueIcon} alt="Plus Blue Icon" width={24} height={24} className='w-6 h-6' />
                                Add
                            </button>
                            <button
                                onClick={() => {
                                    if (bankAccounts.length > 0) {
                                        removeBankAccount(bankAccounts[bankAccounts.length - 1].id)
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
            </div>

            {/* Investments Section */}
            <div className="mb-4">
                <h3 className='text-xl font-bold text-text-1 mb-4'>Investments</h3>
                <p className="text-text-4 text-sm font-medium mb-1.5">Do you own investments or shares?</p>
                <div className="flex gap-4 mb-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <div className="relative flex items-center">
                            <input
                                type="radio"
                                name="hasInvestment"
                                value="yes"
                                checked={hasInvestment === 'yes'}
                                onChange={() => setHasInvestment('yes')}
                                className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                            />
                        </div>
                        <span className="text-sm text-text-1">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <div className="relative flex items-center">
                            <input
                                type="radio"
                                name="hasInvestment"
                                value="no"
                                checked={hasInvestment === 'no'}
                                onChange={() => setHasInvestment('no')}
                                className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                            />
                        </div>
                        <span className="text-sm text-text-1">No</span>
                    </label>
                </div>

                {hasInvestment === 'yes' && (
                    <div className=''>
                        <div className='space-y-4'>
                            {/* Company Name */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Company or Fund Name</label>
                                <input
                                    type="text"
                                    className={`w-full bg-white text-black border ${errors.companyName ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7`}
                                    placeholder="Enter Company or Fund Name"
                                    value={currentInvestment.companyName}
                                    onChange={(e) => handleInvestmentChange("companyName", e.target.value)}
                                />
                                {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
                            </div>

                            {/* Investment Type */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Investment Type</label>
                                <Commondropdown
                                    options={investmentTypeOptions}
                                    value={currentInvestment.investmentType}
                                    onChange={(val) => handleInvestmentChange("investmentType", val)}
                                    placeholder="Stocks / Bonds / Mutual Funds / Crypto / Other / Add"
                                    className={`w-full py-2.5! text-text-4 ${errors.investmentType ? 'border-red-500' : ''}`}
                                />
                                {errors.investmentType && <p className="text-red-500 text-xs mt-1">{errors.investmentType}</p>}
                            </div>

                            {/* Account/Policy Number */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Account/Policy Number:</label>
                                <input
                                    type="text"
                                    className={`w-full bg-white text-black border ${errors.accountPolicyNumber ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7`}
                                    placeholder="Enter Account/Policy Number"
                                    value={currentInvestment.accountPolicyNumber}
                                    onChange={(e) => handleInvestmentChange("accountPolicyNumber", e.target.value)}
                                />
                            </div>

                            {/* Managed by */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Managed by</label>
                                <input
                                    type="text"
                                    className={`w-full bg-white text-black border ${errors.managedBy ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7`}
                                    placeholder="Enter Managed by Platform"
                                    value={currentInvestment.managedBy}
                                    onChange={(e) => handleInvestmentChange("managedBy", e.target.value)}
                                />
                            </div>

                            {/* Additional Information */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Additional Information</label>
                                <textarea
                                    rows={4}
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7 resize-none'
                                    placeholder="Additional information if any.."
                                    value={currentInvestment.additionalInfo}
                                    onChange={(e) => handleInvestmentChange("additionalInfo", e.target.value)}
                                />
                            </div>
                        </div>

                        {/* List of Added Investments */}
                        {investments.length > 0 && (
                            <div className="space-y-3 mt-4">
                                <h3 className='text-sm font-bold text-text-1'>Added Investments</h3>
                                {investments.map((inv) => (
                                    <div key={inv.id} className="bg-white p-4 rounded-lg border border-gray-200 flex justify-between items-center shadow-sm">
                                        <div className="min-w-0 pr-4">
                                            <p className="font-medium text-text-1 truncate" title={inv.companyName}>
                                                {inv.companyName}
                                            </p>
                                            <p className="text-sm text-text-5 truncate" title={inv.investmentType}>
                                                {inv.investmentType}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="pt-4 flex gap-4">
                            <button
                                onClick={addInvestment}
                                type="button"
                                className="flex cursor-pointer text-base font-semibold items-center gap-2 px-8.5 py-2.5 border border-[#003966] text-[#003966] rounded-lg hover:bg-[#F0F7FF] transition-colors shadow-sm"
                            >
                                <Image src={PlusBlueIcon} alt="Plus Blue Icon" width={24} height={24} className='w-6 h-6' />
                                Add
                            </button>
                            <button
                                onClick={() => {
                                    if (investments.length > 0) {
                                        removeInvestment(investments[investments.length - 1].id)
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
            </div>

            {/* Valuable Items Section */}
            <div className="mb-4">
                <h3 className='text-xl font-bold text-text-1 mb-4'>Valuable Items</h3>
                <p className="text-text-4 text-sm font-medium mb-1.5">Do you own any vehicles, jewellery, or valuable items?</p>
                <div className="flex gap-4 mb-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <div className="relative flex items-center">
                            <input
                                type="radio"
                                name="hasValuableItem"
                                value="yes"
                                checked={hasValuableItem === 'yes'}
                                onChange={() => setHasValuableItem('yes')}
                                className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                            />
                        </div>
                        <span className="text-sm text-text-1">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <div className="relative flex items-center">
                            <input
                                type="radio"
                                name="hasValuableItem"
                                value="no"
                                checked={hasValuableItem === 'no'}
                                onChange={() => setHasValuableItem('no')}
                                className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                            />
                        </div>
                        <span className="text-sm text-text-1">No</span>
                    </label>
                </div>

                {hasValuableItem === 'yes' && (
                    <div className=''>
                        <div className='space-y-4'>
                            {/* Category */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Category</label>
                                <Commondropdown
                                    options={valuableItemCategoryOptions}
                                    value={currentValuableItem.category}
                                    onChange={(val) => handleValuableItemChange("category", val)}
                                    placeholder="Vehicle / Jewellery / Artwork / Collectible / Other / Add"
                                    className={`w-full py-2.5! text-text-4 ${errors.category ? 'border-red-500' : ''}`}
                                />
                                {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
                            </div>

                            {/* Item Description */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Item Description</label>
                                <input
                                    type="text"
                                    className={`w-full bg-white text-black border ${errors.itemDescription ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7`}
                                    placeholder="Enter description"
                                    value={currentValuableItem.itemDescription}
                                    onChange={(e) => handleValuableItemChange("itemDescription", e.target.value)}
                                />
                                {errors.itemDescription && <p className="text-red-500 text-xs mt-1">{errors.itemDescription}</p>}
                            </div>

                            {/* Location */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Location</label>
                                <input
                                    type="text"
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="Enter Location"
                                    value={currentValuableItem.location}
                                    onChange={(e) => handleValuableItemChange("location", e.target.value)}
                                />
                            </div>

                            {/* Additional Information */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Additional Information</label>
                                <textarea
                                    rows={4}
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7 resize-none'
                                    placeholder="Additional information if any..."
                                    value={currentValuableItem.additionalInfo}
                                    onChange={(e) => handleValuableItemChange("additionalInfo", e.target.value)}
                                />
                            </div>
                        </div>

                        {/* List of Added Valuable Items */}
                        {valuableItems.length > 0 && (
                            <div className="space-y-3 mt-4">
                                <h3 className='text-sm font-bold text-text-1'>Added Valuable Items</h3>
                                {valuableItems.map((item) => (
                                    <div key={item.id} className="bg-white p-4 rounded-lg border border-gray-200 flex justify-between items-center shadow-sm">
                                        <div className="min-w-0 pr-4">
                                            <p className="font-medium text-text-1 truncate" title={item.itemDescription}>
                                                {item.itemDescription}
                                            </p>
                                            <p className="text-sm text-text-5 truncate" title={item.category}>
                                                {item.category}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="pt-4 flex gap-4">
                            <button
                                onClick={addValuableItem}
                                type="button"
                                className="flex cursor-pointer text-base font-semibold items-center gap-2 px-8.5 py-2.5 border border-[#003966] text-[#003966] rounded-lg hover:bg-[#F0F7FF] transition-colors shadow-sm"
                            >
                                <Image src={PlusBlueIcon} alt="Plus Blue Icon" width={24} height={24} className='w-6 h-6' />
                                Add
                            </button>
                            <button
                                onClick={() => {
                                    if (valuableItems.length > 0) {
                                        removeValuableItem(valuableItems[valuableItems.length - 1].id)
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
            </div>

            {/* Digital Assets Section */}
            <div className="mb-4">
                <h3 className='text-xl font-bold text-text-1 mb-4'>Digital Assets</h3>
                <p className="text-text-4 text-sm font-medium mb-1.5">Do you have any digital assets?</p>
                <div className="flex gap-4 mb-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <div className="relative flex items-center">
                            <input
                                type="radio"
                                name="hasDigitalAsset"
                                value="yes"
                                checked={hasDigitalAsset === 'yes'}
                                onChange={() => setHasDigitalAsset('yes')}
                                className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                            />
                        </div>
                        <span className="text-sm text-text-1">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <div className="relative flex items-center">
                            <input
                                type="radio"
                                name="hasDigitalAsset"
                                value="no"
                                checked={hasDigitalAsset === 'no'}
                                onChange={() => setHasDigitalAsset('no')}
                                className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                            />
                        </div>
                        <span className="text-sm text-text-1">No</span>
                    </label>
                </div>

                {hasDigitalAsset === 'yes' && (
                    <div className=''>
                        <div className='space-y-4'>
                            {/* Asset Type */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Asset Type</label>
                                <Commondropdown
                                    options={digitalAssetTypeOptions}
                                    value={currentDigitalAsset.assetType}
                                    onChange={(val) => handleDigitalAssetChange("assetType", val)}
                                    placeholder="Cryptocurrency / PayPal / Online Bank / Subscription / Social Media / Cloud Storage / Other / Add"
                                    className={`w-full py-2.5! text-text-4 ${errors.assetType ? 'border-red-500' : ''}`}
                                />
                                {errors.assetType && <p className="text-red-500 text-xs mt-1">{errors.assetType}</p>}
                            </div>

                            {/* Platform/Service Name */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Platform/Service Name:</label>
                                <input
                                    type="text"
                                    className={`w-full bg-white text-black border ${errors.platformName ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7`}
                                    placeholder="Enter Platform/Service Name"
                                    value={currentDigitalAsset.platformName}
                                    onChange={(e) => handleDigitalAssetChange("platformName", e.target.value)}
                                />
                                {errors.platformName && <p className="text-red-500 text-xs mt-1">{errors.platformName}</p>}
                            </div>

                            {/* Account ID or Wallet Address */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Account ID or Wallet Address</label>
                                <input
                                    type="text"
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="Enter Account ID or Wallet Address"
                                    value={currentDigitalAsset.accountId}
                                    onChange={(e) => handleDigitalAssetChange("accountId", e.target.value)}
                                />
                            </div>

                            {/* Location */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Location</label>
                                <input
                                    type="text"
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="Enter Location"
                                    value={currentDigitalAsset.location}
                                    onChange={(e) => handleDigitalAssetChange("location", e.target.value)}
                                />
                            </div>

                            {/* Additional Information */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Additional Information</label>
                                <textarea
                                    rows={4}
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7 resize-none'
                                    placeholder="Additional information if any..."
                                    value={currentDigitalAsset.additionalInfo}
                                    onChange={(e) => handleDigitalAssetChange("additionalInfo", e.target.value)}
                                />
                            </div>
                        </div>

                        {/* List of Added Digital Assets */}
                        {digitalAssets.length > 0 && (
                            <div className="space-y-3 mt-4">
                                <h3 className='text-sm font-bold text-text-1'>Added Digital Assets</h3>
                                {digitalAssets.map((asset) => (
                                    <div key={asset.id} className="bg-white p-4 rounded-lg border border-gray-200 flex justify-between items-center shadow-sm">
                                        <div className="min-w-0 pr-4">
                                            <p className="font-medium text-text-1 truncate" title={asset.platformName}>
                                                {asset.platformName}
                                            </p>
                                            <p className="text-sm text-text-5 truncate" title={asset.assetType}>
                                                {asset.assetType}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="pt-4 flex gap-4">
                            <button
                                onClick={addDigitalAsset}
                                type="button"
                                className="flex cursor-pointer text-base font-semibold items-center gap-2 px-8.5 py-2.5 border border-[#003966] text-[#003966] rounded-lg hover:bg-[#F0F7FF] transition-colors shadow-sm"
                            >
                                <Image src={PlusBlueIcon} alt="Plus Blue Icon" width={24} height={24} className='w-6 h-6' />
                                Add
                            </button>
                            <button
                                onClick={() => {
                                    if (digitalAssets.length > 0) {
                                        removeDigitalAsset(digitalAssets[digitalAssets.length - 1].id)
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
            </div>

            {/* Intellectual Assets Section */}
            <div className="mb-4">
                <h3 className='text-xl font-bold text-text-1 mb-4'>Intellectual Assets</h3>
                <p className="text-text-4 text-sm font-medium mb-1.5">Do you have any Intellectual assets?</p>
                <div className="flex gap-4 mb-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <div className="relative flex items-center">
                            <input
                                type="radio"
                                name="hasIntellectualAsset"
                                value="yes"
                                checked={hasIntellectualAsset === 'yes'}
                                onChange={() => setHasIntellectualAsset('yes')}
                                className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                            />
                        </div>
                        <span className="text-sm text-text-1">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <div className="relative flex items-center">
                            <input
                                type="radio"
                                name="hasIntellectualAsset"
                                value="no"
                                checked={hasIntellectualAsset === 'no'}
                                onChange={() => setHasIntellectualAsset('no')}
                                className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                            />
                        </div>
                        <span className="text-sm text-text-1">No</span>
                    </label>
                </div>

                {hasIntellectualAsset === 'yes' && (
                    <div className=''>
                        <div className='space-y-4'>
                            {/* Asset Type */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Asset Type</label>
                                <Commondropdown
                                    options={intellectualAssetTypeOptions}
                                    value={currentIntellectualAsset.assetType}
                                    onChange={(val) => handleIntellectualAssetChange("assetType", val)}
                                    placeholder="Patents / Copyrights / Trademarks / Trade Secrets / Industrial Design / Add"
                                    className={`w-full py-2.5! text-text-4 ${errors.assetType ? 'border-red-500' : ''}`}
                                />
                                {errors.assetType && <p className="text-red-500 text-xs mt-1">{errors.assetType}</p>}
                            </div>

                            {/* Title */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Title</label>
                                <input
                                    type="text"
                                    className={`w-full bg-white text-black border ${errors.title ? 'border-red-500' : 'border-[#D5D7DA]'} rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7`}
                                    placeholder="Enter Title"
                                    value={currentIntellectualAsset.title}
                                    onChange={(e) => handleIntellectualAssetChange("title", e.target.value)}
                                />
                                {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                            </div>

                            {/* Description */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Description</label>
                                <textarea
                                    rows={4}
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7 resize-none'
                                    placeholder="Write optional text"
                                    value={currentIntellectualAsset.description}
                                    onChange={(e) => handleIntellectualAssetChange("description", e.target.value)}
                                />
                            </div>

                            {/* Location */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Location (Optional)</label>
                                <input
                                    type="text"
                                    className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-text-7'
                                    placeholder="Enter Location"
                                    value={currentIntellectualAsset.location}
                                    onChange={(e) => handleIntellectualAssetChange("location", e.target.value)}
                                />
                            </div>

                            {/* Status */}
                            <div>
                                <label className='block text-sm font-medium text-text-5 mb-1.5'>Status</label>
                                <Commondropdown
                                    options={intellectualAssetStatusOptions}
                                    value={currentIntellectualAsset.status}
                                    onChange={(val) => handleIntellectualAssetChange("status", val)}
                                    placeholder="Draft / Filed / Registered / Pending / Granted / In Use / Protected"
                                    className="w-full py-2.5! text-text-4"
                                />
                            </div>
                        </div>

                        {/* List of Added Intellectual Assets */}
                        {intellectualAssets.length > 0 && (
                            <div className="space-y-3 mt-4">
                                <h3 className='text-sm font-bold text-text-1'>Added Intellectual Assets</h3>
                                {intellectualAssets.map((asset) => (
                                    <div key={asset.id} className="bg-white p-4 rounded-lg border border-gray-200 flex justify-between items-center shadow-sm">
                                        <div className="min-w-0 pr-4">
                                            <p className="font-medium text-text-1 truncate" title={asset.title}>
                                                {asset.title}
                                            </p>
                                            <p className="text-sm text-text-5 truncate" title={asset.assetType}>
                                                {asset.assetType}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="pt-4 flex gap-4">
                            <button
                                onClick={addIntellectualAsset}
                                type="button"
                                className="flex cursor-pointer text-base font-semibold items-center gap-2 px-8.5 py-2.5 border border-[#003966] text-[#003966] rounded-lg hover:bg-[#F0F7FF] transition-colors shadow-sm"
                            >
                                <Image src={PlusBlueIcon} alt="Plus Blue Icon" width={24} height={24} className='w-6 h-6' />
                                Add
                            </button>
                            <button
                                onClick={() => {
                                    if (intellectualAssets.length > 0) {
                                        removeIntellectualAsset(intellectualAssets[intellectualAssets.length - 1].id)
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
            </div>

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
        </div>
    )
}

export default Assets