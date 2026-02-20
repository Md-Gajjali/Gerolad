import React, { children } from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`${className} w-330 m-auto`}>
      {children}
    </div>
  )
}

export default Container
