import React from 'react'
import Flex from './Flex'
import Man from '../assets/Man2.png'
import Container from './Container'
import Button from '../Componets/Button'
import { MdOutlineArrowOutward } from "react-icons/md";



const Passionate = () => {
    return (
        <div className='bg-black mt-40'>
            <Container>
                <Flex className='justify-between py-30 '>
                    <div className='w-[45%]'>
                        <img src={Man} alt=""  className='w-lg'/>
                    </div>
                    <div className='w-[50%]'>
                        <p className='text-primary'>Behind the Pixels</p>
                        <h2 className='font-semibold text-[54px]'>
                            <span className='bg-linear-to-r from-white via-gray-600 to-gray-600 bg-clip-text text-transparent'>Passionate On Digital</span><br />
                            <span className='bg-linear-to-r from-white via-gray-600 to-gray-600 bg-clip-text text-transparent'>Marketer Focused on</span> <br />
                            <span className='bg-linear-to-r from-white via-gray-600 to-gray-600 bg-clip-text text-transparent'>Driving Results.</span></h2>
                        <p className='w-140 text-justify text-gray-400'>This encompasses a variety of strategies, including search
                            engine optimization (SEO), content marketing, social media
                            marketing, email marketing,.</p>
                        <Flex className=' w-140.75 mt-8 justify-between bg-[#8850f72c] shadow py-6 px-5 rounded-sm'>
                            <div className='border-r-2 border-gray-800  '>
                                <h3 className='text-primary  text-6xl font-bold  '>30+</h3>
                                <p className='w-22.5 text-center text-gray-500 mr-10'>Years of Experience</p>
                            </div>
                            <div className='border-r-2 border-gray-800 '>
                                <h3 className='text-primary  text-6xl font-bold '>100+</h3>
                                <p className='w-22.5 text-center text-gray-500 mr-20'>Project
                                    Completed</p>
                            </div>
                            <div>
                                <h3 className='text-primary  text-6xl font-bold '>300+</h3>
                                <p className='w-22.5 text-center text-gray-500'>Successful
                                    Project</p>
                            </div>
                        </Flex>
                        <Button className='w-44.75 mt-9 text-white'>Learn more <MdOutlineArrowOutward /></Button>
                        
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Passionate
