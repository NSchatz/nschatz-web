import '../styles/navbar.css'
import React, {useState} from 'react'
function handleClick(e, id){
    e.preventDefault();
    document.getElementById(id).scrollIntoView({
         			behavior: 'smooth',

         		});
}
export default function Navbar(){
    return(
        <nav className="nav">
            <ul>
                <li>
                    <a href="" onClick={(e) => handleClick(e,'scrollLanding')}>Home</a>
                </li>
                <li>
                    <a href="" onClick={(e) => handleClick(e,'scrollAbout')}>About</a>
                </li>
                <li>
                    <a href="" onClick={(e) => handleClick(e,'scrollProjects')}>Projects</a>
                </li>
                
            </ul>
        </nav>
    ) 
}
