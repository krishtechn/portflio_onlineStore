import React from 'react'
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';

const socialMedia = () => {
  return (
    <div>
        <h1 className='text-sm-r text-center text-blue-800 text-bold'>Social Media Links</h1>
        <div className='flex justify-center items-center flex-row mt-[10px] m-[10px]'>
            <div className='bg-secondary-600 p-[7px] rounded-full mr-[10px]'>
            <Facebook color='#fff'/>
            </div>

            <div className='bg-secondary-600 p-[7px] rounded-full ml-[10px]'>
             <Instagram color='#fff'/>
            </div>
        </div>
    </div>
  )
}

export default socialMedia