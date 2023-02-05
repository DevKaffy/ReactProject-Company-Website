import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useEffect } from 'react';

const PageLayout = ({ children}) => {
  console.log('right file')
  useEffect(() => {
    window.addEventListener('scroll', e => {
      console.log({ e });
    })
  }, [])
  return (
    <div className="flex flex-col w-screen h-screen overflow-y-auto overflow-x-hidden">
      <Navbar/>
      <main className="flex-grow overflow-auto">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default PageLayout
