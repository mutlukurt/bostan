import React, { useEffect } from 'react'
import storyImg from '../assets/about-story.png'
import farmersImg from '../assets/about-farmers.png'
import sustainabilityImg from '../assets/about-sustainability.png'
import Seo from '../components/SEO/Seo'
import './About.css'

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="aboutPage">
            <Seo
                title="Our Story"
                description="Learn about Bostan's legacy, our local farmers, and our commitment to sustainability."
            />
            <div className="container">
                <section className="aboutHero">
                    <h1 className="pageTitle">Our Story</h1>
                    <p className="pageSubtitle">Rooted in tradition, growing for the future.</p>
                </section>

                <section className="aboutSection" id="story">
                    <div className="aboutContent">
                        <h2>From Our Family to Yours</h2>
                        <p>
                            Bostan began over 50 years ago as a small roadside stall. Our grandfather believed that everyone deserved access to the freshest, most flavorful produce nature could offer. Today, we continue that legacy, bridging the gap between local farmers and your kitchen table.
                        </p>
                        <p>
                            We are more than just a greengrocer; we are a community hub where passion for quality food meets the warmth of neighborhood service.
                        </p>
                    </div>
                    <div className="aboutImage">
                        <img src={storyImg} alt="Original Bostan Shop" width="600" height="400" loading="lazy" />
                    </div>
                </section>

                <section className="aboutSection reverse" id="farmers">
                    <div className="aboutContent">
                        <h2>Meet Our Farmers</h2>
                        <p>
                            We partner exclusively with local growers who share our commitment to ethical farming. By cutting out the middleman, we ensure that our farmers get fair pay and you get produce that was likely in the ground just yesterday.
                        </p>
                        <p>
                            Knowing where your food comes from matters. That's why we visit every farm, shake every hand, and taste every crop before it reaches our shelves.
                        </p>
                    </div>
                    <div className="aboutImage">
                        <img src={farmersImg} alt="Local Farmer" width="600" height="400" loading="lazy" />
                    </div>
                </section>

                <section className="aboutSection" id="sustainability">
                    <div className="aboutContent">
                        <h2>Sustainability at Heart</h2>
                        <p>
                            The earth feeds us, so we must care for it. We are dedicated to zero-waste initiatives, plastic-free packaging, and supporting regenerative agriculture practices.
                        </p>
                        <p>
                            Every purchase at Bostan supports a greener, healthier planet. We are constantly innovating to reduce our carbon footprint and preserve the land for future generations.
                        </p>
                    </div>
                    <div className="aboutImage">
                        <img src={sustainabilityImg} alt="Sustainability Concept" width="600" height="400" loading="lazy" />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About
