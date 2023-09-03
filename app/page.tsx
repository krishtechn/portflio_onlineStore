"use client"
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import AboutUs from './Components/About/AboutUs'
import PostCards from './Components/Post/PostCards'
import Videos from './Components/Videos/Videos'
import Gallerys from './Components/RecentProjects/Gallerys';
import CustomTabViews from './Components/Tabs/CustomTabs'
import Bonuss from './Components/Bonous/Bonus'

const page = () => {
  return (
    <div>

      <Navbar />

      <AboutUs />
       
      <PostCards />

      <CustomTabViews />

      
      <Gallerys />


      <div className='flex justify-center items-center w-full h-full p-[10px]'>
        <Videos />
    </div>

      <Bonuss />
    
    </div>
  )
}

export default page