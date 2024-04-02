import React from 'react'

const Featured = () => {
    return (
        <div className='container'>
            <h2 className='text-5xl font-display sm:font-semibold'>How it works</h2>
            <div id='step1' className='rounded-xl border px-8 py-14 mt-12 flex flex-col lg:flex-row'>
                <div className='flex flex-col gap-6 lg:w-1/2'>
                    <span className='border border-yellow-300 bg-yellow-50 text-yellow-600 px-3 py-1 rounded-full w-fit font-display'>Step1</span>
                    <h3 className='text-4xl'>Choose a component</h3>
                    <p className='text-lg font-light'>Choose a component from the list of components. You can also create your own component.</p>
                    <ul className='grid grid-cols-2 gap-2 lg:grid-cols-3'>
                        <li className='flex gap-4'>
                            <i className="fa-solid fa-check text-yellow-600"></i>
                            <a href="" className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-100'>
                                Multiple components
                            </a>

                        </li>
                        <li className='flex gap-4'>
                            <i className="fa-solid fa-check text-yellow-600"></i>
                            <a href="" className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-100'>
                                Multiple components
                            </a>

                        </li>
                        <li className='flex gap-4'>
                            <i className="fa-solid fa-check text-yellow-600"></i>
                            <a href="" className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-100'>
                                Multiple components
                            </a>

                        </li>
                        <li className='flex gap-4'>
                            <i className="fa-solid fa-check text-yellow-600"></i>
                            <a href="" className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-100'>
                                Multiple components
                            </a>

                        </li>
                        <li className='flex gap-4'>
                            <i className="fa-solid fa-check text-yellow-600"></i>
                            <a href="" className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-100'>
                                Multiple components
                            </a>

                        </li>
                        <li className='flex gap-4'>
                            <i className="fa-solid fa-check text-yellow-600"></i>
                            <a href="" className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-100'>
                                Multiple components
                            </a>

                        </li>
                    </ul>
                </div>
                <div className='mt-12 lg:mt-0'>
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" />
                </div>
            </div>
        </div>
    )
}

export default Featured