import React from 'react'

const Dots = () => {
  return (
    <div className='flex justify-between items-center mt-[35px] flex-row'>
    <div className='w-[32px] h-[32px] bg-secondary-100 rounded-full absolute left-[-12px]'></div>
    <div className='w-full border border-dashed border-[1px] border-[#eef0eb] mx-2'></div>
    <div className='w-[32px] h-[32px] bg-secondary-100 rounded-full absolute right-[-12px]'></div>
    </div>
  )
}

export default Dots