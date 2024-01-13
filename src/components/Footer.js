import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaLandmark } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaHackerrank } from "react-icons/fa";


const FooterDiv = styled.div`
    background: background-color: #ffffff;
    background-image: linear-gradient(315deg, #ffffff 0%, #ff7878 74%);    
    height: 150px;
    display: flex;
    justify-content: center;
    gap: 3;
    align-items: center;
`;

const PartOne = styled.div`
    h3 {
        margin-bottom: 1.5rem;
    }
`;

const PartTwo = styled.div`
    display: flex;
    justify-cotent: center;
    align-items: center;
    margin-left: 2.5rem;

    h3 {
        padding: 1rem;
    }

    a {
        color: black;
    }
`;

export default function Footer() {
  return (
    <div>
        <FooterDiv>
            <PartOne>
                <h3>Author: Wint Phyusin Maung</h3>
                <p>phyumaung423@gmail.com</p>
            </PartOne>
            <PartTwo>
                <h3><a href="https://www.linkedin.com/in/wint-phyusin-maung-b49791237"><CiLinkedin/></a></h3>
                <h3><a href="https://github.com/Shonn-Shonn"><FaGithub/></a></h3>
                <h3><a href="https://www.hackerrank.com/profile/20Wint"><FaHackerrank/></a></h3>
            </PartTwo>
        </FooterDiv>
    </div>
  )
}
