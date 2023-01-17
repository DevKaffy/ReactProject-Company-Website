import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const PageLayout = ({ children, className}) => {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden ">
      <Navbar className={`${className}`} />
      <main className="flex-grow overflow-auto">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default PageLayout
