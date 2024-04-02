import React from 'react';

const Companies1 = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <i className='fa-solid fa-arrow-right translate-y-2 animate-ping infinite'></i>
                <span className='font-medium'>Apps powered by Aarav</span>
                <i className='fa-solid fa-arrow-right translate-y-2 -scale-x-100 animate-ping infinite'></i>
            </div>

            <div className='grid grid-cols-3 sm:grid-cols-6 gap-4 overflow-x-hidden scroll-smooth pb-4 px-2'>
                {/* Company logos */}
                {[...Array(16)].map((_, index) => (
                    <div
                        key={index}
                        className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 animate-pulse animate-delay-[0.1s*index]'
                    >
                        <img className='w-12 h-12 md:w-16 md:h-16' src="https://flowbite.com/docs/images/logo.svg" alt="" />
                        <span className='font-semibold text-[12px] md:text-[16px]'>Flowbite</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Companies1;
