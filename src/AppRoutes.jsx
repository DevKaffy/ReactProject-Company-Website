import {Navigate, Route, Routes} from 'react-router-dom';
import React from 'react'

// Components
import Home from './Components/Home';
import About from './Components/About';
import Contacts from './Components/Contacts';
import Project from './Components/Project';
import Services from './Components/Services';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element= {<Navigate to='/' replace />} />
      <Route path='about' element={<About />} />
      <Route path='services' element= {<Services />} />
      <Route path='project' element={<Project />} />
      <Route path='contacts' element={<Contacts />} />
    </Routes>
  )
}

export default AppRoutes