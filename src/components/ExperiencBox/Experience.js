import React from 'react'
import './Experience.css'
const Experience = ({heading, title,style}) => {
  return (
    <div style={{...style}} className='experience'>
        <h4>{heading}</h4>
        <p>{title}</p>
    </div>
  )
}

export default Experience