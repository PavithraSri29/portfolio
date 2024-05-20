import React from 'react'
import {Element} from 'react-scroll'
import Experience from '../ExperiencBox/Experience'
import './ExperienceContainer.css'
import { orange } from '@mui/material/colors'
const ExperienceContainer = () => {
  return (
    <Element className='experienceContainer' id='exp'>
      <h1>Interships</h1>
      <div className='experienceContainer__info'>
        <Experience heading={<span style={{ color: '#33CCC7' }}>Naso Technologies</span>} title="Video Streaming Application Using HTML, CSS and JavaScript"/>
        <Experience heading= {<span style={{ color: 'black' }}>OpenWeaver</span>}title="Cosmetic Web Application Using OpenWeaver Studio" style={{ backgroundColor: '#33CCC7'}}/>
        </div></Element>
  )
}

export default ExperienceContainer