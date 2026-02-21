import React from 'react'
import Container from './Container'
import Flex from './Flex'
import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'

const Achievements = () => {
    return (
        <div className='mt-50 bg-[#140C1C] py-10'>
            <Container>
                <div className=' m-auto justify-center items-center text-center '>
                    <p className='text-primary '>Behind the Pixels</p>
                    <h2 className='text-[45px] m-auto font-semibold text-white  '><span className='bg-linear-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent uppercase'>MY Background and</span>  <br />
                        <span className='bg-linear-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent uppercase'>Achievements</span>
                    </h2>
                </div>
                <div className='common flex h-13 justify-center gap-12 items-center m-auto mb-10 px-2 py-4  rounded-2xl mt-10 w-97.5 bg-primary text-white '>
                    <p className='hover:bg-black py-2 px-3 rounded-[10px]'>Experiences</p>
                    <p className='hover:bg-black py-2 px-3 rounded-[10px]'>Education</p>
                    <p className='hover:bg-black py-2 px-2 rounded-[10px]'>Awards</p>
                </div>
                <div className='w-full bg-black py-15.5 px-15.5 border-gray-700 border-2 rounded-2xl mt-10'>
                    <Flex className='justify-between'>
                        <img src={work1} alt="" className='w-14.75 h-14.75' />
                        <div>
                            <h2 className='text-white font-normal text-[20px] uppercase'>Senior Product Designer</h2>
                            <p className='mt-3.75 font-normal text-[18px] text-gray-500'>Semiflat Studio</p>
                            <p className='text-gray-500 font-normal text-[18px] mt-4.75'>I'm winner of the world's most prestigious web designthat has more-
                                or-less normal awards in the fields.</p>
                        </div>
                        <p className='text-primary'>21/02/2026</p>
                    </Flex>
                        <div  className='border-b-3 border-gray-800 mt-10 ' />
                    <Flex className='justify-between mt-20'>
                        <img src={work2} alt="" className='w-14.75 h-14.75' />
                        <div>
                            <h2 className='text-white font-normal text-[20px] uppercase'>Senior User Interface Designer</h2>
                            <p className='mt-3.75 font-normal text-[18px] text-gray-500'>Autentika</p>
                            <p className='text-gray-500 font-normal text-[18px] mt-4.75'>I'm winner of the world's most prestigious web designthat has more-
                                or-less normal awards in the fields.</p>
                        </div>
                        <p className='text-primary'>21/02/2026</p>
                    </Flex>
                    <div  className='border-b-3 border-gray-800 mt-10 ' />
                    <Flex className='justify-between mt-20'>
                        <img src={work3} alt="" className='w-14.75 h-14.75' />
                        <div>
                            <h2 className='text-white font-normal text-[20px] uppercase'>Senior Product Designer</h2>
                            <p className='mt-3.75 font-normal text-[18px] text-gray-500'>VirtusLab</p>
                            <p className='text-gray-500 font-normal text-[18px] mt-4.75'>I'm winner of the world's most prestigious web designthat has more-
                                or-less normal awards in the fields.</p>
                        </div>
                        <p className='text-primary'>21/02/2026</p>
                    </Flex>
                </div>
            </Container>
        </div>
    )
}

export default Achievements
