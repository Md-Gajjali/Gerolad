import React from 'react'
import Container from './Container'
import ClinetCard from './ClinetCard'
import li from '../assets/li.png'
import Lin from '../assets/Lin.png'
import ph from '../assets/ph.png'
import Flex from './Flex'

const ClientWork = () => {
  return (
    <div>
      <Container>
        <div className='mt-20'>
            <p className='text-primary'>My Recent Work</p>
            <h2 className='mt-10  font-semibold text-[45px] '> <span className='bg-linear-to-r from-white via-gray-600 to-gray-600 bg-clip-text text-transparent uppercase'>Recent work for</span> <br />
            <span className='bg-linear-to-r from-white via-gray-600 to-gray-600 bg-clip-text text-transparent uppercase'>MY clients!</span></h2>
        </div>
      </Container>
      <Flex className='mt-10  gap-10 w-full justify-center  m-auto'>
        <ClinetCard 
          img={li}  
          heading='Deloitte' 
          title='Project was about precision and information...'
        />
        <ClinetCard 
          img={ph}  
          heading='New Age' 
          title='Project was about precision and information...'
        />
        <ClinetCard 
          img={Lin}  
          heading='Sebastian' 
          title='Project was about precision and information...'
        />
      </Flex>
    </div>
  )
}

export default ClientWork
