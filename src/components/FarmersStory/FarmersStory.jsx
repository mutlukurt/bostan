import React from 'react';
import { Link } from 'react-router-dom';

import farmerImg from '../../assets/images/farmer.png';

const FarmersStory = () => {
    return (
        <section className="section py-5" style={{ background: '#fff' }} id="farmers">
            <div className="container">
                <div className="farmers-story-wrapper" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '4rem',
                    flexWrap: 'wrap'
                }}>
                    <div className="image-col" style={{ flex: '1 1 400px' }}>
                        <div className="img-wrapper" style={{
                            position: 'relative',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                        }}>
                            <img
                                src={farmerImg}
                                alt="Local Farmer"
                                style={{ width: '100%', display: 'block' }}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: '20px',
                                right: '20px',
                                background: 'white',
                                padding: '1rem 2rem',
                                borderRadius: '50px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                fontWeight: 'bold',
                                color: 'var(--primary, #fa8231)'
                            }}>
                                Since 1985
                            </div>
                        </div>
                    </div>
                    <div className="content-col" style={{ flex: '1 1 400px' }}>
                        <h4 style={{ color: 'var(--primary, #fa8231)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Support Local</h4>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: 1.2 }}>Meet the Hands That Feed You</h2>
                        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                            We believe in the power of community. That's why we partner directly with local family farms to bring you the freshest produce while ensuring fair wages and sustainable practices for our growers.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem', lineHeight: 1.6 }}>
                            Every purchase you make helps support a local family and keeps our community thriving. Taste the difference of love and care in every bite.
                        </p>
                        <Link to="/about" className="btn btn-primary" style={{
                            display: 'inline-block',
                            background: 'var(--primary, #fa8231)',
                            color: 'white',
                            padding: '1rem 2rem',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            transition: 'transform 0.2s',
                            boxShadow: '0 4px 15px rgba(250, 130, 49, 0.4)'
                        }}>
                            Read Our Story
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FarmersStory;
