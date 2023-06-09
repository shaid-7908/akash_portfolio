import React from 'react'

export default function Navbar() {
  return (
    <>
    <div className='flex justify-center items-center bg-heroColor md:flex-row ' >
        <div className=' text-center md:flex-1 md:text-left '>
            <h1 className='font-bold text-3xl md:ml-10'>.S</h1>
        </div>
        
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
    </>
  )
}
