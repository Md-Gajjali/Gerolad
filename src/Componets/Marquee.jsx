import React from 'react'
import Container from './Container'
import Background from '../assets/Background.png'
import Background1 from '../assets/Background(1).png'
import Background2 from '../assets/Background(2).png'
import Background3 from '../assets/Background(3).png'
import Background4 from '../assets/Background(4).png'
import Background5 from '../assets/Background(5).png'

const Marquee = () => {
    return (
        <div>
            <Container>
                <p className='uppercase text-white text-center mt-2 py-20'><span className='text-primary'>100+</span> Trusted Clients Over the world</p>
               {/* <marquee behavior="loop" direction="left"   > */}
                <div className='flex gap-20'>
                    <img src={Background} alt="" />
                    <img src={Background1} alt="" />
                    <img src={Background2} alt="" />
                    <img src={Background3} alt="" />
                    <img src={Background4} alt="" />
                    {/* <img src={Background5} alt="" /> */}
                    {/* <img src={Background} alt="" /> 
                     <img src={Background1} alt="" />
                    <img src={Background2} alt="" />
                    <img src={Background3} alt="" />
                    <img src={Background4} alt="" />
                    <img src={Background5} alt="" />
                    <img src={Background} alt="" />
                    <img src={Background1} alt="" />
                    <img src={Background2} alt="" />
                    <img src={Background3} alt="" />
                    <img src={Background4} alt="" />
                    <img src={Background5} alt="" />
                    <img src={Background} alt="" />
                    <img src={Background1} alt="" />
                    <img src={Background2} alt="" />
                    <img src={Background3} alt="" />
                    <img src={Background4} alt="" />
                    <img src={Background5} alt="" /> */}
                </div>
               {/* </marquee> */}
            </Container>
        </div>
    )
}

export default Marquee
