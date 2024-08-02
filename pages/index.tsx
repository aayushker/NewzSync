import React from 'react'
import "@/app/globals.css"
import NavBar from '@/app/components/NavBar'
import News from '@/app/components/News'

const index = () => {
  return (
    <main>
        <NavBar />
        <div className='px-12'>
           <News /> 
        </div>
        
    </main>
  )
}

export default index
