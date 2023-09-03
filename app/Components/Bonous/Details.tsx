"use client"
import React from 'react'

const Details = (props?:any) => {
  return (
    <div className='w-full flex justify-between flex-row h-[50px] mb-[20px] items-center'>
    <div className='w-[44px] h-[47px] flex justify-center flex-col items-center rounded-[6px] border-1 bg-primary-700 text-center'>
        <p className='text-xs-m text-base-white'>Seat</p>
        <h1 className='text-base-white text-md-sb'>A1</h1>
    </div>

    <div className='flex-1 w-full ml-5'>
        <p className='text-xs-r'>Name</p>
        <h1 className='text-md-sb'>{props.passengerdetails.name}</h1>
    </div>

    <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </div>
</div>
  )
}

export default Details