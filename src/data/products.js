import appleImg from '../assets/product-apple.png'
import bananaImg from '../assets/product-banana.png'
import orangeImg from '../assets/product-orange.png'
import tomatoImg from '../assets/product-tomato.png'
import cucumberImg from '../assets/product-cucumber.png'
// Fallbacks for rate-limited images
import lettuceImg from '../assets/category-greens.png'
import pepperImg from '../assets/category-vegetables.png'
import grapesImg from '../assets/category-fruits.png'

export const PRODUCTS = [
    { id: 1, name: 'Red Delicious Apple', category: 'Fruits', price: 1.99, unit: 'lb', image: appleImg, popular: true },
    { id: 2, name: 'Organic Bananas', category: 'Fruits', price: 0.99, unit: 'lb', image: bananaImg, popular: true },
    { id: 3, name: 'Valencia Oranges', category: 'Fruits', price: 2.49, unit: 'lb', image: orangeImg, popular: true },
    { id: 4, name: 'Vine Ripe Tomatoes', category: 'Vegetables', price: 3.99, unit: 'lb', image: tomatoImg, popular: true },
    { id: 5, name: 'English Cucumber', category: 'Vegetables', price: 1.49, unit: 'each', image: cucumberImg, popular: false },
    { id: 6, name: 'Iceberg Lettuce', category: 'Vegetables', price: 2.99, unit: 'head', image: lettuceImg, popular: false },
    { id: 7, name: 'Red Bell Pepper', category: 'Vegetables', price: 1.29, unit: 'each', image: pepperImg, popular: false },
    { id: 8, name: 'Purple Grapes', category: 'Fruits', price: 4.99, unit: 'lb', image: grapesImg, popular: false },
]

export const CATEGORIES = ['All', 'Fruits', 'Vegetables']
