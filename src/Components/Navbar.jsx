import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [menuState,setMenustate]=useState(false)
  const handleClick=()=>{
    setMenustate(!menuState)
  }
  return (
    <>
    <div className='flex justify-between items-center bg-heroColor relative md:flex-row ' style={{
      backgroundColor:'#c4f2fb'
    }} >
        <div className=' text-center md:flex-1 md:text-left  '>
            <h1 className='font-bold text-3xl md:ml-10'>.S</h1>
        </div>
        <div className='p-2  text-3xl text-indigo-900 md:hidden' onClick={handleClick}>
        {menuState ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}  
        </div>
         {/*Mobile Menue*/}
         
        {/*Mid menue */}
        <div className='hidden md:flex-1 md:block '>
            <ul className='flex group text-black-500 transition-all duration-300 ease-in-out md:justify-around'>
                <li className='bg-left-bottom bg-gradient-to-r from-indigo-600 to-indigo-600 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out font-medium hover:text-slate-500'>Home</li>
                <li className='bg-left-bottom bg-gradient-to-r from-indigo-600 to-indigo-600 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out font-medium hover:text-slate-500'>About</li>
                <li className='bg-left-bottom bg-gradient-to-r from-indigo-600 to-indigo-600 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out font-medium hover:text-slate-500'>Project</li>
                <li className='bg-left-bottom bg-gradient-to-r from-indigo-600 to-indigo-600 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out font-medium hover:text-slate-500'>Services</li>
                <li className='bg-left-bottom bg-gradient-to-r from-indigo-600 to-indigo-600 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out font-medium hover:text-slate-500'>Get in touch</li>
            </ul>
        </div>
        <div className='hidden md:flex-1 md:block'></div>
    </div>

    <div className={`relative `}>
    <div className={`absolute bg-slate-900 rounded-lg z-40  block ease-in-out duration-1000 ${menuState ? 'translate-x-[30%]':'translate-x-[130%]'} `} style={{
          width:'80vw',
          height:'50vh'
         }}>
         <ul className='flex flex-col group italic text-white text-2xl transition-all duration-300 ease-in-out md:justify-around'>
                <li className={`p-5  bg-left-bottom bg-gradient-to-r from-indigo-600 to-indigo-600 bg-[length:0%_2px] bg-no-repeat   duration-100 ease-in-out font-medium hover:text-slate-500  ${menuState ? 'translate-x-0':'translate-x-16'}`}>Home</li>
                
                <li className={`p-5  bg-left-bottom bg-gradient-to-r from-indigo-600 to-indigo-600 bg-[length:0%_2px] bg-no-repeat   duration-300 ease-in-out font-medium hover:text-slate-500  ${menuState ? 'translate-x-0':'translate-x-16'}`}>About</li>
                
                <li className={`p-5  bg-left-bottom bg-gradient-to-r from-indigo-600 to-indigo-600 bg-[length:0%_2px] bg-no-repeat   duration-500 ease-in-out font-medium hover:text-slate-500  ${menuState ? 'translate-x-0':'translate-x-16'}`}>Project</li>
                
                <li className={`p-5  bg-left-bottom bg-gradient-to-r from-indigo-600 to-indigo-600 bg-[length:0%_2px] bg-no-repeat   duration-700 ease-in-out font-medium hover:text-slate-500  ${menuState ? 'translate-x-0':'translate-x-16'}`}>Services</li>
                
                <li className={`p-5  bg-left-bottom bg-gradient-to-r from-indigo-600 to-indigo-600 bg-[length:0%_2px] bg-no-repeat   duration-1000 ease-in-out font-medium hover:text-slate-500  ${menuState ? 'translate-x-0':'translate-x-16'}`}>Get in touch</li>
                           
            </ul>
         </div>
    </div>
   
    </>
  )
}
