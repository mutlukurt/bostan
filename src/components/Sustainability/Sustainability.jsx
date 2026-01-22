import React from 'react';

const Sustainability = () => {
    return (
        <section className="section py-5" style={{ background: '#f1f8e9' }} id="sustainability">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-dark)' }}>Committed to a Greener Future</h2>
                    <p style={{ maxWidth: '700px', margin: '1rem auto', color: '#666' }}>Small steps make a big difference. Here is how we are doing our part for the planet.</p>
                </div>

                <div className="features-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    <div className="feature-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>♻️</div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Eco-Friendly Packaging</h3>
                        <p style={{ color: '#666' }}>We use 100% biodegradable or recyclable packaging for all our deliveries.</p>
                    </div>
                    <div className="feature-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚜</div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Zero-Emission Delivery</h3>
                        <p style={{ color: '#666' }}>Our local fleet is electric-powered, reducing our carbon footprint with every mile.</p>
                    </div>
                    <div className="feature-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌱</div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Sustainable Farming</h3>
                        <p style={{ color: '#666' }}>We only partner with farms that use regenerative agriculture practices.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sustainability;
