import React, { useEffect } from 'react'
import ProductList from '../components/ProductList/ProductList'
import Seo from '../components/SEO/Seo'
import './Products.css'

const Products = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="productsPage">
            <Seo
                title="All Products"
                description="Browse our complete catalog of fresh seasonal fruits, vegetables, and greens."
            />
            <div className="productsHero">
                <div className="container">
                    <h1>All Products</h1>
                    <p>Explore our complete range of fresh, organic produce.</p>
                </div>
            </div>
            <div className="container">
                <ProductList />
            </div>
        </div>
    )
}

export default Products
