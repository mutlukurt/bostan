import React from 'react';
import bananaImg from '../../assets/best-seller-banana.png';
import eggsImg from '../../assets/best-seller-eggs.png';
import breadImg from '../../assets/best-seller-bread.png';
import oliveOilImg from '../../assets/best-seller-olive-oil.png';

// Mock Data for Best Sellers
const bestSellersData = [
    { id: 201, name: 'Organic Bananas', price: 2.99, image: bananaImg, category: 'Fruits' },
    { id: 202, name: 'Farm Eggs (12ct)', price: 6.50, image: eggsImg, category: 'Dairy' },
    { id: 203, name: 'Sourdough Bread', price: 7.00, image: breadImg, category: 'Bakery' },
    { id: 204, name: 'Extra Virgin Olive Oil', price: 24.99, image: oliveOilImg, category: 'Pantry' },
];

const BestSellers = () => {
    return (
        <section className="section py-3" style={{ background: '#fafafa' }}>
            <div className="container">
                <div className="section-header" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Best Sellers</h2>
                    <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>Our most popular items, loved by the community for their freshness and quality.</p>
                </div>
                <div className="product-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {bestSellersData.map((product) => (
                        <div key={product.id} className="product-card" style={{
                            background: 'white',
                            borderRadius: '12px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                            overflow: 'hidden'
                        }}>
                            <div className="img-wrapper" style={{ height: '250px', position: 'relative', overflow: 'hidden' }}>
                                {/* Badge for Best Seller */}
                                <div style={{
                                    position: 'absolute',
                                    top: 10, right: 10,
                                    background: '#ffca28',
                                    color: '#333',
                                    borderRadius: '50%',
                                    width: '40px', height: '40px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontWeight: 'bold', fontSize: '0.8rem',
                                    zIndex: 2,
                                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                                }}>
                                    ★
                                </div>
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
                            <div className="info" style={{ padding: '1.5rem', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>{product.name}</h3>
                                <div className="price" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary, #fa8231)' }}>${product.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestSellers;
