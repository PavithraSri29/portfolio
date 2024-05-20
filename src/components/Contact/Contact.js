import React from 'react'
import {Element} from 'react-scroll'
import {IconButton, formControlClasses} from '@mui/material'
import {LinkedIn,GitHub,Email} from '@mui/icons-material'
import './Contact.css'
const Contact = () => {
  return (
    <Element className='contact' id='contact'>
        <h1>Contact</h1>
        <div className='contact__container'>
        <p>Email: <span>impavithra29@gmail.com</span> </p>
        <p>GitHub Username: <span>PavithraSri29</span></p>
        <div className='contact__icons'>
            <a href="https://www.linkedin.com/in/pavithram29/">
                <IconButton>
                    <LinkedIn />
                </IconButton>
            </a>
            <a href="https://github.com/PavithraSri29">
                <IconButton>
                    <GitHub />
                </IconButton>
            </a>
            <a href="mailto:impavithra29@gmail.com">
                <IconButton>
                    <Email />
                </IconButton>
            </a>
        </div>
        </div>
    </Element>
  )
}

export default Contact