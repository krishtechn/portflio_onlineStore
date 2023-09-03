import React from 'react'
import HelpcenterCards from '../Components/HelpCenter/HelpcenterCards'
import TopComponents from '../Components/HelpCenter/topComponents'
import Navbar from '../Components/Navbar/Navbar'
import { Mydata } from '../data'

const helpcenter = () => {
    
    return (
        <div className='bg-secondary-100 h-screen flex w-full flex-col'>
            <Navbar />

            <TopComponents title="help center" subtitle="Guidance and Support: Answers to Your Questions" />

         

        </div>
    )
}

export default helpcenter