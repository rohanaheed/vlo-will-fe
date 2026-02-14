"use client"
import React, { useState } from 'react'
import Refresh from '@/components/assets/images/RefreshIcon.svg'
import Image from 'next/image'
import Commondropdown from '@/components/common/Commondropdown1.jsx'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import CalendarIcon from '@/components/assets/images/CalendarIcon1.svg'
import UKFlag from '@/components/assets/images/UkFlag.svg'
import PlusBlueIcon from '@/components/assets/images/PlusBlueIcon.svg'
import CrossRedIcon from '@/components/assets/images/CrossRedIcon.svg'

function Witnesses({ onSave, onSkip, onBack }) {
    // Testator's Signature
    const [testatorTitle, setTestatorTitle] = useState('Mr')
    const [testatorName, setTestatorName] = useState('')
    const [testatorDate, setTestatorDate] = useState(null)
    const [hasWitnesses, setHasWitnesses] = useState('yes')

    // Witness 1
    const [witness1Title, setWitness1Title] = useState('Mr')
    const [witness1Name, setWitness1Name] = useState('')
    const [witness1BuildingNumber, setWitness1BuildingNumber] = useState('')
    const [witness1BuildingName, setWitness1BuildingName] = useState('')
    const [witness1Street, setWitness1Street] = useState('')
    const [witness1Town, setWitness1Town] = useState('')
    const [witness1City, setWitness1City] = useState('')
    const [witness1County, setWitness1County] = useState('')
    const [witness1Postcode, setWitness1Postcode] = useState('')
    const [witness1Country, setWitness1Country] = useState({ label: "United Kingdom", value: "United Kingdom", icon: UKFlag })
    const [witness1Address, setWitness1Address] = useState('')
    const [witness1Occupation, setWitness1Occupation] = useState('')
    const [witness1Signature, setWitness1Signature] = useState('')

    // Witness 2
    const [witness2Title, setWitness2Title] = useState('Mr')
    const [witness2Name, setWitness2Name] = useState('')
    const [witness2BuildingNumber, setWitness2BuildingNumber] = useState('')
    const [witness2BuildingName, setWitness2BuildingName] = useState('')
    const [witness2Street, setWitness2Street] = useState('')
    const [witness2Town, setWitness2Town] = useState('')
    const [witness2City, setWitness2City] = useState('')
    const [witness2County, setWitness2County] = useState('')
    const [witness2Postcode, setWitness2Postcode] = useState('')
    const [witness2Country, setWitness2Country] = useState({ label: "United Kingdom", value: "United Kingdom", icon: UKFlag })
    const [witness2Address, setWitness2Address] = useState('')
    const [witness2Occupation, setWitness2Occupation] = useState('')
    const [witness2Signature, setWitness2Signature] = useState('')

    const [beneficiaryConfirm, setBeneficiaryConfirm] = useState('yes')

    const [errors, setErrors] = useState({})

    const titleOptions = ['Mr', 'Mrs', 'Ms', 'Dr']
    const countryOptions = [
        { label: "United Kingdom", value: "United Kingdom", icon: UKFlag },
        { label: "United States", value: "United States", icon: UKFlag },
        { label: "Canada", value: "Canada", icon: UKFlag },
        { label: "Australia", value: "Australia", icon: UKFlag }
    ]
    const occupationOptions = ['Accountant', 'Teacher', 'Engineer', 'Doctor', 'Lawyer', 'Nurse', 'Other']

    const validate = () => {
        const newErrors = {}
        if (!testatorName) newErrors.testatorName = "Testator name is required"
        if (!testatorDate) newErrors.testatorDate = "Date is required"

        if (hasWitnesses === 'yes') {
            if (!witness1Name) newErrors.witness1Name = "Witness 1 name is required"
            if (!witness2Name) newErrors.witness2Name = "Witness 2 name is required"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSave = () => {
        if (validate()) {
            onSave()
        }
    }

    const CustomDateInput = React.forwardRef(({ value, onClick }, ref) => (
        <div className='relative w-full' onClick={onClick} ref={ref}>
            <Image
                src={CalendarIcon}
                alt="Calendar"
                width={20}
                height={20}
                className='absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none'
            />
            <input
                type='text'
                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg pl-10 pr-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680] cursor-pointer'
                placeholder='DD/MM/YYYY'
                value={value}
                readOnly
            />
        </div>
    ))

    return (
        <div className='bg-[#FAFAFA] rounded-lg p-6'>
            <div className='flex items-center justify-between gap-4 flex-wrap w-full mb-5'>
                <h2 className='text-xl md:text-2xl lg:text-4xl font-bold text-text-1'>Witnesses</h2>
                <button className='text-black flex text-xs items-center gap-1 cursor-pointer'>
                    Auto Saved
                    <Image src={Refresh} alt="Refresh" width={16} height={16} className='w-4 h-4' />
                </button>
            </div>

            <p className='text-text-4 text-sm md:text-base mb-4'>
                Two witnesses must sign your Will to make it legally valid.
            </p>

            <div className='space-y-4'>
                {/* Testator's Signature */}
                <div>
                    <h3 className='text-lg font-bold text-text-1 mb-4'>Testator's Signature:</h3>

                    <div className='space-y-4'>
                        <div>
                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Full Name</label>
                            <div className='flex items-center w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-2 focus-within:border-black'>
                                <Commondropdown
                                    options={titleOptions}
                                    value={testatorTitle}
                                    onChange={(val) => setTestatorTitle(val)}
                                    placeholder="Mr / Mrs / Ms / Dr"
                                    className="!border-none w-fit !gap-1 text-[#414651] !shadow-none !bg-transparent whitespace-nowrap !py-0 !pr-0 !px-1.5"
                                    dropdownClassName="!w-[100px]"
                                />
                                <input
                                    type='text'
                                    className='flex-1 bg-transparent text-black border-none outline-none text-sm placeholder:text-[#717680] py-2.5 pr-2'
                                    placeholder='John Alexander Smith'
                                    value={testatorName}
                                    onChange={(e) => {
                                        setTestatorName(e.target.value)
                                        if (errors.testatorName) setErrors(prev => ({ ...prev, testatorName: null }))
                                    }}
                                />
                            </div>
                            {errors.testatorName && <p className='text-red-500 text-xs mt-1'>{errors.testatorName}</p>}
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Date</label>
                            <DatePicker
                                selected={testatorDate}
                                onChange={(date) => {
                                    setTestatorDate(date)
                                    if (errors.testatorDate) setErrors(prev => ({ ...prev, testatorDate: null }))
                                }}
                                customInput={<CustomDateInput />}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="DD/MM/YYYY"
                                wrapperClassName="w-full"
                            />
                            {errors.testatorDate && <p className='text-red-500 text-xs mt-1'>{errors.testatorDate}</p>}
                        </div>

                        <div>
                            <p className='text-sm font-medium text-text-4 mb-2'>Do you have witnesses for your will?</p>
                            <div className='flex items-center gap-6'>
                                <label className='flex items-center gap-2 cursor-pointer'>
                                    <input
                                        type='radio'
                                        name='hasWitnesses'
                                        checked={hasWitnesses === 'yes'}
                                        onChange={() => setHasWitnesses('yes')}
                                        className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                                    />
                                    <span className='text-sm font-medium text-text-1'>Yes</span>
                                </label>
                                <label className='flex items-center gap-2 cursor-pointer'>
                                    <input
                                        type='radio'
                                        name='hasWitnesses'
                                        checked={hasWitnesses === 'no'}
                                        onChange={() => setHasWitnesses('no')}
                                        className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                                    />
                                    <span className='text-sm font-medium text-text-1'>No</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {hasWitnesses === 'yes' && (
                    <>
                        {/* Witness 1 */}
                        <div>
                            <h3 className='text-lg font-bold text-text-1 mb-4'>Witness 1</h3>

                            <div className='space-y-4'>
                                <div>
                                    <label className='block text-sm font-medium text-text-4 mb-1.5'>Full Name</label>
                                    <div className='flex items-center w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-2 focus-within:border-black'>
                                        <Commondropdown
                                            options={titleOptions}
                                            value={witness1Title}
                                            onChange={(val) => setWitness1Title(val)}
                                            placeholder="Mr / Mrs / Ms / Dr"
                                            className="!border-none w-fit !gap-1 text-[#414651] !shadow-none !bg-transparent whitespace-nowrap !py-0 !pr-0 !px-1.5"
                                            dropdownClassName="!w-[100px]"
                                        />
                                        <input
                                            type='text'
                                            className='flex-1 bg-transparent text-black border-none outline-none text-sm placeholder:text-[#717680] py-2.5 pr-2'
                                            placeholder='John Alexander Smith'
                                            value={witness1Name}
                                            onChange={(e) => {
                                                setWitness1Name(e.target.value)
                                                if (errors.witness1Name) setErrors(prev => ({ ...prev, witness1Name: null }))
                                            }}
                                        />
                                    </div>
                                    {errors.witness1Name && <p className='text-red-500 text-xs mt-1'>{errors.witness1Name}</p>}
                                </div>

                                <div>
                                    <h4 className='text-sm font-bold text-text-1 mb-3'>Address Details</h4>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Building Number</label>
                                            <input
                                                type='text'
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]'
                                                placeholder='1568'
                                                value={witness1BuildingNumber}
                                                onChange={(e) => setWitness1BuildingNumber(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Building Name</label>
                                            <input
                                                type='text'
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]'
                                                placeholder='Sky land'
                                                value={witness1BuildingName}
                                                onChange={(e) => setWitness1BuildingName(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Street</label>
                                            <input
                                                type='text'
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]'
                                                placeholder='Wood Street'
                                                value={witness1Street}
                                                onChange={(e) => setWitness1Street(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Town</label>
                                            <input
                                                type='text'
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]'
                                                placeholder='Leyton'
                                                value={witness1Town}
                                                onChange={(e) => setWitness1Town(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>City</label>
                                            <input
                                                type='text'
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]'
                                                placeholder='London'
                                                value={witness1City}
                                                onChange={(e) => setWitness1City(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>County/State</label>
                                            <input
                                                type='text'
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]'
                                                placeholder='London'
                                                value={witness1County}
                                                onChange={(e) => setWitness1County(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Post/Zip Code</label>
                                            <input
                                                type='text'
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]'
                                                placeholder='Post/zip code'
                                                value={witness1Postcode}
                                                onChange={(e) => setWitness1Postcode(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Country</label>
                                            <Commondropdown
                                                options={countryOptions}
                                                value={witness1Country}
                                                onChange={(val) => setWitness1Country(val)}
                                                placeholder="Select Country"
                                                className="w-full !py-2.5 text-[#414651]"
                                                dropdownClassName="!text-black"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className='block text-sm font-medium text-text-4 mb-1.5'>Address <span className='text-red-500'>*</span></label>
                                    <input
                                        type='text'
                                        className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]'
                                        placeholder='45 Meadow Lane, Manchester, M 14 3AA'
                                        value={witness1Address}
                                        onChange={(e) => setWitness1Address(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-medium text-text-4 mb-1.5'>Occupation</label>
                                    <Commondropdown
                                        options={occupationOptions}
                                        value={witness1Occupation}
                                        onChange={(val) => setWitness1Occupation(val)}
                                        placeholder="Accountant"
                                        className="w-full !py-2.5 text-[#414651]"
                                        dropdownClassName="!text-black"
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-medium text-text-4 mb-1.5'>Witness Signature:</label>
                                    <input
                                        type='text'
                                        className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]'
                                        placeholder='Daniel Evans'
                                        value={witness1Signature}
                                        onChange={(e) => setWitness1Signature(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Witness 2 */}
                        <div>
                            <h3 className='text-lg font-bold text-text-1 mb-4'>Witness 2</h3>

                            <div className='space-y-4'>
                                <div>
                                    <label className='block text-sm font-medium text-text-4 mb-1.5'>Full Name</label>
                                    <div className='flex items-center w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-2 focus-within:border-black'>
                                        <Commondropdown
                                            options={titleOptions}
                                            value={witness2Title}
                                            onChange={(val) => setWitness2Title(val)}
                                            placeholder="Mr / Mrs / Ms / Dr"
                                            className="!border-none w-fit !gap-1 text-[#414651] !shadow-none !bg-transparent whitespace-nowrap !py-0 !pr-0 !px-1.5"
                                            dropdownClassName="!w-[100px]"
                                        />
                                        <input
                                            type='text'
                                            className='flex-1 bg-transparent text-black border-none outline-none text-sm placeholder:text-[#717680] py-2.5 pr-2'
                                            placeholder='John Alexander Smith'
                                            value={witness2Name}
                                            onChange={(e) => {
                                                setWitness2Name(e.target.value)
                                                if (errors.witness2Name) setErrors(prev => ({ ...prev, witness2Name: null }))
                                            }}
                                        />
                                    </div>
                                    {errors.witness2Name && <p className='text-red-500 text-xs mt-1'>{errors.witness2Name}</p>}
                                </div>

                                <div>
                                    <h4 className='text-sm font-bold text-text-1 mb-3'>Address Details</h4>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Building Number</label>
                                            <input
                                                type='text'
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]'
                                                placeholder='1568'
                                                value={witness2BuildingNumber}
                                                onChange={(e) => setWitness2BuildingNumber(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Building Name</label>
                                            <input
                                                type='text'
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]'
                                                placeholder='Sky land'
                                                value={witness2BuildingName}
                                                onChange={(e) => setWitness2BuildingName(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Street</label>
                                            <input
                                                type='text'
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]'
                                                placeholder='Wood Street'
                                                value={witness2Street}
                                                onChange={(e) => setWitness2Street(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Town</label>
                                            <input
                                                type='text'
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]'
                                                placeholder='Leyton'
                                                value={witness2Town}
                                                onChange={(e) => setWitness2Town(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>City</label>
                                            <input
                                                type='text'
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]'
                                                placeholder='London'
                                                value={witness2City}
                                                onChange={(e) => setWitness2City(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>County/State</label>
                                            <input
                                                type='text'
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]'
                                                placeholder='London'
                                                value={witness2County}
                                                onChange={(e) => setWitness2County(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Post/Zip Code</label>
                                            <input
                                                type='text'
                                                className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]'
                                                placeholder='Post/zip code'
                                                value={witness2Postcode}
                                                onChange={(e) => setWitness2Postcode(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-text-4 mb-1.5'>Country</label>
                                            <Commondropdown
                                                options={countryOptions}
                                                value={witness2Country}
                                                onChange={(val) => setWitness2Country(val)}
                                                placeholder="Select Country"
                                                className="w-full !py-2.5 text-[#414651]"
                                                dropdownClassName="!text-black"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className='block text-sm font-medium text-text-4 mb-1.5'>Address <span className='text-red-500'>*</span></label>
                                    <input
                                        type='text'
                                        className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]'
                                        placeholder='45 Meadow Lane, Manchester, M 14 3AA'
                                        value={witness2Address}
                                        onChange={(e) => setWitness2Address(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-medium text-text-4 mb-1.5'>Occupation</label>
                                    <Commondropdown
                                        options={occupationOptions}
                                        value={witness2Occupation}
                                        onChange={(val) => setWitness2Occupation(val)}
                                        placeholder="Teacher"
                                        className="w-full !py-2.5 text-[#414651]"
                                        dropdownClassName="!text-black"
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-medium text-text-4 mb-1.5'>Witness Signature:</label>
                                    <input
                                        type='text'
                                        className='w-full bg-white text-black border border-[#D5D7DA] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black placeholder:text-[#717680]'
                                        placeholder='Daniel Evans'
                                        value={witness2Signature}
                                        onChange={(e) => setWitness2Signature(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Add/Remove Buttons */}
                        <div className='flex items-center gap-4 mt-4'>
                            <button
                                type='button'
                                className='flex cursor-pointer text-base font-semibold items-center gap-2 px-8.5 py-2.5 border border-[#003966] text-[#003966] rounded-lg hover:bg-[#F0F7FF] transition-colors shadow-sm'
                            >
                                <Image src={PlusBlueIcon} alt="Add" width={18} height={18} />
                                Add
                            </button>
                            <button
                                type='button'
                                className='flex items-center gap-2 px-5.5 py-2.5 rounded-lg border border-[#FDA29B] text-[#D92D20] font-bold text-sm hover:bg-red-50 transition-colors shadow-sm cursor-pointer'
                            >
                                <Image src={CrossRedIcon} alt="Remove" width={18} height={18} />
                                Remove
                            </button>
                        </div>

                        {/* Beneficiary Confirmation */}
                        <div className=''>
                            <p className='text-sm font-medium text-text-4 mb-1.5'>Confirm both witnesses are not beneficiaries or related to any beneficiary?</p>
                            <div className='flex items-center gap-6 mb-3'>
                                <label className='flex items-center gap-2 cursor-pointer'>
                                    <input
                                        type='radio'
                                        name='beneficiaryConfirm'
                                        checked={beneficiaryConfirm === 'yes'}
                                        onChange={() => setBeneficiaryConfirm('yes')}
                                        className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                                    />
                                    <span className='text-sm font-medium text-text-1'>Yes</span>
                                </label>
                                <label className='flex items-center gap-2 cursor-pointer'>
                                    <input
                                        type='radio'
                                        name='beneficiaryConfirm'
                                        checked={beneficiaryConfirm === 'no'}
                                        onChange={() => setBeneficiaryConfirm('no')}
                                        className="appearance-none w-4 h-4 border border-gray-300 rounded-full bg-white checked:border-[#003966] checked:bg-white focus:outline-none relative flex items-center justify-center after:content-[''] after:hidden after:absolute after:w-2 after:h-2 after:bg-[#003966] after:rounded-full checked:after:block"
                                    />
                                    <span className='text-sm font-medium text-text-1'>No</span>
                                </label>
                            </div>
                            <div className=''>
                                <p className='text-sm text-text-4 font-medium'>
                                    ⚠️ Witnesses must not be beneficiaries or directly related to any beneficiary. Please select new witnesses who are independent and over 18 years of age.
                                </p>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {errors.global && <p className='text-red-500 text-sm mt-4 font-medium'>{errors.global}</p>}

            {/* Action Buttons */}
            <div className='flex items-center flex-wrap gap-4 mt-4'>
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

export default Witnesses