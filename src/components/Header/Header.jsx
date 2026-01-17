import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Search, Menu, X } from 'lucide-react'
import logo from '../../assets/logo.png'
import { useCart } from '../../context/CartContext'
import './Header.css'

const Header = () => {
    const { toggleCart, cartCount } = useCart()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const closeMenu = () => setIsMenuOpen(false)

    return (
        <header className="header">
            <div className="container headerContainer">
                <Link to="/" className="logo">
                    <img src={logo} alt="Bostan Logo" />
                    <span>Bostan</span>
                </Link>

                <nav className="nav">
                    <Link to="/" className="navLink">Home</Link>
                    <Link to="/products" className="navLink">Products</Link>
                    <Link to="/about" className="navLink">Our Story</Link>
                    <Link to="/contact" className="navLink">Contact</Link>
                </nav>

                <div className="actions">
                    <button className="iconBtn" aria-label="Search">
                        <Search size={22} />
                    </button>

                    <button className="iconBtn" aria-label="Cart" onClick={toggleCart}>
                        <ShoppingCart size={22} />
                        {cartCount > 0 && <span className="cartCount">{cartCount}</span>}
                    </button>

                    <button className="mobileMenuBtn iconBtn" aria-label="Menu" onClick={toggleMenu}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <div className={`mobileNav ${isMenuOpen ? 'open' : ''}`}>
                <div className="container mobileNavContainer">
                    <Link to="/" className="mobileNavLink" onClick={closeMenu}>Home</Link>
                    <Link to="/products" className="mobileNavLink" onClick={closeMenu}>Products</Link>
                    <Link to="/about" className="mobileNavLink" onClick={closeMenu}>Our Story</Link>
                    <Link to="/contact" className="mobileNavLink" onClick={closeMenu}>Contact</Link>
                </div>
            </div>
        </header>
    )
}

export default Header
