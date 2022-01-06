import React from 'react'
import NavBar from '../Components/NavBar/NavBar';
import Cutting from '../assets/cutting.jpeg';
import logo from '../assets/logo.png';
import './home.css';

const Home = () => {
    return (
    <React.Fragment>
        <div>
           <img src={Cutting} alt="" className='cutting'/>
        </div>
           <NavBar />  
           <img src={logo} alt="" className='logo'/>
    </React.Fragment>    
    )
}

export default Home
