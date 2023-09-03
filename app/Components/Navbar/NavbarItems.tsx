import React from 'react'
import Link from 'next/link'

const NavbarItems = (props?:any) => {
  console.log(props);
  return (
    <>
        {props.items.map((items?:any,index?:Number)=><Link href={items.link} key={index?null:""} className='mx-1 text-sm md:text-[13px] text-secondary-600 active:text-primary-800'>{items.name}</Link>)}
    </>
  )
}

export default NavbarItems