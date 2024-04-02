import React from 'react'

const Pricing = () => {
    return (
        <div id="pricing" class="container">
            <h2 class="h2-style">Choose a plan that fits your needs</h2>
            <div class="flex flex-col lg:flex-row mt-6 gap-6">
                <div class="border flex-1 rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 lg:border-none lg:bg-slate-50">
                    <h3 class="text-4xl">Free</h3>
                    <p class="text-lg font-light">For personal use or testing your app before deploying to customers.</p>
                    <p class="uppercase">Key Features</p>
                    <ul class="space-y-3">
                        <li class="flex items-center gap-4">
                            <i class="fa-solid fa-check text-gray-500"></i>
                            <span class="text-lg font-light text-gray-800">Free for personal use</span>
                        </li>
                        <li class="flex items-center gap-4">
                            <i class="fa-solid fa-check text-gray-500"></i>
                            <span class="text-lg font-light text-gray-800">Free for personal use</span>
                        </li>
                        <li class="flex items-center gap-4">
                            <i class="fa-solid fa-xmark text-gray-500"></i>
                            <span class="text-lg font-light text-gray-800">Free for personal use</span>
                        </li>
                        <li class="flex items-center gap-4">
                            <i class="fa-solid fa-xmark text-gray-500"></i>
                            <span class="text-lg font-light text-gray-800">Free for personal use</span>
                        </li>
                    </ul>
                    <button class="border px-8 py-3 text-primary rounded-lg hover:border-gray-800 font-display font-medium">
                        Read Docs
                    </button>
                </div>
                <div class="border flex-1 rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 lg:border-none lg:bg-slate-50">
                    <h3 class="text-4xl">Essential</h3>
                    <p class="text-lg font-light">For simple desktop apps.</p>
                    <p class="text-lg font-light"><span class="text-2xl font-semibold">$99</span>/month</p>
                    <p class="uppercase">Key Features</p>
                    <ul class="space-y-3">
                        <li class="flex items-center gap-4">
                            <i class="fa-solid fa-check text-gray-500"></i>
                            <span class="text-lg font-light text-gray-800">Free for personal use</span>
                        </li>
                        <li class="flex items-center gap-4">
                            <i class="fa-solid fa-check text-gray-500"></i>
                            <span class="text-lg font-light text-gray-800">Free for personal use</span>
                        </li>
                        <li class="flex items-center gap-4">
                            <i class="fa-solid fa-xmark text-gray-500"></i>
                            <span class="text-lg font-light text-gray-800">Free for personal use</span>
                        </li>
                        <li class="flex items-center gap-4">
                            <i class="fa-solid fa-xmark text-gray-500"></i>
                            <span class="text-lg font-light text-gray-800">Free for personal use</span>
                        </li>
                    </ul>
                    <button class="border px-8 py-3 text-primary rounded-lg hover:border-gray-800 font-display font-medium">
                        Read Docs
                    </button>
                </div>
                <div class="border flex-1 relative rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 lg:border-none lg:bg-slate-50">
                    <p class="text-blue-800 text-sm bg-indigo-100 rounded-full w-fit px-4 py-2 font-display font-semibold absolute top-0 right-8 -translate-y-1/2">Most Popular</p>
                    <h3 class="text-4xl">Professional</h3>
                    <p class="text-lg font-light">For sophisticated desktop apps.</p>
                    <p class="text-lg font-light"><span class="text-2xl font-semibold">$99</span>/month</p>
                    <p class="uppercase">Key Features</p>
                    <ul class="space-y-3">
                        <li class="flex items-center gap-4">
                            <i class="fa-solid fa-check text-gray-500"></i>
                            <span class="text-lg font-light text-gray-800">Free for personal use</span>
                        </li>
                        <li class="flex items-center gap-4">
                            <i class="fa-solid fa-check text-gray-500"></i>
                            <span class="text-lg font-light text-gray-800">Free for personal use</span>
                        </li>
                        <li class="flex items-center gap-4">
                            <i class="fa-solid fa-xmark text-gray-500"></i>
                            <span class="text-lg font-light text-gray-800">Free for personal use</span>
                        </li>
                        <li class="flex items-center gap-4">
                            <i class="fa-solid fa-xmark text-gray-500"></i>
                            <span class="text-lg font-light text-gray-800">Free for personal use</span>
                        </li>
                    </ul>
                    <button class="px-8 py-3 text-white bg-primary rounded-lg hover:bg-opacity-90 font-display font-medium">
                        Read Docs
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pricing