import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css";
const TopContent = () => {
  return (
    <div className='topContent'>
        <div className='topContent__container'>
            <h1>Pavithra M</h1>
            <p>A Final Student Year Student at University Of Madras. </p>
                <a href="https://drive.google.com/drive/folders/1_DdcklBo-So6Gz6xTw2rflYpDzeGWckE">
                    <button className='topContent__openButton'>Open CV</button>
                </a>
                <Link to="projects" smooth={true} duration={500}><button className='topContent__workButton'>My Projects</button></Link>
           
        </div>
    </div>
  )
}

export default TopContent