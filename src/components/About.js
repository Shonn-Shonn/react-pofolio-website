import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { experiences } from '../data/experiences';
import { MotionAnimate } from 'react-motion-animate';

const Wrap = styled.div`
    background: radial-gradient(506px at 50.6% 16.5%, rgb(239, 252, 250) 5.5%, rgb(154, 192, 206) 100.2%);
    height: auto;
    margin: 0 auto;   
    display: flex;
    justify-cotent: center; 
    aligin-item: center; 
    padding: 5rem;
    

    @media(max-width: 768px){
      height: auto;
      flex-direction: column;

    }
`;

const SectionOne = styled.div`
    flex: 1;
    margin: 1rem;

    h6 {
        padding: .5rem;
        color: crimson;
    }

    h3 {
        padding: .5rem;
    }

    p {
        padding: .5rem;
        color: gray;
    }

    .p-hide {
        display: none;
    }

    @media(max-width: 768px){
        width: 90%;

        p {
            display: none;
        }

        .p-hide{
            display: block;
        }
  
      }
`;


const SectionTwo = styled.div`
    flex: 1;
    margin: 1rem;

    h3 
    {
        padding: 1.2rem;
        color: orange;
        text-transform: uppercase;
    }

    @media(max-width: 768px){
        width: 90%;
  
      }
`;

const Item = styled.div`
    flex: 1;
    height: auto;
    padding: 1.2rem;
    background: linear-gradient(171.8deg, rgb(5, 111, 146) 13.5%, rgb(6, 57, 84) 78.6%);
    color: white;
    margin: 1rem;
    border-radius: 1.255rem;

    h5,p{
        padding: .2rem;
    }

    @media(max-width: 768px){
        width: 100%;
  
      }

`;

export default function About() {
  
  const [expes, setExpes] = useState([]);

  useEffect(() => {
    setExpes(experiences);
  },[]);

  return (
    <MotionAnimate animation='fadeInUp' reset={true}>
    <Wrap id="projects">
        <SectionOne>
           <h6>About Me</h6>
           <h3>Projects which are ChitChat, Blog, HR-Software and Designing Web Pages I did</h3>
           <p>
           Hello, my name is Wint Phyusin Maung and I am a backend developer with a passion for learning new technologies and solving complex problems. I have experience working with a variety of programming languages and frameworks, including PHP, Javascript, and Laravel. In my current role, I am responsible for designing and implementing scalable and robust backend systems that power web and mobile applications. I am always seeking new challenges and opportunities to improve my skills and contribute to innovative projects. Please feel free to connect with me to discuss potential collaborations or simply chat about the latest tech trends.
           </p>

           <p className='p-hide'>
           Hello, my name is Wint Phyusin Maung and I am a backend developer. I have experience working with programming languages and frameworks, including PHP, Javascript, and Laravel.  I am responsible for designing and implementing scalable and robust backend systems that power web and mobile applications. 
           </p>

        </SectionOne>
        <SectionTwo>
           <h3>I worked on...</h3>
           {
            expes.map((exp) => (     
                <Item key={exp.id}>
                    <h5>{exp.company}</h5>
                    <p>{exp.about}</p>
                </Item>
            ))
           }
        </SectionTwo>
    </Wrap>
    </MotionAnimate>
  )
}
