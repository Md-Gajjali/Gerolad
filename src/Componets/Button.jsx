import React, { children } from 'react'

const Button = ({ children ,className}) => {
    return (
        <div className={`${className} flex items-center justify-center py-3.75 px-8.75 bg-linear-to-r from-[#8750F7] via-[#2A1454] to-[#8750F7] rounded-4xl`}>
            {children}
        </div>
    )
}

export default Button
