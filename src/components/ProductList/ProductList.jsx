import React, { useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { PRODUCTS, CATEGORIES } from '../../data/products'
import './ProductList.css'

const ProductList = ({ limit, title }) => {
    const [activeCategory, setActiveCategory] = useState('All')

    let displayProducts = activeCategory === 'All'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeCategory)

    if (limit) {
        displayProducts = displayProducts.slice(0, limit)
    }

    return (
        <section id="products" className="productListSection">
            <div className="container">
                <div className="sectionHeader">
                    <h2 className="sectionTitle">{title || "Our Fresh Selection"}</h2>
                    <p className="sectionSubtitle">Hand-picked just for you</p>
                </div>

                <div className="categoryFilter">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            className={`filterBtn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="productGrid">
                    {displayProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductList
