import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Courses from '../components/Courses'
import About from '../components/About'
import Contact from '../components/Contact'
import {useAuth} from "../context/AuthProvider" ;


const Routing = () => {
  const [authUser,setAuthUser] = useAuth() ;

  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/courses' element={!authUser ?<Navigate to="/" />:<Courses/> }/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </>
    
  )
}

export default Routing