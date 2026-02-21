import React from 'react'
import Container from './Container'
import Button from './Button'
import Flex from './Flex'
import smail from '../assets/smail.png'
import { IoStarSharp } from "react-icons/io5";

const Contact = () => {
    return (
        <div className='bg-[#140C1C]'>
            <Container>
                <Flex className='justify-between py-20'>
                    <div>
                        <p className='text-primary'>Clients feedback</p>
                        <h2 className='text-[45px] m-auto font-semibold text-white  '><span className='bg-linear-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent uppercase'>Let’s Hear From</span>  <br />
                            <span className='bg-linear-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent uppercase'>Dear Clients.</span>
                        </h2>
                        <Button className='text-white w-45.75 mt-9.75 '>Contact me </Button>
                    </div>
                    <div className='w-196.25 mt-30 py-7.5 px-6 border-primary border-2 rounded-2xl'>
                        <Flex className='items-center justify-between'>
                            <div className='flex items-center'>
                                <img src={smail} alt="" />
                                <div>
                                    <h4 className='text-white'>Tim Bailey</h4>
                                    <p className='text-gray-400'>SEO Specialist, Theme Junction</p>
                                </div>
                            </div>
                            <p className='flex'>
                                <IoStarSharp className='text-primary'/>
                                <IoStarSharp className='text-primary'/>
                                <IoStarSharp className='text-primary'/>
                                <IoStarSharp className='text-primary'/>
                            </p>
                        </Flex>
                        <p className='text-gray-500 mt-6.75'>“Taylor is a professional Designer really helps my business by providing
                        value to my business. Taylor is a professional Designer he really helps my
                        business by providing value to my business. Taylor is a professional.
                        Helps business providing value to my business. professional Designer he
                        really helps my business</p>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Contact
