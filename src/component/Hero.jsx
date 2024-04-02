import React from 'react'
import Companies from './Companies'
import Featured from './Featured'
import Companies1 from './Companies1'
import BentoGrid from './BentoGrid'
import Testimonial from './Testimonial'
import Pricing from './Pricing'
import Faq from './Faq'

const Hero = () => {
    return (
        <main>
            <div className="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent">
                <div className='max-w-4xl mx-auto px-6 pb-32  pt-6 flex flex-col sm:items-center sm:text-center sm:pt-12'>
                    <div className='flex gap-2 my-6 items-center border border-yellow-300 bg-yellow-50 px-3 w-fit rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition group'>
                        <div className='w-2 h-2 bg-yellow-400 rounded-full border-yellow-600'>
                        </div>
                        <p className='font-display font-medium text-yellow-600'>v0.21.1: <span className='text-yellow-800'>Stable Release</span></p>
                        <i><i className="fa-solid fa-triangle-exclamation text-yellow-600 group-hover:text-yellow-800"></i></i>
                    </div>
                    <div className='hidden sm:flex'>

                        <div className='flex items-center gap-2 border border-gray-200 px-4 py-2 hover:border-gray-600 rounded-lg '>

                            <i className="fa-brands fa-github text-gray-600"></i>
                            <p>Star on GitHub</p>


                        </div>
                    </div>
                    <h1 className="font-semibold text-5xl leading-snug sm:text-6xl sm:leading-normal ">AaravBite React Components</h1>
                    <p className='text-xl mt-4 sm:2xl sm:mt-8'>A collection of reusable components built with React and Tailwind CSS A collection of reusable components built with React and Tailwind CSS.</p>
                    <div className='mt-12 flex flex-col sm:flex-row'>
                        <button className='bg-blue-500 hover:bg-blue-600 text-white font-display font-medium text-lg px-6 py-3 rounded-full shadow-sm' >
                            Download now
                        </button>
                        <button className='bg-white hover:bg-gray-100 text-gray-800 font-display font-medium text-lg px-6 py-3 rounded-full shadow-sm mt-4 sm:mt-0 sm:ml-4'>
                            Learn more
                        </button>
                    </div>
                </div>
                <Companies1 />
                <Featured />
                <BentoGrid />
                <Testimonial />
                <Pricing />
                <Faq />
            </div>
        </main>
    )
}

export default Hero