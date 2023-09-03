import React from 'react'
import Video from './video';
import TopComponents from '../HelpCenter/topComponents';
import {Videodata} from '../../data';

const videos = () => {
  return (
    <div className='w-full flex flex-col p-[10px]'>
        <TopComponents title="Technical Krish" subtitle="Learn Android development, Web development basic to advance with project"/>
    <div className='w-full flex flex-col items-center'>
        {/* <h1 className='text-[16px] font-bold text-[#000] text-center gap-[2px] tracking-wider uppercase my-[10px]'>Technical krish</h1> */}
        <div className='md:w-full w-[357px] md:px-[20px] flex flex-wrap items-center'>
        <Video data={Videodata}/>
        </div>
    </div>
    </div>
  )
}

export default videos