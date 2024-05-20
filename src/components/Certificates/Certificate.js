import React from 'react';
import './Certificate.css';
import frontendImage from '../../assets/coursera(front end)_page-0001 (1).jpg';
import pythonImage from '../../assets/python_page-0001.jpg';
import bootstrapImage from '../../assets/bootstrap 5_page-0001.jpg';
import jsImage from '../../assets/javascript for beginners_page-0001.jpg';

const Certificate = () => {
  return (
    <div className='certificate__img' id='certificate'>
      <h1>Certificates</h1>
      <div className='certificate__img-container'>
        <img src={frontendImage} alt='' />
        <img src={bootstrapImage} alt='' />
        <img src={pythonImage} alt='' />
        <img src={jsImage} alt='' />
      </div>
    </div>
  );
};

export default Certificate;
