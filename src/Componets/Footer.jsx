import React from 'react'
import Container from './Container'
import list from '../assets/list.png'
import AllList from '../assets/AllList.png'
import Flex from './Flex'
import Footerr from '../assets/Footer.png'

const Footer = () => {
  return (
    <div className='mt-20 footer-bg  py-5'>
      <Container>
        <Flex className='justify-between mt-30 '>
          <div>
            <img src={list} alt="" />
            <p className='w-80.5 mt-5 text-gray-400'>I break down complex user the experience
              problems the create integrity focused to
              solutions that’s connect.</p>
            <img src={AllList} alt="" className='mt-5' />
          </div>
          <div >
            <h2 className='text-white font-semibold text-[20px] uppercase '>Legal Details</h2>
            <ul className='text-gray-400 mt-8.75'>
              <li>Policy Privacy</li>
              <li>Term & Conditions</li>
              <li>Refund and Cancellation</li>
              <li>Refund and Cancellation</li>
            </ul>
          </div>
          <div>
            <h2 className='text-white font-semibold text-[20px] uppercase'>Contact</h2>
            <ul className='text-gray-400 mt-8.75'>
              <li>hello-designer@gerold.com</li>
              <li>+01 123 654 8096</li>
              <li>+01 123 654 8096</li>
            </ul>
          </div>
          <div >
            <h2 className='text-white font-semibold text-[20px] uppercase w-47'>Subscribe to My
              Newsletter!</h2>
            <input type="text" className='w-59.25 h-14.25 rounded-full mt-5 bg-white' />
          </div>
        </Flex>
        <div className='text-white uppercase flex justify-between items-center mt-20'>
          <h3>AVAILABLE FOR FREELANCE</h3>
          <ul className='flex gap-8'>
            <li>Work</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <p>©All rights reserved by</p>
        </div>
      </Container>
    </div>
  )
}

export default Footer
