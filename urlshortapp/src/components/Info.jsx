import React from 'react'
import '../styles/info.css'
import icon1 from '../images/icon-brand-recognition.svg'
import icon2 from '../images/icon-detailed-records.svg'
import icon3 from '../images/icon-fully-customizable.svg'
export default function Info() {
    return (
       <div className="info">
           <div className="infoWrap">
               <div className="infoTxt">
                   <h2>  Advanced Statistics</h2>
                   <p> Track how your links are performing across the web with our 
                    advanced statistics dashboard.</p>
               </div>

               <div className="boxZone">

                   <div className="infoBox">
                       <div className="infoImgZone">
                       <img src= {icon1} alt="" />
                       </div>
                     
                        <h3>  Brand Recognition</h3>
                                            <p>  Boost your brand recognition with each click. Generic links don’t 
                    mean a thing. Branded links help instil confidence in your content.</p>
                   </div>


                   <div className="infoBox">
                   <div className="infoImgZone">
                       <img src={icon2} alt="" />
                       </div>
                   <h3> Detailed Records</h3>
                   <p>  Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.</p>
                       </div>


                       <div className="infoBox">
                       <div className="infoImgZone">
                       <img src={icon3} alt="" />
                       </div>
                       <h3>  Fully Customizable</h3>
                            <p>  Improve brand awareness and content discoverability through customizable 
        links, supercharging audience engagement.</p>
                       </div>

               </div>
           </div>
       </div>
    )
}
