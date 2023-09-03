"use client"
import React, { useState } from 'react'
import Navlinks from '..'
import Link from 'next/link'
import NavbarItems from './NavbarItems'
import { MenuIcon } from 'lucide-react'

const Navbar = () => {
  let [show,setshow] = useState("");

  const showNav = ()=>{
    return show !== ""?setshow(""):setshow("navbar");
  }

  return (
    <div className='flex justify-between  items-center w-full h-[70px] p-[10px] shadow sticky top-0 bg-base-white'>
     <div>
      <Link href="/" className='font-semibold text-[14px] md:text-[20px]'>Technical k<span className='text-error-600'>ris</span>h</Link>
     </div>

     <div>
      <NavbarItems items={Navlinks}/>
     </div>

     <div className='flex items-center'>
      <button className='bg-base-black py-2 px-2 md:py-3 md:px-3 text-base-white mr-2 text-[10px] md:text-[14px] rounded shadow'>Contact Us</button>
      <MenuIcon className="md:hidden sm:hidden cursor-pointer border border-secondary-600 w-[40px] h-[32px] p-[5px]" onClick={()=>showNav()}/>
     </div>
    </div>
  )
}

export default Navbar