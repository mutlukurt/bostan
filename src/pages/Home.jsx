import React from 'react'
import Hero from '../components/Hero/Hero'
import ProductList from '../components/ProductList/ProductList'
import Seo from '../components/SEO/Seo'
import Categories from '../components/Categories/Categories'

const Home = () => {
    return (
        <>
            <Seo
                title="Fresh Organic Produce"
                description="Premium organic fruits and vegetables delivered directly from local farmers to your doorstep."
            />
            <Hero />
            <Categories />
            <div className="container">
                <ProductList limit={4} title="Popular Choices" />
            </div>
        </>
    )
}

export default Home
