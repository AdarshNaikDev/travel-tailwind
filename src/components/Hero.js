import React from 'react'
import BeachVid from "../assets/beachVid.mp4"
import { CiSearch } from "react-icons/ci";

function Hero() {
    return (
        <>
            <div className='w-full h-screen object-cover '>
                <video className='w-full h-full object-cover' src={BeachVid} autoPlay loop muted />

                <div className=' absolute w-full h-full top-0 left-0 bg-gray-900/30'> </div>
                    <div className='text-white absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center'>
                        <h1>
                            First Class Travel
                        </h1>
                        <h2 className='p-4'>
                        Top 1% Locations Worldwide
                        </h2>

                        <form className='flex border bg-gray-100/90 rounded-md w-full justify-between items-center max-w-[700px] text-black'>
                            <div>
                                <input className='focus:outline-none  sm:w-[400px] bg-transparent' placeholder='Search Destination' />
                                
                            </div>
                            <button>
                                    <CiSearch />
                                </button>
                        </form>
                    </div>
                </div>
           


        </>
    )
}

export default Hero