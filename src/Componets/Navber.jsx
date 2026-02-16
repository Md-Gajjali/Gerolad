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
    <nav>
        <Container>
            <Flex>
                <div>
                    <img src={list} alt="" />
                </div>
                <ul>
                    <li>Works</li>
                    <li>Resume</li>
                    <li>Skills</li>
                    <li>Testimonials</li>
                    <li>Contact</li>
                </ul>
                <div>
                    <div>

                    <img src={facebook} alt="" />
                    <img src={ln} alt="" />
                    <img src={git} alt="" />
                    <img src={b} alt="" />
                    </div>
                    <Button className='text-white'>Lets Talk</Button>
                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navber
