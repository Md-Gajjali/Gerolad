import React from 'react'
import Container from './Container'
import Flex from './Flex'
import ClinetCard from './ClinetCard'
import lap from '../assets/lap.png'
import man from '../assets/ManWork.png'
import laedy from '../assets/LeadyWork.png'

const Blog = () => {
    return (
        <div className='bg-[#140C1C] py-20'>
            <Container>
                <div className='mt-10    text-center'>
                    <p className='text-primary'>Behind the Pixels</p>
                    <h2 className='text-[45px] m-auto font-semibold   bg-linear-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent uppercase'>Read My Recent Blog
                    </h2>
                </div>
                <Flex className='justify-between mt-20'>
                    <div className='w-102.5 rounded-2xl bg-black px-5 py-7 '>
                        <img src={lap} alt="" />
                        <p className='text-gray-500 mt-5'>business
                            Nov 01, 2025</p>
                        <h2 className='text-white mt-4 font-normal text-[20px]'>The Role of Technology
                            in Modern Log</h2>
                    </div>
                    <div className='w-102.5 rounded-2xl bg-black px-5 py-7 '>
                        <img src={man} alt="" />
                        <p className='text-gray-500 mt-5'>business
                            Nov 01, 2025</p>
                        <h2 className='text-white mt-5 font-normal text-[20px]'>The Role of Technology
                            in Modern Log</h2>
                    </div>
                    <div className='w-102.5 rounded-2xl bg-black px-5 py-7 '>
                        <img src={laedy} alt="" />
                        <p className='text-gray-500 mt-5'>business
                            Nov 01, 2025</p>
                        <h2 className='text-white mt-5 font-normal text-[20px]'>Digital Marketo to
                            Their New Office.</h2>
                    </div>

                </Flex>
            </Container>
        </div>
    )
}

export default Blog
