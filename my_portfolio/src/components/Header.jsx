import React from 'react'

const Header = () => {
    return (
        <>
            <div class="header bg-black w-full  flex flex-col items-start px-5 border-b border-gray-700 " >

                <nav class="bg-[#010409] border-gray-200 ">
                    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                        <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="mourya kumar" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mourya kumar</span>
                        </a>
                        <div class="flex items-center space-x-6 rtl:space-x-reverse">


                        </div>
                    </div>
                </nav>
                <nav class="bg-[#010409]">
                    <div class="max-w-screen-xl px-4 py-3 mx-auto">
                        <div class="flex items-center">
                            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                                <li>
                                    <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Company</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Team</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Features</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default Header