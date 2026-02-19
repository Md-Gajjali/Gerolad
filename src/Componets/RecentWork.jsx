import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Button from './Button'
import Card from './Card'
import Ae from '../assets/Ae.png'

const RecentWork = () => {
    return (
        <div className='mt-31.25'>
            <Container>
                <p className='text-[#8750F7]'>My Recent Work</p>
                <Flex className='mt-6 justify-between items-center'>
                    <h2 className="text-5xl  text-white font-sora font-semibold text-[54px] leading-20 " >
                        MY 
                        <span className="bg-linear-to-r from-white via-gray-600 to-gray-600 bg-clip-text text-transparent">
                            MASTERING VIDEO
                        </span>
                         <br />
                         <span className='bg-linear-to-r from-white via-gray-600 to-gray-600 text-transparent bg-clip-text'>
                            EDITING SKILLS

                         </span>
                    </h2>
                    <Button className='h-12.25 text-white '>Learn More</Button>
                </Flex>
                <Flex className='justify-between'>
                    <Card  
                        img={Ae} 
                        heading='Adobe After
                        Effect' p='Adobe After Effects is a
                        powerful software application
                        used motion graphics.' 
                        lenght='96'
                    />
                    <Card  
                        img={Ae} 
                        heading='Adobe After
                        Effect' p='Adobe After Effects is a
                        powerful software application
                        used motion graphics.' 
                        lenght='96'
                    />
                    <Card  
                        img={Ae} 
                        heading='Adobe After
                        Effect' p='Adobe After Effects is a
                        powerful software application
                        used motion graphics.' 
                        lenght='96'
                    />
                    <Card  
                        img={Ae} 
                        heading='Adobe After
                        Effect' p='Adobe After Effects is a
                        powerful software application
                        used motion graphics.' 
                        lenght='96'
                    />
                </Flex>
            </Container>
        </div>
    )
}

export default RecentWork
