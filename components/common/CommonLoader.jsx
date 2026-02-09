import React from 'react'

function CommonLoader() {
    return (
        <div className='justify-center'>
            <div className='flex flex-col items-center gap-2'>
                <div className='w-10 h-10 bg-white border-2 border-t-main border-black/16 rounded-full animate-spin'></div>
                {/* <div className='flex text-main items-center gap-2'>
                    <p className='text-main text-lg text-lg font-semibold'>Loading</p>
                    <span className='animate-bounce inline-block text-5xl -translate-y-2' style={{ animationDelay: '0s' }}>.</span>
                    <span className='animate-bounce inline-block text-5xl -translate-y-2' style={{ animationDelay: '0.2s' }}>.</span>
                    <span className='animate-bounce inline-block text-5xl -translate-y-2' style={{ animationDelay: '0.4s' }}>.</span>
                </div> */}
            </div>
        </div>
    )
}

export default CommonLoader