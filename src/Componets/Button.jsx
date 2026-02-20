import React, { children } from 'react'

const Button = ({ children ,className}) => {
    return (
        <div className={`${className} flex items-center justify-center py-3.75 px-8.75 bg-linear-to-r from-primary via-[#2A1454] to-primary rounded-4xl`}>
            {children}
        </div>
    )
}

export default Button
