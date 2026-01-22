import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import CartSidebar from './components/Cart/CartSidebar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'


// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'))
const Products = lazy(() => import('./pages/Products'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Farmers = lazy(() => import('./pages/Farmers'))
const Sustainability = lazy(() => import('./pages/Sustainability'))
const NewArrivals = lazy(() => import('./pages/NewArrivals'))
const BestSellers = lazy(() => import('./pages/BestSellers'))
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
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/farmers" element={<Farmers />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/best-sellers" element={<BestSellers />} />
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
