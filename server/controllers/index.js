import Product from '../models/product.js';
import mongoose from 'mongoose';

export const addProduct = async (req, res) => {

    const product = req.body;

    if (!product.name || !product.price || !product.img) {
        return res.status(400).json({ success: false, message: "Please provide information in all the fields." })
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Product Server Creation Error: ", error);
        res.status(500).json({ success: true, message: `Product Server Creation Error: ${error.message}` });
    }
}

export const deleteProduct = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json(
            {
                success: false,
                message: `Product Server Delete Error: ID not found : ${error.message}`
            })
    };

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: `Product with ID: ${id}` });
    } catch (error) {
        console.error("Product Server Deletion Error: ", error);
        res.status(500).json({ success: true, message: `Product Server Deletion Error: ${error.message}` });
    }
}

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.error("Product Server Fetching Error: ", error);
        res.status(500).json({ success: true, message: `Product Server Fetching Error: ${error.message}` });
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json(
            {
                success: false,
                message: `Product Server Update Error: ID not found : ${error.message}`
            })
    };

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        console.error("Product Server Update Error: ", error);
        res.status(500).json({ success: true, message: `Product Server Update Error: ${error.message}` });
    }
}