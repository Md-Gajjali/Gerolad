import { useState } from 'react'
import './App.css'
import Navber from './Componets/Navber'
import Banner from './Componets/Banner'
import Marquee from './Componets/Marquee'
import RecentWork from './Componets/RecentWork'
import Passionate from './Componets/Passionate'
import Services from './Componets/Services'
import ClientWork from './Componets/ClientWork'
import RotateCard from './Componets/RotateCard'
import Achievements from './Componets/Achievements'
import Contact from './Componets/Contact'
import Blog from './Componets/Blog'
import Footer from './Componets/Footer'

function App() {

  return (
    <>
      <Navber />
      <Banner />
      <Marquee />
      <RecentWork />
      <Passionate />
      <Services />
      <ClientWork />
      <RotateCard />
      <Achievements />
      <Contact />
      <Blog />
      <Footer />
    </>
  )
}

export default App
