import React from 'react'

const Video = (props?: any) => {
    return (
        <>
        {props.data.map((items?:any,index?:number)=><div className='md:w-[33%] w-[172px] my-[15px] shadow-2xl p-[10px]'>
            <iframe className='rounded-[5px] object-contain w-full md:h-[220px] h-[200px]' src={items.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <p className='text-[12px] font-400 text-[#98a2b3] gap-[2px] tracking-wider uppercase my-[10px] md:px-[30px]'>{items.title}</p>
            <p className='text-[16px] font-bold text-[#101828] gap-[2px] line-clamp-2 md:px-[30px]'>{items.subtitle}</p>
        </div>)}
        </>
    )
}

export default Video