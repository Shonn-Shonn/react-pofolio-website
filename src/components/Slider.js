import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../css/slider.css'
import slider1 from '../assets/Slider/slider1.jpg'
import slider2 from '../assets/Slider/slider2.jpg'
import slider3 from '../assets/Slider/slider3.jpg'

const images = [slider1,slider2,slider3];

export default function Slider() {
  return (
    <div>

        <Slide>
         <div className="each-slide-effect">
            <div style={{'backgroundImage': `url(${images[0]})`}}>
                <span>Define what the product will do before you design how the product will do it.</span>
            </div>
         </div>
         <div className='each-slide-effect'>
            <div style={{'backgroundImage': `url(${images[1]})`}}>
                <span>A computer would deserve to be called intelligent if it could deceive a human into believing that it was human.</span>
            </div>
         </div>
         <div className='each-slide-effect'>
            <div style={{'backgroundImage': `url(${images[2]})`}}>
                <span>If you don’t hear any complaints from users, they are not using the software – or your support email is broken.</span>
            </div>
         </div>
        </Slide>

        
    </div>
  )
}

