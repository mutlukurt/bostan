import React, { useEffect } from 'react'
import Seo from '../components/SEO/Seo'
import './Policy.css'

const POLICY_CONTENT = {
    faq: {
        title: 'Frequently Asked Questions',
        content: [
            { q: 'Where does your produce come from?', a: 'All our produce is sourced directly from certified organic local farmers within a 100-mile radius to ensure maximum freshness.' },
            { q: 'Do you offer home delivery?', a: 'Yes! We deliver everyday between 8am and 8pm. Free delivery on orders over $50.' },
            { q: 'Is your packaging eco-friendly?', a: 'Absolutely. We use 100% biodegradable or recyclable materials for all our packaging.' },
        ]
    },
    shipping: {
        title: 'Shipping & Delivery',
        content: [
            { q: 'Delivery Areas', a: 'We currently serve the greater Green Valley area. Check our zip code checker at checkout to confirm reliability.' },
            { q: 'Delivery Times', a: 'Orders placed before 2pm are eligible for same-day delivery. All other orders are delivered the next morning.' },
        ]
    },
    returns: {
        title: 'Return Policy',
        content: [
            { q: 'Freshness Guarantee', a: 'If you are not 100% satisfied with the quality of your produce, let us know within 24 hours and we will replace it for free, no questions asked.' },
        ]
    },
    privacy: {
        title: 'Privacy Policy',
        content: [
            { q: 'Data Collection', a: 'We collect only necessary data to process your orders and improve your shopping experience. We never sell your data to third parties.' },
            { q: 'Payment Security', a: 'All payments are processed through secure, encrypted gateways. We do not store your credit card information.' },
        ]
    }
}

const Policy = ({ type }) => {
    const data = POLICY_CONTENT[type] || { title: 'Policy', content: [] }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [type])

    return (
        <div className="policyPage">
            <Seo
                title={data.title}
                description={`Read our ${data.title} to learn more about our services.`}
            />
            <div className="container">
                <h1 className="pageTitle">{data.title}</h1>
                <div className="policyContent">
                    {data.content.map((item, index) => (
                        <div key={index} className="policyItem">
                            <h3>{item.q}</h3>
                            <p>{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Policy
