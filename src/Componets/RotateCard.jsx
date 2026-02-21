import React from 'react'
import Flex from './Flex'

const RotateCard = () => {
    return (
        <div>
            <div className='w-full bg-primary mt-50 z-100! text-white  py-7  px-10 rotate-3'>
                <Flex className='justify-between'>
                    <span>Graphic </span>
                    <span>Design</span>
                    <span>Motion</span>
                    <span>Development</span>
                    <span>Design</span>
                    <span>Webflow</span>
                    <span>Graphic </span>
                </Flex>
            </div>
            <span className='flex justify-center   
                 ml-100
            shadow-[0_0_200px_50px_rgba(135,80,247,0.5)] rounded-full '/>
            <div className='w-full  backdrop-blur-[2px]  bg-white/4 absolute -z-100  text-white mt-4 py-7  px-10 -rotate-3'>
                <Flex className='justify-between'>
                    <span>Graphic </span>
                    <span>Design</span>
                    <span>Motion</span>
                    <span>Development</span>
                    <span>Design</span>
                    <span></span>
                    <span></span>
                </Flex>
            </div>
        </div>
    )
}

export default RotateCard
