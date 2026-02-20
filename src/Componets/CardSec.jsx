import React from 'react'

const CardSec = ({img,heading,title}) => {
  return (
    <div className='w-102.5 py-7.5 px-7.5 bg-gray-950 shadow'>
      <img src={img} alt="" />
      <h2 className='text-white font-semibold text-4xl mt-10'>{heading}</h2>
      <p className='mt-4 text-gray-600'>{title}</p>
      <ul className='mt-5.5 leading-12 text-white'>
        <li>.UI/UX Design</li>
        <li>.Research</li>
        <li> .Mobile & Web App</li>
      </ul>
    </div>
  )
}

export default CardSec
