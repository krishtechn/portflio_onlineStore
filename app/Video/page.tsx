import React from 'react'
import Videos from '../Components/Videos/Videos'
import Navbar from '../Components/Navbar/Navbar'
import CustomTabView from '../Components/Tabs/CustomTabView'
import { tabs } from '../data'

const Video = () => {
  return (
    <div>
        <Navbar />
        <div className="app p-4 bg-white ">
      <h1 className="mb-4 text-[14px] text-[#6941c6] font-600">We offers</h1>
      <CustomTabView tabs={tabs} />
    </div>
    <div className='flex justify-center items-center w-full h-full p-[10px]'>
        <Videos />
    </div>
    </div>
  )
}

export default Video