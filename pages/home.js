import React, { useState } from "react";
import Services from './components/services';
function hero() {
    const [show, setShow] = useState(false);
    return (
        <div className="bg-gray-100 pb-12 overflow-y-hidden" style={{ minHeight: 700 }}>
            {/* Code block starts */}
            <dh-component>
                <nav className="w-full border-b">
                    <div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-between">
                        <div aria-label="Home. logo" role="img">
                            <img className="w-12 md:w-auto" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/centre_aligned_simple-Svg1.svg" alt="logo" />
                        </div>
                        <div>
                            <button onClick={() => setShow(!show)} className={`${show ? 'hidden' : ''} sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500`}>
                                <svg aria-haspopup="true" aria-label="open Main Menu" xmlns="http://www.w3.org/2000/svg" className="md:hidden icon icon-tabler icon-tabler-menu" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={4} y1={8} x2={20} y2={8} />
                                    <line x1={4} y1={16} x2={20} y2={16} />
                                </svg>
                            </button>
                            <div id="menu" className={` ${show ? '' : 'hidden'} md:block lg:block `}>
                                <button onClick={() => setShow(!show)} className={`block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6`}>
                                    <svg aria-label="close main menu" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </button>
                                <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
                                    <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0">
                                        <a href="javascript: void(0)">Product</a>
                                    </li>
                                    <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                        <a href="javascript: void(0)">Pricing</a>
                                    </li>
                                    <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                        <a href="javascript: void(0)">Company</a>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        <div>
                        <button className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2  focus:ring-indigo-700 hidden md:block bg-transparent text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">Login</button>
                        <button className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">Try for free</button>
                        </div>
                        
                    </div>
                </nav>
                <div className="bg-gray-100">
                <div> <h1 className="font-medium text-3xl">icon</h1> </div>
                    <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                    
                        <div className="w-11/12 sm:w-2/3 lg:flex text-align-center justify-center items-center flex-col  mb-5 sm:mb-10">
                            <span className="text-6xl font-semibold ">
                                Your Ultimate All-in-one <br />
                                 solution for job Seekers!
                            </span>
                            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">It is a long established fact that a reader will be <span>distracted by</span> the readable <span>content of a page</span> when looking atleast layout </p>
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">Get Started</button>
                        </div>
                    </div>
                <div> <h1 className="font-medium text-3xl">icon</h1> </div>
                </div>
            </dh-component>

            <div className="flex justify-center">
                <img src="https://i.ibb.co/JnFFMHz/e8eb4519-1567-4828-80fe-d723771185e8.png" alt="Description" className="w-4/5 mx-auto rounded-3xl" />
            </div>


            <div>
                <Services />
            </div>

            <div className="display-flex text-align-center justify-center">
                <h2 className="font-bold">1,15,000+</h2>
                <p>People from more then <span>100</span> countries </p>
            </div>


            <div className="flex mt-7">
<div class="w-full flex items-center justify-around">
  <div class="w-1/2 flex items-center justify-around">
    <img src="https://i.ibb.co/JnFFMHz/e8eb4519-1567-4828-80fe-d723771185e8.png" alt="Description" class="w-4/5 mx-auto rounded-3xl" />
  </div>
</div>
    <div className="w-1/2">
            <h2 className="text-3xl font-bold">Title</h2>
            <span>something about this section </span>
            <ul>
                <li>caption</li>
                <li>caption</li>
                <li>caption</li>
                <li>caption</li>
            </ul>
            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">Learn more</button>
    </div>
</div>

        </div>

    );
}

export default hero;
