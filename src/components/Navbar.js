import React, { useState } from 'react'
import styled from 'styled-components';
import { AiOutlineAlignLeft } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { MotionAnimate } from 'react-motion-animate';

const Nav = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    margin: 0;

    @media(max-width: 768px){
        justify-content: space-between;
    }
`;

const Logo = styled.h1`
    color: crimson;
`;

const DesktopMenu = styled.ul`
    display: flex;

    @media(max-width: 768px){
        display: none;
    }
`;

const NavItem = styled.li`
    list-style: none;
    padding-left: .5rem;
    padding-right: .5rem;
    font-size: 1.115rem;

    a {
        text-decoration: none;
        color: #008ecc;
        transition: all .5s ease-in;

        &:hover{
            color: crimson;
        }
    }

    @media(max-width: 768px){
        padding:1rem 1rem;

        a {
            color: #008ecc;
        }
    }
`;

const MobileNavToggle = styled.h1`
    display: none;
    color: crimson;

    @media(max-width: 768px){
        display: block;
    }

`;

const MobileMenu = styled.ul`
    display: none;

    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        background: rgba(55,3,5,0.1);
    }
`;

const Intro = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
        width:320px;
        height:320px;
        border-radius: 50%;
        border: 2px solid orange;
    }


    @media(max-width: 768px){
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
    }


`;

const PartOne = styled.div`
    flex: 2;
    padding: 1.5rem;

    h2 {
        padding: 1rem;
        margin: 0 1rem;
        text-transform: uppercase;	
        color: #008ecc;

        @media(max-width: 768px){
            display: inherit;
            text-align: center;
            align-items: center;
            padding: .5rem;
         }
    }

    p {
        padding: 1rem;
        margin: 0 1rem;
        font-size: 1.3rem;
        letter-spacing: 1px;
        color: gray;

    
        @media(max-width: 768px){
           font-size: 1.1rem;
           text-align: center;
           margin: 0 auto;
        }
        
    }
`;

const PartTwo = styled.div`
    flex: 1;
`;

const Btn = styled.button`
    outline: none;
    margin:0 2rem;
    margin-top: 1.4rem;
    margin-left: 1.8rem;
    padding:0.5rem 1rem;
    border:none;
    box-shadow: 3px 3px 13px 3px rgba(3,52,2,0.3);
    color: crimson;
    font-size: 1.2rem;
    display: block;
    border-radius: .5rem;
    cursor: pointer;

    &:focus,&:active {
        outline: none;
    }

    @media(max-width: 768px){
        display: none;
     }
`;


export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <>
    <Nav>
        <Logo>A WINT</Logo>

        <DesktopMenu>
            <NavItem><a href='#projects'>Projects</a></NavItem>
            <NavItem><a href='#skills'>Skills</a></NavItem>
            <NavItem><a href='#contact'>Contact</a></NavItem>
        </DesktopMenu>
      
        <MobileNavToggle onClick={() => setIsOpenMenu(!isOpenMenu)}>
        {isOpenMenu ? <RxCross2/> : <AiOutlineAlignLeft/>}
        </MobileNavToggle>

    </Nav>
        {isOpenMenu && (
             <MobileMenu>
                <NavItem><a href='/'>Home</a></NavItem>
                <NavItem><a href='/projects'>Projects</a></NavItem>
                <NavItem><a href='/skills'>Skills</a></NavItem>
                <NavItem><a href='/contact'>Contact</a></NavItem>
            </MobileMenu>
        )}


        <MotionAnimate reset={true}>
        <Intro>
         <PartOne>
           <h2>
               I am a passionate Web Developer
           </h2>
           <p>
           I am currently working as a web developer.My ultimate goal is to deliver seamless
           user experiences by leveraging the latest technologies and industry best practices.
           </p>

           <Btn>
                Contact Me
           </Btn>

         </PartOne>
        
         <PartTwo>
           <img src="https://w0.peakpx.com/wallpaper/347/139/HD-wallpaper-girl-gesture-panda-cute-anime-art-cartoon.jpg" alt='wint'/>
         </PartTwo>
        </Intro>
        </MotionAnimate>
    </>
  )
}
