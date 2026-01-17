import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../../assets/hero-banner.png'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <div className="heroBackground">
                <img
                    src={heroImg}
                    alt="Fresh market stall"
                    width="1920"
                    height="1080"
                    loading="eager"
                    fetchPriority="high"
                />
            </div>
            <div className="container">
                <div className="heroContent">
                    <h1 className="heroTitle">Nature's Best, <br /> Delivered to You.</h1>
                    <p className="heroText">
                        Experience the taste of freshness with our hand-picked selection of organic fruits and vegetables from local farmers.
                    </p>
                    <Link to="/products" className="ctaBtn">Start Shopping</Link>
                </div>
            </div>
        </section>
    )
}

export default Hero
