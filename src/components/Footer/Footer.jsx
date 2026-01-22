import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footerContent">
                    <div className="footerCol footerBrand">
                        <h3 className="logo">Bostan</h3>
                        <p className="footerDesc">
                            Bringing the freshest organic produce from local farms directly to your table.
                        </p>
                    </div>

                    <div className="footerCol">
                        <h4>Shop</h4>
                        <ul className="footerLinks">
                            <li><Link to="/products?category=Fruits">Fruits</Link></li>
                            <li><Link to="/products?category=Vegetables">Vegetables</Link></li>
                            <li><Link to="/new-arrivals">New Arrivals</Link></li>
                            <li><Link to="/best-sellers">Best Sellers</Link></li>
                        </ul>
                    </div>

                    <div className="footerCol">
                        <h4>Company</h4>
                        <ul className="footerLinks">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/farmers">Farmers</Link></li>
                            <li><Link to="/sustainability">Sustainability</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footerCol">
                        <h4>Help</h4>
                        <ul className="footerLinks">
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/shipping">Shipping</Link></li>
                            <li><Link to="/returns">Returns</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="copyright">
                    &copy; {new Date().getFullYear()} Bostan Grocer. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
