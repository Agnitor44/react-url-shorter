import React from 'react'
import '../styles/footer.css'
import logoMain from '../images/logo.svg'
import logo1 from '../images/icon-facebook.svg'
import logo2 from '../images/icon-twitter.svg'
import logo3 from '../images/icon-pinterest.svg'
import logo4 from '../images/icon-instagram.svg'
export default function Footer() {
    return (
        <section className="footer">
               <div className="footerWrap">
                   <img className = 'logoS' src={logoMain} alt="" />
                <div className="footContainer">

           
                    <div className="features">
                        <ul>
                            <li>  Features</li>
                            <li>  Link Shortening</li>
                            <li>  Branded Links</li>
                            <li>  Analytics</li>
                        </ul>
                    </div>

                    <div className="reso">
                        <ul>
                            <li>  Resources</li>
                            <li>Blog</li>
                            <li>  Developers</li>
                            <li>  Support</li>
                        </ul>
                    </div>

                    <div className="company">
                        <ul>
                            <li>  Company</li>
                            <li> About</li>
                            <li>Our Team</li>
                            <li>  Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="logoZones">
                        <img src= {logo1} alt="" /><img src={logo2}alt="" /><img src={logo3} alt="" /><img src={logo4} alt="" />
                    </div>
                    </div>
               </div>
        </section>
         
        
    )
}
