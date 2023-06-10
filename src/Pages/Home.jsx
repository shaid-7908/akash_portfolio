import React from 'react'
import Navbar from '../Components/Navbar'
import Herosection1 from '../Components/Herosection1'

export default function Home() {
  return (
    <>
    <div className='overflow-hidden w-screen'>
    <Navbar/>
    <div className='bg-heroColor w-screen h-screen'>
      <Herosection1/>
    </div>
    </div>
    
    </>
  )
}
