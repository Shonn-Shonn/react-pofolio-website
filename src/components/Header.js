import React, { useEffect, useState , useLayoutEffect} from 'react'
import styled from 'styled-components'
import img from '../assets/bgco.png'
import bg from '../assets/ballon.png'
import { languages } from '../data/languages';
import { MotionAnimate } from 'react-motion-animate';

const HeadContainer = styled.div`
  width: 90vw;
  background: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 3rem auto;
  padding: 1.8rem;
  border-radius: 1.35rem;


  @media(max-width: 768px){
    height: auto;
    margin: .5rem auto;
}
`;

const PartOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 768px){
    flex-direction: column;
  }
`;

const HeadOne = styled.h1`
    text-align: center;
    margin: 2.5rem;
    font-size: 2.3rem;
    color:  #008ecc;
    text-transform: uppercase;

    @media(max-width: 768px){
      font-size: 1.5rem;
   }
`;

const SubPart = styled.div`
   width: 250px;
   align-items: center;
   padding: 1.5rem;
   margin: .7rem;
   background: url(${bg});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover; 
   height: 200px;
   border-radius: 1.25rem;
   border: 1px solid orange;

   h3 {
     padding: .5rem;
   }

   @media(max-width: 768px){
    width: 90%;
    height: auto;
    align-self: center;
 }
`;


export default function Header() {

  const [items, setItems] = useState([]);
   
  useEffect(() => {
      setItems(languages);

  },[])


  return (
    <HeadContainer>

         <HeadOne>Languages I always utilize</HeadOne>

         <PartOne>
            {items.map((item) => (
                <MotionAnimate  animation='fadeInUp'
                reset={true}
                distance={200}
                delay={1}
                speed={1}>
                  <SubPart  key={item.id}>
                   <h3>{item.title}</h3>
                   <p>{item.about}</p>
                  </SubPart>
                </MotionAnimate>
            ))}
         </PartOne>

    </HeadContainer>
  )
}
