import React from 'react'
import Image from 'next/image'
import landingImg from '../../../public/landingimg.jpg';
import Typewriter from "typewriter-effect";
import Link from 'next/link';
import { aboutme } from '@/app/data';


const AboutUs = () => {
  return (
    <div className='flex justify-between flex-col-reverse items-center md:flex-row flex-wrap md:w-[80%] md:mt-[30px] mx-auto '>
      <div className='w-full md:w-[70%] md:p-[30px] p-[10px] my-[5px]'>
        <h1 className='leading-[40px] text-secondary-900 text-[34px] font-bold capitalize'>Welcome to <span className='text-indigo-700'>Technical krish</span>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("web developer")
                .pauseFor(10)
                .deleteAll()
                .typeString("App developer")
                .pauseFor(10)
                .deleteAll()
                .typeString("Video Editor")
                .pauseFor(10)
                .deleteAll()
                .typeString("Freelancer")
                .pauseFor(10)
                .deleteAll()
                .start();
            }}
          />

        </h1>
        <p className='text-secondary-600 mb-[20px]'>
          {aboutme}
        </p>
        <div className='mt-[50px]'>
        <Link href="videos" className=' py-2 px-5 rounded shadow border border-secondary-200 text-secondary-700 hover:bg-indigo-600 cursor-pointer transition-all duration-100 hover:text-white'>Explore More</Link>
        <Link href="HelpCenter" className=' py-2 px-5 border-indigo-700 rounded shadow-3xl text-base-white ml-2 bg-base-black'>Help Center</Link>
        </div>
      </div>

      <div className='w-full w-[100%] md:w-[30%]'>
        <img src="https://st4.depositphotos.com/1643295/21615/i/450/depositphotos_216150522-stock-photo-unrecognizable-programmer-man-typing-keyboard.jpg" className='object-cover w-full md:h-[380px] bg-opacity-100 h-[200px] md:p-0 md:-skew-x-12 z-0' alt='image loading' />
      </div>
    </div>
  )
}

export default AboutUs