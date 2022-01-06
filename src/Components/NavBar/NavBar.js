import React,{useState} from 'react';
import './NavBar.css';


const NavBar = () => {
    
    return (
<React.Fragment>
        <div className='main'>
            
            <div className='sidebody'>
<ul className='navhead'>
  <li><a href="#" class="underline-hover-effect">SERVICES</a></li>
  <li><a href="#" class="underline-hover-effect">GALLERY</a></li>
  <li><a href="#" class="underline-hover-effect">CONTACT</a></li>
  <li><a href="#" class="underline-hover-effect">ABOUT</a></li>
</ul>
 
<div className='weknow'>
<h1 href='https://fonts.googleapis.com/css?family=Dosis'><span style={{color:'#FEF0A3'}}>
WE KNOW 
</span> 
<br/>
 YOUR STYLE
</h1>
<p className='slogan'>
        Visit and Make yourself more Attractive with our Best Stylist.
</p> 
<button className='bookbutton'>BOOK AN APPOINMENT</button>
</div>
</div>



</div>
</React.Fragment>
  )
}


export default NavBar