import { Product } from "../models/productModel.js";

export const createProduct = async(req, res)=>{
    try {
        const { name, description, price, stock, category, images } = req.body;
        const product = await Product.create({ name, description, price, stock, category, images });
        res.status(201).json(product);
    } catch (error) {
        console.log(error)
    }
}

export const getAllProducts = async(req, res)=>{
    try {
        const product = await Product.find();
        res.status(200).json(product);
    } catch (error) {
        console.log(error)
    }
}

export const getProductById = async(req, res)=>{
    try {
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json("Product not found");
        }
        res.status(200).json(product);
    } catch (error) {
        console.log(error)
    }
}


export const updateProduct = async(req, res)=>{
    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updateProduct);
    } catch (error) {
        console.log(error)
    }
}


export const deleteProduct = async(req, res)=>{
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteProduct);
    } catch (error) {
        console.log(error)
    }
}