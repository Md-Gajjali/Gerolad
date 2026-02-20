import React from 'react'
import Container from './Container'
import link from '../assets/link.png'
import man from '../assets/man.png'
import Top from '../assets/Top.png'
import right from '../assets/right.png'


const Banner = () => {
    return (
        <div>
            <Container>
                <div className='flex justify-center items-center gap-12.75'>
                    <h2 className='font-sora font-semibold text-[180px] text-white'>Hello</h2>
                    <img src={link} alt="" />
                    <h2 className='font-sora font-semibold text-[180px] text-white'>Motion</h2>
                </div>
                <div className='flex justify-center  mt-14 gap-40 '>
                    <div>
                        <img src={man} alt="" className='w-150 block  ' />
                    </div>
                    <div className='w-77.5 -mr-65'>
                        <p className='text-gray-400 mt-39.5 leading-6 border-b-2 py-3 border-gray-800'>My role as a amplify tha story through
                            my careful <span className='text-white'>[Video Editor]</span> selection of
                            footages, pacing, and visual style. My
                            keen attention to detail allows me to
                            enhance the mood.</p>
                        <div className='relative'>
                            <h2 className='font-sora font-bold text-[110px] text-white'>12+</h2>
                            <p className='text-gray-400 text-end -mt-10 border-b-2 py-3 border-gray-800'>Years of Experience</p>
                            <img src={Top} alt="" className='absolute -right-40 top-20 cursor-pointer' />
                            <img src={right} alt="" className='mt-8.75'/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner
