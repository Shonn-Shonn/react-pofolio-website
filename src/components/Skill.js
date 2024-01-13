import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {processes} from '../data/processes';
import img from '../assets/gradient.png'
import { MotionAnimate } from 'react-motion-animate';

const SkillWrap = styled.div`
   background: url(${img});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;

   h3{
    text-align: center;
    padding: 1.1rem;
    text-transform: uppercase;
   }
`;

const Wrap = styled.div`
   display: flex;
   align-item: center;
   justify-content: center;
   width: 90%;
   margin: 0 auto;
   overflow: hidden;

   @media (max-width: 768px){
    width: 100%;
   }

`;

const PartOneSub = styled.div`

`;

const SubPartOne = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 1px solid #008ecc;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
`;

const PartOne = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media(max-width: 768px){
      flex-wrap: wrap;
   } 
`;

const Slider = styled.div`
`;

export default function Skill() {

  const [pcesses, setpcesses] = useState([]);

  useEffect(() => {
    setpcesses(processes);
  },[]);

  return (
    <MotionAnimate reset={true}>
        <SkillWrap>
        <h3>Development Process ||  <span>Development: With the planning and design in place</span></h3>

        <Wrap>
        <PartOne>
           {pcesses.map((pce) => (
                 <PartOneSub>
                       <SubPartOne >
                          <h5>{pce.title}</h5>
                       </SubPartOne>
                 </PartOneSub>
           ))}
        </PartOne>
        </Wrap>

        <Slider>


        </Slider>

        </SkillWrap>
    </MotionAnimate>
  )
}
