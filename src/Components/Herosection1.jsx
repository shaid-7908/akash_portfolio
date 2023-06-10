import React from 'react'
import HeroImg from '../assets/Herosection1.jpg'
import { faHand } from '@fortawesome/free-solid-svg-icons'
export default function Herosection1() {
  return (
    <div className='w-screen h-[80%] flex flex-col md:h-[70%]  md:flex-row '>
        <div className=' flex-1 text-5xl p-2 font-extrabold text-left flex flex-col justify-center text-indigo-900 animate-slideinL'>
            <div className='flex  items-center'><p className='mt-3'>Hi</p><span class="animate-wavinghand">👋🏻</span></div>
            <p className='mt-3'>I am Sparki</p>
            <div className='mt-3 h-[45px] overflow-hidden  flex'>A 
            <div className='flex flex-col animate-textupdown ml-4 text-[#f24795] '>
            <div className='mt-2'> web developer</div>
            <div className='mt-2'> web designer</div>
            <div className='mt-2 text-[2.8rem]'> Digital marketer</div>
            </div>
            </div>
            <div className='border-solid border-2 text-2xl mt-4 max-w-fit p-2 bg-amber-200 md:hover:bg-white duration-500 shadow-lg'>Get in Touch</div>
        </div>
        <div className=' flex-1 flex justify-center items-center'>
           <div className=' rounded-[1rem] overflow-hidden animate-slideinR'>
            <img src={HeroImg} alt="na" />
           </div>
        </div>
    </div>
  )
}
