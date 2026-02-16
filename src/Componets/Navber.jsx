import React from 'react'
import Container from './Container'
import Flex from './Flex'
import list from '../assets/list.png'
import ln from '../assets/ln.png'
import git from '../assets/git.png'
import facebook from '../assets/facebook.png'
import b from '../assets/b.png'
import Button from './Button'


const Navber = () => {
    return (
        <nav className='bg-[#050709] py-8.25 px-16.25'>
            <Container>
                <Flex className='justify-between  items-center'>
                    <div>
                        <img src={list} alt="" />
                    </div>
                    <ul className='flex text-gray-400 gap-8.75 navLi '>
                        <li>Works</li>
                        <li>Resume</li>
                        <li>Skills</li>
                        <li>Testimonials</li>
                        <li>Contact</li>
                    </ul>
                    <div className='flex items-center gap-6.25'>
                        <Flex>
                            <img src={facebook} alt="" className='w-7.75 h-7.75' />
                            <img src={ln} alt="" className='w-7.75 h-7.75' />
                            <img src={git} alt="" className='w-7.75 h-7.75' />
                            <img src={b} alt="" className='w-7.75 h-7.75' />
                        </Flex>
                        <Button className='text-white'>Lets Talk</Button>
                    </div>
                </Flex>
            </Container>
        </nav>
    )
}

export default Navber
