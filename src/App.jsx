import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import CartSidebar from './components/Cart/CartSidebar'
import Footer from './components/Footer/Footer'

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'))
const Products = lazy(() => import('./pages/Products'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Policy = lazy(() => import('./pages/Policy'))

// Loading Component
const PageLoader = () => (
  <div style={{
    height: '60vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'var(--primary)',
    fontSize: '1.2rem'
  }}>
    Loading fresh content...
  </div>
)

function App() {
  return (
    <div className="app">
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Policy type="faq" />} />
          <Route path="/shipping" element={<Policy type="shipping" />} />
          <Route path="/returns" element={<Policy type="returns" />} />
          <Route path="/privacy" element={<Policy type="privacy" />} />
        </Routes>
      </Suspense>
      <Footer />
      <CartSidebar />
    </div>
  )
}

export default App
