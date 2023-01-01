import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const PageLayout = ({children}) => {

  return (
    <div className='flex flex-col w-screen h-screen '>
    <Navbar />
    <main className='flex-grow'>
      {children}
    </main>
    <Footer />
    </div>

  )
}

export default PageLayout
