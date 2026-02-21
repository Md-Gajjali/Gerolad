import React from 'react'
import Flex from './Flex'

const RotateCard = () => {
    return (
        <div>
            <div className='w-full bg-primary  z-100! text-white mt-20 py-7  px-10 rotate-3'>
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
            <span className='flex justify-center  -z-10   
            -w-[650px]    ml-100
            shadow-[0_0_220px_90px_rgba(135,80,247,0.5)] '/>
            <div className='w-full  backdrop-blur-[2px]  bg-white/4 absolute -z-100  text-white mt-4 py-7  px-10 -rotate-5'>
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
