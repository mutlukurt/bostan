# Bostan - Premium Greengrocer E-commerce (v1.3)

[![Live Demo](https://img.shields.io/badge/Live-Demo-2ea44f?style=for-the-badge&logo=vercel&logoColor=white)](https://bostan-ashen.vercel.app/)

**Bostan** is a modern, premium e-commerce frontend designed for a local greengrocer. It emphasizes freshness, organic quality, and a seamless shopping experience using a high-end design language.

![Hero](/src/assets/hero-banner.png)

## 🚀 Features

### Core Functionality
- **Dynamic Product Catalog**: Browse products with category filtering (Fruits, Vegetables, Greens).
- **Shopping Cart**: Fully functional cart with real-time total calculation, quantity adjustments, and slide-out sidebar.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Routing**: Seamless navigation between Home, Products, About, and Contact pages.

### UI/UX Design
- **Premium Aesthetic**: Custom color palette (Fresh Leaf Green, Citrus Orange) with glassmorphism effects.
- **Micro-animations**: Smooth hover states, transitions, and interactive elements.
- **Custom Assets**: 100% AI-generated, high-resolution imagery for branding and products.

### v1.3 UX Improvements (New)
- **Mobile Menu**: Fully functional hamburger menu for mobile and tablet devices with smooth slide animations.
- **Glassmorphism UI**: Consistent use of blur effects in navigation drawers.

### v1.2 Performance & SEO
- **Optimization**: Implemented **CLS (Cumulative Layout Shift)** fixes with explicit image dimensions.
- **Loading Strategy**: Eager loading for critical assets (Hero) and Lazy loading for below-the-fold content.
- **SEO**: Integrated **React Helmet Async** for dynamic tags.

### Pages
- **Home**: Hero banner, popular product preview.
- **Products**: Full catalog with filtering.
- **About Us**: "Our Story", "Meet the Farmers", and "Sustainability" missions.
- **Contact**: Location info and contact form.
- **Legal/Info**: Privacy Policy, FAQ, Shipping, and Returns.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS 3 (CSS Variables)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **State Management**: React Context API (`CartContext`)
- **SEO**: `react-helmet-async`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Outfit](https://fonts.google.com/specimen/Outfit) & [Inter](https://fonts.google.com/specimen/Inter)

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd grocer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
src/
├── assets/          # Images and static resources
├── components/      # Reusable UI components (Header, Hero, ProductCard, etc.)
├── context/         # Global state management (CartContext)
├── data/            # Static data modules (products.js)
├── pages/           # Page components (Home, Products, About, etc.)
├── styles/          # Global styles and CSS variables
├── App.jsx          # Main application layout and routing
└── main.jsx         # Entry point
```

## 🔮 Future Roadmap

### v1.4 (Upcoming)
- **Next-Gen Formats**: Convert all static PNG assets to **WebP** for superior compression and faster load times.

### v2.0 (Long Term)

- Backend integration for real-time inventory.
- User authentication (Sign up / Login).
- Payment gateway integration (Stripe/PayPal).
- Order history and tracking.
- Interactive blog for recipes.
