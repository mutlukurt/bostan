import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext.jsx'
import './CartSidebar.css'

const CartSidebar = () => {
    const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart()

    return (
        <div className={`cartOverlay ${isCartOpen ? 'open' : ''}`} onClick={toggleCart}>
            <aside className="cartSidebar" onClick={(e) => e.stopPropagation()}>
                <div className="cartHeader">
                    <h2 className="cartTitle">Your Basket</h2>
                    <button className="closeBtn" onClick={toggleCart} aria-label="Close cart">
                        <X size={24} />
                    </button>
                </div>

                <div className="cartItems">
                    {cart.length === 0 ? (
                        <div className="emptyCart">
                            <ShoppingBag size={48} strokeWidth={1.5} />
                            <p>Your basket is empty</p>
                            <button className="ctaBtn" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }} onClick={toggleCart}>
                                Start Shopping
                            </button>
                        </div>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="cartItem">
                                <img src={item.image} alt={item.name} className="cartItemImage" />
                                <div className="cartItemInfo">
                                    <span className="cartItemName">{item.name}</span>
                                    <div className="cartItemControls">
                                        <div className="qtyControls">
                                            <button
                                                className="qtyBtn"
                                                onClick={() => item.quantity > 1 ? updateQuantity(item.id, -1) : removeFromCart(item.id)}
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="qtyValue">{item.quantity}</span>
                                            <button className="qtyBtn" onClick={() => updateQuantity(item.id, 1)}>
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                        <span className="cartItemPrice">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="cartFooter">
                        <div className="totalRow">
                            <span>Total</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button
                                onClick={clearCart}
                                style={{
                                    flex: 1,
                                    padding: '1rem',
                                    backgroundColor: 'transparent',
                                    border: '1px solid #ddd',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    color: '#666'
                                }}
                            >
                                Clear Cart
                            </button>
                            <button className="checkoutBtn" style={{ flex: 1 }}>Checkout</button>
                        </div>
                    </div>
                )}
            </aside>
        </div>
    )
}

export default CartSidebar
