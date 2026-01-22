import React, { useEffect } from 'react'
import BestSellersSection from '../components/BestSellers/BestSellers'
import Seo from '../components/SEO/Seo'

const BestSellers = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="bestSellersPage">
            <Seo
                title="Best Sellers | Bostan"
                description="Our most popular organic fruits and vegetables loved by our community."
            />
            <div className="pageHeader" style={{ background: '#ffebee', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1>Best Sellers</h1>
                    <p>Community favorites you cannot miss.</p>
                </div>
            </div>
            <BestSellersSection />
        </div>
    )
}

export default BestSellers
