import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import ProductCard from '../ProductCard/ProductCard'; // Assuming ProductCard exists

import honeyImg from '../../assets/images/honey.png';
import almondsImg from '../../assets/images/almonds.png';
import kaleImg from '../../assets/images/kale.png';
import quinoaImg from '../../assets/images/quinoa.png';

// Mock Data for New Arrivals - normally would come from an API or props
const newArrivalsData = [
    { id: 101, name: 'Artisanal Honey', price: 12.99, image: honeyImg, category: 'Pantry' },
    { id: 102, name: 'Organic Almonds', price: 15.50, image: almondsImg, category: 'Pantry' },
    { id: 103, name: 'Green Kale', price: 3.99, image: kaleImg, category: 'Vegetables' },
    { id: 104, name: 'Red Quinoa', price: 8.49, image: quinoaImg, category: 'Pantry' },
];

const NewArrivals = () => {
    const { addToCart } = useCart();

    return (
        <section className="section py-3">
            <div className="container">
                <div className="section-header" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--text-dark)' }}>New Arrivals</h2>
                    <Link to="/new-arrivals" style={{ color: 'var(--primary)', fontWeight: 'bold', textDecoration: 'none' }}>View All &rarr;</Link>
                </div>
                <div className="product-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {/* Reusing the card structure with added functionality */}
                    {newArrivalsData.map((product) => (
                        <div key={product.id} className="product-card" style={{
                            border: '1px solid #eee',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            transition: 'box-shadow 0.3s ease'
                        }}>
                            <div className="img-wrapper" style={{ height: '250px', background: '#f9f9f9', position: 'relative', overflow: 'hidden' }}>
                                <span style={{
                                    position: 'absolute',
                                    top: '10px',
                                    left: '10px',
                                    background: 'var(--primary, #fa8231)',
                                    color: 'white',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    fontSize: '0.8rem',
                                    fontWeight: 'bold',
                                    zIndex: 1
                                }}>NEW</span>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                            <div className="info" style={{ padding: '1rem' }}>
                                <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{product.category}</p>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>{product.name}</h3>
                                <div className="price" style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--text-dark)' }}>${product.price}</div>
                            </div>

                            <button style={{
                                width: '100%',
                                padding: '0.8rem',
                                border: 'none',
                                background: 'transparent',
                                borderTop: '1px solid #eee',
                                color: 'var(--primary, #fa8231)',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'background 0.2s'
                            }}
                                onClick={() => addToCart(product)}
                                onMouseOver={(e) => { e.currentTarget.style.background = 'var(--primary, #fa8231)'; e.currentTarget.style.color = 'white' }}
                                onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--primary, #fa8231)' }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewArrivals;
