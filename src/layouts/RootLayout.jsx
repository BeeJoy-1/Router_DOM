import React from 'react'
import Navba from './Navba'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


const RootLayout = () => {
  return (
    <>
        <Navba/>
            <Outlet/>
        <Footer/>
    </>
  )
}

export default RootLayout