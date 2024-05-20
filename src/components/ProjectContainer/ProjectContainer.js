import React from 'react'
import {Element} from 'react-scroll'
import Project from '../Project/Project';
import './ProjectContainer.css'
import port from'../../assets/port.jpg'
import diabetes from '../../assets/diabetes.jpg'
import pdf from '../../assets/pdf.jpeg'
import text from '../../assets/text.png'
import web from '../../assets/web.jpg'
const ProjectContainer = () => {
    const projects=[
        {img: web,
        title: "Web Page Builder Using HTML, CSS, JavaScript an PHP",
        desc:"This Web Application is very simple. User can just Drag and Drop the Layouts and Template to Create a Web Site.",
        link:"www.google.com",
        },
    {
        img: pdf,
        title: "A PDF Text Reader Using Pyton ",
        desc:"The PDF reader Using TKinter and PYPDF Libraries. User can adjust the no of lines and changes the voice of speaker.",
        link:"www.google.com",
},
    {
        img: text,
        title: "A Multi Label Text Classification Using Python",
        desc:"Predict the title for the relevant articles Using the Machine Learning.",
        link:"www.google.com",
},
    {
        img: diabetes,
        title: "Diabetes Prediction Using Python",
        desc:"Make Prediction and Deployed in Ms Azure Cloud.",
        link:"www.google.com",
    },
   {
        img: port,
        title: "Portfolio Web Page Using HTML, CSS, Javascript and React",
        desc:"Portfolio desscribes about the Skills, Projects and Experience.",
        link:"www.google.com",
   },];
    
  return (
    <Element className="projectContainer" id='projects'>
        <h1>Projects</h1>
        <p>Here are some projects which I have done.</p>
        <div className='projectContainer__projects'>
{projects.map((project, index)=> {
        return(
            <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link} />
        );
    })
}
        </div>
    </Element>
  );
};

export default ProjectContainer