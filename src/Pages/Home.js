import React from 'react'
import introvideo from '../assets/Intro.mp4';
import video2 from '../assets/video2.mp4';
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
        <h1 className='welcometext'>WELCOME TO E2S STYLE WORLD</h1> 
        <p className="intrytext">
        The Best Place to make your Hair Beautiful and Awesome.
        Most Affordabel Price in Trichy with High Quality Service.
        We Provide you the Best Style which Suits for you and we make you more beautiful in a Unique Manner.
        </p>
    <h1 className='whychoose'>WHY CHOOSE US</h1>
 <div className='whydiv'>   
    <p className='whytext'>
        Our Main Motto is to Provide High Quality Service <br/>and Good Customer Satisfaction.<br/>
        Our Customer Experience <br/>is very much Important for Our Business to thrive,<br/>
        We Seek Feed backs from<br/> our Beloved Customers.
    </p>
 </div>   
    <video 
    className='video2'
    controls
    muted
    autoPlay={"autoplay"}
    preLoad="auto"
    loop
    >
        <source src={video2} type='video/mp4'/>
    </video>       
        </div>
    )
}

export default Home
