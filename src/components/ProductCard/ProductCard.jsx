import React from 'react'
import { Plus } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import './ProductCard.css'

const ProductCard = ({ product }) => {
    const { addToCart } = useCart()
    return (
        <div className="productCard">
            <div className="productImage">
                <img
                    src={product.image}
                    alt={product.name}
                    width="300"
                    height="300"
                    loading="lazy"
                />
            </div>
            <div className="productInfo">
                <span className="category">{product.category}</span>
                <h3 className="productName">{product.name}</h3>
                <div className="priceRow">
                    <div className="price">
                        ${product.price} <span className="unit">/ {product.unit}</span>
                    </div>
                    <button className="iconBtn addBtn" aria-label="Add to cart" onClick={() => addToCart(product)}>
                        <Plus size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
