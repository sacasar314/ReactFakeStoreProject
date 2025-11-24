# FakeStore E-Commerce App

A simple React e-commerce application built with React, React Router, React Bootstrap, Axios, and FakeStoreAPI. The app demonstrates CRUD operations (Create, Read, Update, Delete) using a mock REST API.

---

## Features

### Home Page
- Welcome message and introduction
- Button to navigate to the Product Listing page

### Product Listing Page
- Fetches products from: https://fakestoreapi.com/products
- Displays product image, title, and formatted price
- Each product has a "View Details" button

### Product Details Page
- Fetches product by ID using `useParams()`
- Displays full product information
- Includes:
  - Edit Product button
  - Delete Product button (with confirmation)
  - Back to Products button

### Add Product Page
- React Bootstrap form
- Fields: title, price, description, category
- Sends POST request to FakeStoreAPI
- Redirects back to Product Listing
- NOTE: FakeStoreAPI does not persist created products

### Edit Product Page
- Pre-filled form using product data
- Sends PUT request to FakeStoreAPI
- Shows success message after updating

### Delete Product
- DELETE request to FakeStoreAPI
- Confirmation modal before deletion
- Redirects back to Product Listing

### Navigation Bar
- React Bootstrap Navbar
- Links to Home, Products, Add Product
- Fully responsive

---

## Tech Stack

- React
- React Router
- Axios
- React Bootstrap
- FakeStoreAPI
- Vite

---
