import React from 'react'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

const Trailer = () => {
    const {pathname}= useLocation()
    const navigate= useNavigate()
    const category = pathname.includes("movie") ? "movie" : "tv";
    const ytvideo = useSelector((state) => state[category]?.info?.video);
    if (!ytvideo) {
        return (
            <div className='h-screen w-screen flex items-center justify-center bg-[rgba(0,0,0,.5)]'>
                <p className='text-white'>No trailer available.</p>
            </div>
        );
    }
  return (
    <div  className='h-full w-screen  flex  items-start py-[5%] absolute z-40 top-0 left-0  justify-center  bg-[rgba(0,0,0,.8)]' >
         <IoMdCloseCircleOutline onClick={()=> navigate(-1) } className='hover:text-custompurple duration-100 text-zinc-200 text-4xl absolute z-50 top-10 right-28    cursor-pointer' />
           <ReactPlayer controls={true} height={600} width={1000} url={`https://www.youtube.com/watch?v=${ytvideo.key}`} /> 
           
    </div>
  )
}

export default Trailer