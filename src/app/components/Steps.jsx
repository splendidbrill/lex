import React from 'react'
import Image from 'next/image'

const Steps = () => {
  return (
    <div id="steps" className="flex flex-col gap-6 mt-20  px-4 md:px-16 lg:px-32 ">
            <h2 className="text-5xl sm:font-semibold mb-14">How it works</h2>
            <div id="step1" className="rounded-xl border border-gray-200/70 px-8 py-12 flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col gap-6 lg:w-1/2">
                    <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">Step 1</span>
                    <h3 className="text-4xl">Lex as a mentor</h3>
                    <p className="text-lg font-light">Lex helps guide your entrepreneurial journey.</p>
                    <ul className="grid grid-cols-2 gap-2">
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href=""><b>✅ Fills the gaps in your knowledge before you know something is missing</b></a>
                        </li>
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href=""> </a>
                        </li>
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href=""><b>✅ Facilitates learning and progress tracking (coming soon)</b></a>
                        </li>
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href=""> </a>
                        </li>
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href=""><b>✅ Simplifys complex tasks</b></a>
                        </li>
                        {/* <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href=""></a>
                        </li> */}
                    </ul>
                </div>
                <div className="pt-12">
                    <Image src="./assets/asset 66.svg" alt="" width={500} height={300}/>
                </div>
            </div>
            <div id="step2" className="rounded-xl border border-gray-200/70 px-8 py-12 flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col gap-6 lg:w-1/2">
                    <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">Step 2</span>
                    <h3 className="text-4xl">AI enhanced command centre</h3>
                    <p className="text-lg font-light">All your business needs in one place.</p>
                    <ul className="grid grid-cols-2 gap-2">
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href=""><b>✅ Connect and organize your AI agent workflows</b></a>
                        </li>
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href=""> </a>
                        </li>
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href=""><b>✅ Integration with business applications (coming soon)</b></a>
                        </li>
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href=""> </a>
                        </li>
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href=""><b>✅ Control all agents from one chat (coming soon)</b></a>
                        </li>
                        {/* <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href=""></a>
                        </li> */}
                    </ul>
                </div>
                <div className="pt-12">
                    <Image src="./assets/asset 66.svg" alt="" width={500} height={300} />
                </div>
            </div>
            <div id="step3" className="rounded-xl border border-gray-200/70 px-8 py-12 flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col gap-6 lg:w-1/2">
                    <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">Step 3</span>
                    <h3 className="text-4xl">Lex as your cofounder</h3>
                    <p className="text-lg font-light">Helps you progress at any stage.</p>
                    <ul className="grid grid-cols-2 gap-2">
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href=""><b>✅ Develop strategies</b></a>
                        </li>
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href=""> </a>
                        </li>
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href=""><b>✅ Trend identification</b></a>
                        </li>
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href=""> </a>
                        </li>
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href=""><b>✅ And much more</b></a>
                        </li>
                        {/* <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href=""></a>
                        </li> */}
                    </ul>
                </div>
                <div className="pt-12">
                    <Image src="./assets/asset 66.svg" alt="" width={500} height={300} />
                </div>
            </div>
        </div>
  )
}

export default Steps