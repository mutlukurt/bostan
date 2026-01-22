import React, { useEffect } from 'react'
import FarmersStory from '../components/FarmersStory/FarmersStory'
import Seo from '../components/SEO/Seo'

const Farmers = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="farmersPage">
            <Seo
                title="Our Farmers | Bostan"
                description="Meet the local farmers who grow your food with care and sustainable practices."
            />
            <div className="pageHeader" style={{ background: '#f9f9f9', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1>Our Farmers</h1>
                    <p>Connecting you directly with the hands that feed you.</p>
                </div>
            </div>
            <FarmersStory />
        </div>
    )
}

export default Farmers
