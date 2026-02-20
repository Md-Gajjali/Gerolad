import { useState } from 'react'
import './App.css'
import Navber from './Componets/Navber'
import Banner from './Componets/Banner'
import Marquee from './Componets/Marquee'
import RecentWork from './Componets/RecentWork'
import Passionate from './Componets/Passionate'

function App() {

  return (
    <>
      <Navber />
      <Banner />
      <Marquee />
      <RecentWork />
      <Passionate />
    </>
  )
}

export default App
