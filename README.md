# Creamify-store-e-commerce-website

Welcome to **Creamify Store**, a modern and responsive e-commerce web application built with **React**, focused on promoting and selling skincare products. This project simulates a clean and user-friendly shopping experience with dynamic product listings, a cart system, and detailed product views.

<img width="1868" height="900" alt="Screenshot (738)" src="https://github.com/user-attachments/assets/02f1d939-824c-41e1-b96e-46ba86e09c8b" />

## 🌟 Project Overview

CreamSkincare is a frontend-only application that showcases a collection of skincare items, allowing users to:

- View trending and available skincare products
- See product details with images, ratings, and descriptions
- Add products to a dynamic cart
- Adjust quantity or remove items
- View the total cost of selected items
- Navigate smoothly between pages (Home, Products, Cart, etc.)

---

## ✅ Features Implemented

### 🔗 Routing & Navigation
- Built using `react-router-dom`
- Navigates between pages: Home, Product Details, and Cart

### 🛍️ Product Listing
- Displays products categorized as "Trending" and "Available Collections"
- Shows product image, name, price, rating, and "sold out" status

### 🔍 Product Detail Page
- Displays detailed view of each product (description, reviews, price, quantity control)
- Includes “Add to Cart” functionality

### 🛒 Cart Page
- Items added to cart persist using React Context
- Quantity increment/decrement controls
- Option to remove items from the cart
- Total price calculated dynamically

### 🎯 Header
- Responsive navigation with hamburger menu for mobile
- Cart icon shows total item count (badge)
- User icon as placeholder
- Search bar available to navigate to product detail pages

### 📱 Responsive Design
- Mobile and tablet-friendly layout using custom CSS and media queries

---

## 🎁 Bonus Features

### ✅ Search Bar (Header)
- Users can type product names and navigate to its detail page (e.g., typing "cream" redirects to `/product/1` if matched)

### 🧠 Context API Integration
- Global cart state managed via `React Context` (`CartContext.js`)

### 🌈 Smooth UI/UX
- Clean CSS styling with hover effects, badge indicators, and icon support (using `react-icons`)
- Image-based card layout for visual appeal

### 🧪 Component-Based Architecture
- Reusable components: `Header`, `Footer`.
