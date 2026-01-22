import React, { useEffect } from 'react'
import SustainabilitySection from '../components/Sustainability/Sustainability'
import Seo from '../components/SEO/Seo'

const Sustainability = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="sustainabilityPage">
            <Seo
                title="Sustainability | Bostan"
                description="Learn about our commitment to a greener future through eco-friendly packaging and sustainable sourcing."
            />
            <div className="pageHeader" style={{ background: '#e8f5e9', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1>Sustainability</h1>
                    <p>Our promise to the planet and future generations.</p>
                </div>
            </div>
            <SustainabilitySection />
        </div>
    )
}

export default Sustainability
