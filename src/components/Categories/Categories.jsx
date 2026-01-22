import React from 'react';
import { Link } from 'react-router-dom';
import freshVegetablesImg from '../../assets/images/fresh_vegetables.png';
import seasonalFruitsImg from '../../assets/images/seasonal_fruits.png';

const Categories = () => {
    const categories = [
        {
            id: 1,
            title: 'Fresh Vegetables',
            image: freshVegetablesImg,
            link: '/products?category=Vegetables',
            description: 'Crisp, organic, and locally sourced.'
        },
        {
            id: 2,
            title: 'Seasonal Fruits',
            image: seasonalFruitsImg,
            link: '/products?category=Fruits',
            description: 'Sweet, juicy, and hand-picked daily.'
        }
    ];

    return (
        <section className="section py-3">
            <div className="container">
                <div className="categories-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {categories.map((cat) => (
                        <div key={cat.id} className="category-card" style={{
                            position: 'relative',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer'
                        }}>
                            <Link to={cat.link} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                                <div className="img-wrapper" style={{ height: '300px', overflow: 'hidden' }}>
                                    <img
                                        src={cat.image}
                                        alt={cat.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease'
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                </div>
                                <div className="content" style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    padding: '1.5rem',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                    color: 'white'
                                }}>
                                    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem', fontWeight: 'bold' }}>{cat.title}</h3>
                                    <p style={{ margin: 0, fontSize: '1rem', opacity: 0.9 }}>{cat.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
