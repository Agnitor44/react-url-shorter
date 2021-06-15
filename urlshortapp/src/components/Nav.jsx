import React, {useEffect, useState} from 'react'
import logo from '../images/logo.svg'
import hamb from '../images/menu.svg'

import '../styles/nav.css'
export default function Nav() {
    const [width, setWidth] = useState(window.innerWidth)
    const [open, setOpen] = useState(false)
    useEffect(() => {
        window.addEventListener('resize', () => {
          setWidth(window.innerWidth)
        })
    })
    const handleOpen = () => {
        const nav = document.querySelector('nav.mobileNav')
     
        if(!open) {
          nav.style.left = '5%'
        }
          else if(open) {
          nav.style.left = '-100%'
        }
        setOpen(prev => !prev)
    }
    return (
        width > 525 ?
       <div className="navContainer">
           <nav>
               <ul>
                   <li><img src= {logo} alt=""/></li>
                   <li><a href="#">Features</a></li>
                   <li><a href="#">Pricing</a></li>
                   <li><a href="#">Resources</a></li>
               </ul>

               <div className="loginZone">
                   <a href="#">Login</a>
                   <button><a href="#">Sign Up</a></button>
               </div>
           </nav>
       </div>
:
    <div className="MobileContainer">
    <img  src= {logo} alt=""/>
     <button img onClick = {handleOpen} > <img className = 'hamb' src= {hamb} alt="" /></button>  
    <nav className = 'mobileNav'>
        <ul>
         
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
        </ul>

        <div className="loginZone">
            <a href="#">Login</a>
            <button><a href="#">Sign Up</a></button>
        </div>
    </nav>
    
</div>


    )
}
