import Footer from '@/app/components/footer'
import Navbar from '@/app/components/navbar'
import Grid from '@/app/components/table'
import React from 'react'

function TimeTable() {
  return (
    <div className='bg-sky-100'>
        <Navbar/>
        <Grid/>
        <Footer/>
    </div>
  )
}

export default TimeTable