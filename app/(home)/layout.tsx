import React from 'react'
// import {Topbar} from '../components/Topbar.jsx'
// import {Topbar} from '../components/Topbar'
import Topbar from '../components/Topbar'

const HomeLayout= ({children} : {children: React.ReactNode }) => {
  return (
    <>
    <Topbar />
    {children}
    </>
  )
}

export default HomeLayout