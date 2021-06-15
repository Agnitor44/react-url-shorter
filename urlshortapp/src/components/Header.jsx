import React from 'react'
    import img from '../images/illustration-working.svg'
    import '../styles/header.css'
export default function Header() {
    return (
        <section className="header">
            <div className="headerWrap">

                <div className="headerTxt">
                    <h1>
                    More than just shorter links
                    </h1>

                    <p>
                    Build your brand’s recognition and get detailed insights 
                    on how your links are performing.
                    </p>

                    <button>
                    Get Started
                    </button>
                </div>
                <img src= {img} alt="" />


            </div>
        </section>
    )
}
