const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel'); // Change the path as per your project structure

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/easybuy');
const db = mongoose.connection;

// Endpoint to fetch all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json({ products });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Multiple products insertion
const productsToAdd = [
    {
        name: "Men Solid Round Neck Polyester Black T-Shirt",
        imageUrl: "https://ecommerce-ayq4.onrender.com/images/1.webp",
        price: 250,
        link: "https://fktr.in/ZTeWS64"
    },
    {
        name: "Men Typography Round Neck Cotton Blend Light Blue T-Shirt",
        imageUrl: "https://ecommerce-ayq4.onrender.com/images/2.webp",
        price: 199,
        link: "https://fktr.in/wVUQ8H4"
    },
    {
        name: "Men Colorblock Casual Jackete",
        imageUrl: "https://ecommerce-ayq4.onrender.com/images/2.webp",
        price: 499,
        link: "https://fktr.in/eRDfnEm"
    },
    {
        name: "Winter's Ultra Soft & Warm Neck Warmer & Cap",
        imageUrl: "https://ecommerce-ayq4.onrender.com/images/2.webp",
        price: 80,
        link: "https://fktr.in/6Nn93Bg"
    },
    {
        name: "Men Colorblock Casual Jacket",
        imageUrl: "https://ecommerce-ayq4.onrender.com/images/2.webp",
        price: 499,
        link: "https://fktr.in/K4A4dph"
    },
    {
        name: "Men Solid Casual Jacket",
        imageUrl: "https://ecommerce-ayq4.onrender.com/2.webp",
        price: 419,
        link: "https://fktr.in/Es9IeEu"
    },
    {
        name: "Men Colorblock Casual Jacket",
        imageUrl: "https://ecommerce-ayq4.onrender.com/images/2.webp",
        price: 499,
        link: "https://fktr.in/sl7ef9t"
    },
    {
        name: "Men Colorblock Casual Jacket",
        imageUrl: "https://ecommerce-ayq4.onrender.com/images/2.webp",
        price: 499,
        link: "https://fktr.in/sqinVAV"
    },
    // Add more products in the same format
];

// Insert products into the database
Product.insertMany(productsToAdd)
  .then(() => {
    console.log('Products added successfully');
  })
  .catch((err) => {
    console.error('Error adding products:', err);
  });
  module.exports = { productsToAdd, app };
