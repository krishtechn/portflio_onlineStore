"use client"
import React,{useEffect, useState} from 'react'
import PostCard from '../Components/Post/PostCard';
import Navbar from '../Components/Navbar/Navbar';
import { useGetAllProductsQuery, useGetUniqueProductsQuery, useUpdateProductsMutation } from '../redux/apiServices/product';

const Products = () => {
    const [usersearch,setusersearch] = useState("");
    const { data, isLoading, isError, error } = useGetUniqueProductsQuery(usersearch==""?"electronics":usersearch);
    
  return (
    <div>
        <Navbar />
        <div className='flex justify-center items-center mt-[50px] p-[10px]'>
            <input type='text' placeholder='Search Product' onChange={(e)=>setusersearch(e.target.value)} className='py-3 px-5 shadow outline-none border-secondary-200'/>
            {/* <button className='py-3 px-5 bg-primary-600 text-base-white' onClick={()=>handleSearch()}>Search</button> */}
        </div>

        {!usersearch?
        "":<h1 className='text-md-b ml-[20px]'>Search Category - {usersearch}</h1>
      }
        
        <div className='flex flex-row flex-wrap'>
        {data ? data.map((items?:any,index?:any)=>{
          return <PostCard items={items}/>
        }):<h1 className='text-md-b ml-[20px]'>No data found</h1>}
        </div>
        
    </div>
  )
}

export default Products