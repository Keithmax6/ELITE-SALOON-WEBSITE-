import React from 'react'
import introvideo from '../assets/Intro.mp4'
import './home.css';

const Home = () => {
    return (
        <div>
           <video 
          className='video'
          controls
          muted
          autoPlay={"autoplay"}
          preLoad="auto"
          loop
           >
               <source src={introvideo} type='video/mp4'/>
           </video>
        <h1 className='welcometext'>WELCOME  TO E2S STYLE WORLD</h1>   
        </div>
    )
}

export default Home
