import React from 'react'
import Gallery from './Gallery';
import TopComponents from '../HelpCenter/topComponents';
import {Myproject, Videodata} from '../../data';

const videos = () => {
  return (
    <div className='w-full flex flex-col p-[10px]'>
        <TopComponents title="My Latest Project" subtitle="My Recent Project for my clients"/>
    <div className='w-full flex flex-col items-center'>
        {/* <h1 className='text-[16px] font-bold text-[#000] text-center gap-[2px] tracking-wider uppercase my-[10px]'>Technical krish</h1> */}
        <div className='md:w-full w-full md:px-[20px] flex md:flex-row flex-col items-center'>
        <Gallery data={Myproject}/>
        </div>
    </div>
    </div>
  )
}

export default videos