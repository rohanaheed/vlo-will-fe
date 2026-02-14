import React from 'react'

const ProgressBar = ({ currentStep = 0, completedSteps = [], onStepClick }) => {
    const steps = [
        "Testator", "Executors", "Spouse", "Beneficiaries", "Assets",
        "Liabilities", "Gifts", "Residual", "Funeral", "Witnesses", "Review"
    ]

    return (
        <div className='w-full overflow-x-auto pb-2'>
            <div className='flex justify-between items-start relative min-w-[800px] md:min-w-full'>

                {/* Background Lines Layer - Positioned to go under circles */}
                <div className='absolute top-4 left-0 w-full flex items-center justify-between pointer-events-none z-0 px-4'>
                    {steps.slice(0, -1).map((_, index) => (
                        <div key={index} className={`flex-1 h-[2px] 
                            ${index < currentStep || completedSteps.includes(index) ? 'bg-[#0B2C4F]' : 'bg-[#E4E7EC]'}
                        `}></div>
                    ))}
                </div>

                {/* Steps */}
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className='flex flex-col items-center z-10 cursor-pointer group bg-transparent relative'
                        onClick={() => onStepClick && onStepClick(index)}
                    >
                        {/* Circle */}
                        <div className={`w-8 h-8 p-0.5 rounded-full flex items-center justify-center transition-all duration-300 z-10 border-2
                            ${completedSteps.includes(index) ? 'bg-[#0B2C4F] border-[#0B2C4F]' : 'bg-[#fafafa]'}
                            ${!completedSteps.includes(index) && index <= currentStep ? 'border-main' : ''}
                            ${!completedSteps.includes(index) && index > currentStep ? 'border-[#E9EAEB]' : ''}
                        `}>
                            {!completedSteps.includes(index) && index <= currentStep && (
                                <div className='w-full h-full bg-main rounded-full flex items-center justify-center'>
                                    <div className='w-2.5 h-2.5 bg-white rounded-full'></div>
                                </div>
                            )}
                            {/* Pending/Future Step Circle (Grey Dot) */}
                            {!completedSteps.includes(index) && index > currentStep && (
                                <div className='w-2.5 h-2.5 bg-[#D5D7DA] rounded-full'></div>
                            )}
                            {/* Completed Step Tick */}
                            {completedSteps.includes(index) && (
                                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </div>

                        {/* Label */}
                        <span className={`text-xs mt-2 font-medium transition-colors duration-300 whitespace-nowrap
                             ${index === currentStep ? 'text-main font-bold' : 'text-[#475467]'}
                        `}>
                            {step}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProgressBar
