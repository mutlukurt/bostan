import React, { useEffect } from 'react'
import NewArrivalsSection from '../components/NewArrivals/NewArrivals'
import Seo from '../components/SEO/Seo'

const NewArrivals = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="newArrivalsPage">
            <Seo
                title="New Arrivals | Bostan"
                description="Check out the latest fresh products added to our catalog."
            />
            <div className="pageHeader" style={{ background: '#fff8e1', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1>New Arrivals</h1>
                    <p>Fresh from the farm, just for you.</p>
                </div>
            </div>
            <NewArrivalsSection />
        </div>
    )
}

export default NewArrivals
