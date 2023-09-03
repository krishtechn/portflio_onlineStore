import React from 'react'

const TopComponents = (props?:any) => {
  const {title,subtitle} = props;
  return (
 <div className='my-[30px] p-[10px]'>
        <h1 className='text-sm-sb text-secondary-900 text-[30px] capitalize'>{title}</h1>
        <div className='h-[2px] bg-primary-700 w-[100px] mt-[10px]'></div>
        <p className='text-secondary-400 text-md-r mt-[10px]'>{subtitle}</p>
         
 </div>
  )
}

export default TopComponents