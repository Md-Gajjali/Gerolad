import React from 'react'
import Container from './Container'
import CardSec from './CardSec'
import com from '../assets/com.png'
import Flex from './Flex'
import ComData from '../assets/ComData.png'
import ComDe from '../assets/ComDe.png'
import Button from './Button'

const Services = () => {
  return (
    <div className='mt-20'>
      <Container>
        <div className='text-center '>
          <p className='text-primary'>My Services</p>
          <h2 className='font-semibold text-[45px] text-white'>Here's how I can help!</h2>
        </div>
        <Flex className='mt-20 justify-between'>
          <CardSec
            img={com}
            heading='Web Development'
            title='Conducting qualitative and quantitative
            research to understand user needs,
            behaviors, and pain points. Utilizing
            methods such as surveys, interviews, and
            usability testing to actionable insights.'
          />
          <CardSec
            img={ComData}
            heading='UI/UX Design'
            title='Conducting qualitative and quantitative
            research to understand user needs,
            behaviors, and pain points. Utilizing
            methods such as surveys, interviews, and
            usability testing to actionable insights.'
          />
          <CardSec
            img={ComDe}
            heading='Content Writing'
            title='Conducting qualitative and quantitative
            research to understand user needs,
            behaviors, and pain points. Utilizing
            methods such as surveys, interviews, and
            usability testing to actionable insights.'
          />
        </Flex>
        <Button className='text-white py-6.25! font-semibold text-2xl mt-10'>Let’s Contact with Me</Button>
      </Container>
    </div>
  )
}

export default Services
