import React from 'react'
import { Link } from 'react-router-dom'

const Testimonial = () => {
    return (
        <div id="testimonials" class="container">
            <h2 class="text-5xl sm:font-semibold mb-14">Customer stories</h2>
            <div class="rounded-xl border flex flex-col lg:flex-row items-end">
                <div class="flex flex-col gap-12 p-8">
                    <div class="h-4 w-fit">
                        <img src="./assets/asset 44.svg" alt="" />
                    </div>
                    <h3 class="text-xl leading-relaxed">ClickUp used ToDesktop to get their desktop app in front of customers in days instead of months.</h3>
                    <div id="tag-container" class="flex gap-3 flex-wrap">
                        <div class="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                            <i class="fa-solid fa-check"></i>
                            <span class="font-display font-medium">Chromeless UI</span>
                        </div>
                        <div class="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                            <i class="fa-solid fa-check"></i>
                            <span class="font-display font-medium">Native spellcheck</span>
                        </div>
                        <div class="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                            <i class="fa-solid fa-check"></i>
                            <span class="font-display font-medium">Task time in menubar</span>
                        </div>
                        <div class="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                            <i class="fa-solid fa-check"></i>
                            <span class="font-display font-medium">Notification count in the dock</span>
                        </div>
                        <div class="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                            <i class="fa-solid fa-check"></i>
                            <span class="font-display font-medium">Global hotkey to create task</span>
                        </div>
                    </div>
                    <p class="text-lg font-light text-gray-500">“ToDesktop provided us with a <span class="text-gray-800">polished desktop app</span> in no time. Their expert team guided us through a smooth migration from our outdated legacy desktop app, enabling us to deliver <span class="text-gray-800">new and improved features</span> to our customers within days.”</p>
                    <div id="user-card" class="flex gap-4">
                        <div class="w-12">
                            <img src="./assets/asset 45.jpeg" class="rounded-full" alt="" />
                        </div>
                        <div class="flex flex-col">
                            <h3>Zeb Evans</h3>
                            <p class="text-gray-500">Founder & CEO, <a href="#" class="anchor-hover">ClickUp</a> </p>
                        </div>
                    </div>
                </div>
                <div class="">
                    <img src="./assets/asset 46.png" class="pl-12" alt="" />
                </div>
            </div>
            <div class="flex flex-col lg:flex-row justify-between gap-4 mt-6">
                <div class="rounded-2xl gradient-hover-outer group">
                    <div class="rounded-2xl p-6 gradient-hover-inner flex flex-col gap-6">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                                <i class="fa-solid fa-code text-indigo-800"></i>
                            </div>
                            <h3 class="text-2xl font-semibold">Native APIs</h3>
                        </div>
                        <p class="text-lg font-light">What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>
                        <div class="flex gap-4">
                            <div class="flex">
                                <div class="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                                    <img src="./assets/asset 47.png" class="min-w-16 min-h-16" alt="" />
                                </div>
                                <div class="w-12 h-12 rounded-full overflow-hidden border border-white">
                                    <img src="./assets/asset 48.jpeg" alt="" />
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <h3>Rick Pastoor</h3>
                                <a href="#" class="anchor-hover w-fit text-gray-500">Rise</a>
                            </div>
                        </div>

                    </div>

                </div>
                <div class="rounded-2xl gradient-hover-outer group">
                    <div class="rounded-2xl p-6 gradient-hover-inner flex flex-col gap-6">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                                <i class="fa-solid fa-code text-indigo-800"></i>
                            </div>
                            <h3 class="text-2xl font-semibold">Native APIs</h3>
                        </div>
                        <p class="text-lg font-light">What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>
                        <div class="flex gap-4">
                            <div class="flex">
                                <div class="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                                    <img src="./assets/asset 47.png" class="min-w-16 min-h-16" alt="" />
                                </div>
                                <div class="w-12 h-12 rounded-full overflow-hidden border border-white">
                                    <img src="./assets/asset 48.jpeg" alt="" />
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <h3>Rick Pastoor</h3>
                                <a href="#" class="anchor-hover w-fit text-gray-500">Rise</a>
                            </div>
                        </div>

                    </div>

                </div>
                <div class="rounded-2xl gradient-hover-outer group">
                    <div class="rounded-2xl p-6 gradient-hover-inner flex flex-col gap-6">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                                <i class="fa-solid fa-code text-indigo-800"></i>
                            </div>
                            <h3 class="text-2xl font-semibold">Native APIs</h3>
                        </div>
                        <p class="text-lg font-light">What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>
                        <div class="flex gap-4">
                            <div class="flex">
                                <div class="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                                    <img src="./assets/asset 47.png" class="min-w-16 min-h-16" alt="" />
                                </div>
                                <div class="w-12 h-12 rounded-full overflow-hidden border border-white">
                                    <img src="./assets/asset 48.jpeg" alt="" />
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <h3>Rick Pastoor</h3>
                                <a href="#" class="anchor-hover w-fit text-gray-500">Rise</a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div class="rounded-2xl flex flex-col bg-black lg:flex-row mt-12 pt-6 lg:pt-10">
                <div class="flex flex-col gap-4 p-8 lg:flex-1 lg:gap-8">
                    <span class="text-gray-400 font-display font-medium">READY TO START BUILDING?</span>
                    <h2 class="text-4xl text-white leading-tight lg:text-5xl">Create your desktop app for free*</h2>
                    <p class="text-lg font-light text-gray-400 lg:text-xl">ToDesktop Builder will take you step-by-step through the process of creating your first desktop app in just a few minutes.</p>
                    <button class="bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 flex justify-center items-center gap-4">
                        <i class="fa-solid fa-download "></i>
                        <span>Download ToDestop Builder</span>
                    </button>
                    <p class="text-gray-400 text-xs italic leading-tight">*You can create a desktop app and run it on your computer for free. You will only be charged if you want to create a distributable app for your customers.</p>
                </div>
                <div class="lg:w-1/2">
                    <img src="./assets/asset 46.png" class="pl-12" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Testimonial