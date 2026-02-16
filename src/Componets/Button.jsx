import React, { children } from 'react'

const Button = ({ children }) => {
    return (
        <div className='flex items-center justify-center py-3.75 px-8.75'>
            {children}
        </div>
    )
}

export default Button
