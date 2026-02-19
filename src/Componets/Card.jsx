import React from 'react'
import Flex from './Flex'

const Card = ({img ,heading,p,lenght}) => {
    return (
        <div className='w-76 py-11.75 px-7.5 bg-black rounded-2xl'>
            <Flex className='gap-4.75 items-center'>
                <img src={img} alt="" />
                <h3 className='text-white font-sora font-normal '>{heading}</h3>
            </Flex>
            <p className='mt-4 text-gray-600'>{p}</p>
            <div>
                <span className="text-white float-right mb-2">{lenght}</span>
                <div className="w-full h-1.5  bg-[#1a1a1a] rounded-full overflow-hidden">
                    <div className="h-full w-[92%] bg-white rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

export default Card
