const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    price: Number,
    link: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
