import React from 'react'
import { Element } from 'react-scroll'
import skillImg from '../../assets/skills.jpg'
import { LinearProgress } from '@mui/material';
import './SkillContainer.css'
const SkillContainer = () => {
  return (
   <Element className='skillContainer' id='skills'>
   <div className='skillContainer__image'>
    <img src={skillImg} alt=""/>
   </div>
   <div className='skillContainer__text'>
    <h2>SKILLSET</h2>
    <div className='skillContainer__skillset'>
        <h5>HTML5</h5>
        <div className='skillContainer__slider skillContainer__slider1'>
            <LinearProgress variant='determinate' value={90} />
        </div>
    </div>
    <div className='skillContainer__skillset'>
        <h5>CSS3</h5>
        <div className='skillContainer__slider skillContainer__slider2'>
            <LinearProgress variant='determinate' value={80} />
        </div>
    </div>
    <div className='skillContainer__skillset'>
        <h5>JavScript</h5>
        <div className='skillContainer__slider skillContainer__slider3'>
            <LinearProgress variant='determinate' value={60} />
        </div>
    </div>
    <div className='skillContainer__skillset'>
        <h5>ReactJS</h5>
        <div className='skillContainer__slider skillContainer__slider4'>
            <LinearProgress variant='determinate' value={40} />
        </div>
    </div>
    <div className='skillContainer__skillset'>
        <h5>Python</h5>
        <div className='skillContainer__slider skillContainer__slider5'>
            <LinearProgress variant='determinate' value={60} />
        </div>
    </div>
    <div className='skillContainer__skillset'>
        <h5>SQL+</h5>
        <div className='skillContainer__slider skillContanier__slider6'>
            <LinearProgress variant='determinate' value={70} />
        </div>
    </div>
    <div className='skillContainer__skillset'>
        <h5>MS Office</h5>
        <div className='skillContainer__slider skillContainer__slider7'>
            <LinearProgress variant='determinate' value={80} />
        </div>
    </div>

    </div></Element>
  )
}

export default SkillContainer