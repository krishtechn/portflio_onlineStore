"use client"
import React from 'react'
import { PhoneCall } from 'lucide-react';
import { Mail } from 'lucide-react';
import SocialMedia from './socialMedia';

const HelpcenterCards = (props?: any) => {
    return (
        <div className='rounded-lg relative bg-base-white border border-[1px] border-secondary-200 rounded-md w-full md:flex'>
            {props.data.map((items?: any) => {
                return <div className='w-full my-[10px] p-[19px] gap-6'>
                    <div className='flex justify-start w-full items-center'>
                        {items.title == "Call Us" ? 
                        <PhoneCall color='#667085' width={"16.72px"} height={"16.8px"} />:items.title == "Email Us" ? 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.67px" height="16.67px" viewBox="0 0 24 24" fill="none" stroke="currentColor" color='#667085' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>:
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.67px" height="16.67px" viewBox="0 0 24 24" fill="none" stroke="currentColor" color='#667085' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                        }
                    
                    <h1 className='text-md-r text-secondary-500 ml-[10px] text-[16px]'>{items.title}</h1>
                    </div>
                    <a href={items.link} className='text-primary-700'>{items.desc}</a>
                    <div className='border border-[1px] border-secondary-200 mt-[30px] md:border-none'></div>
                </div>
            })}

            <div className='flex justify-center items-center w-full mb-[10px]'>
                <SocialMedia />
            </div>
        </div>
    )
}

export default HelpcenterCards