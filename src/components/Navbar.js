import React,{useState} from 'react'
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube } from "react-icons/fa";


function Navbar() {
    const [nav, setNav] = useState(false)

    function handleNav (){
        setNav(!nav)
    }
    return (
        <div className='flex justify-between h-20 px-4 items-center' >
            <div>
                <h1 className='font-roboto '> {nav? '':'BEACHES'} </h1>
            </div>
            <ul className='hidden md:flex  '>
                <li className='nav-item'>Home</li>
                <li className='nav-item'>Destinations</li>
                <li className='nav-item'>Travel</li>
                <li className='nav-item'>View</li>
                <li className='nav-item'>Book</li>
            </ul>
            <div className='hidden md:flex'>
                <CiUser className='mr-2'  size={20}/>
                <CiSearch  size={20}/>
            </div>
            <div className='md:hidden z-10 cursor-pointer'  onClick={handleNav}>
                {nav ?  <IoCloseSharp size={20} />: <IoMenu size={20}/>}
                
               
            </div>

            <div  className= {nav ?  'absolute left-0 top-0 bg-gray-100/90 w-full px-4 py-7 flex flex-col md:hidden' : 'absolute left-[100%] '}>
            <ul>
                <h1 >BEACHES</h1>
                <li className='border-b'>Home</li>
                <li className='border-b'>Destinations</li>
                <li className='border-b'>Travel</li>
                <li className='border-b'>View</li>
                <li className='border-b'>Book</li>
                <div className='flex flex-col'>
                    <button className='my-6'>
                        Search
                    </button>

                    <button>
                        Account
                    </button>
                </div>

                <div className='flex my-6 justify-between'>
                    <FaFacebook className='icon'/>
                    <FaTwitter className='icon'/>
                    <FaInstagram className='icon'/>
                    <FaPinterest className='icon'/>
                    <FaYoutube className='icon'/>
                </div>
            </ul>
            </div>


        </div>
    )
}

export default Navbar