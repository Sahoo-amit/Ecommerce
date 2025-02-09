import {Cart} from '../models/cartModel.js'
import {Product} from '../models/productModel.js'
import mongoose from 'mongoose'

export const addToCart = async(req, res)=>{
    try {
        const userId = req.user._id;
        const { productId, quantity } = req.body;
        const product = await Product.findById(new mongoose.Types.ObjectId(productId));
        if(!product){
            return res.status(404).json("Product not found");
        }
        let cart = await Cart.findOne({ user: userId });
        if(!cart){
            cart = new Cart({ user: userId, products: [{ product: productId, quantity }] });
        }else{
            const existingProduct = cart.products.find((item) => item.product.toString() === productId);
            if(existingProduct){
                existingProduct.quantity += quantity;
            }else{
                cart.products.push({ product: productId, quantity });
            }
        }
        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        console.log(error)
    }
}

export const getCart = async(req,res)=>{
    try {
        const userId = req.user._id;
        const cart = await Cart.findOne({ user: userId }).populate('products.product');
        res.status(200).json(cart);
    } catch (error) {
        console.log(error)
    }
}

export const updateCart = async(req, res)=>{
    try {
        const userId = req.user._id;
        const { productId, quantity } = req.body;
        const cart = await Cart.findOne({ user: userId });
        if(!cart){
            return res.status(404).json("Cart not found");
        }
        const productIndex = cart.products.findIndex((item) => item.product.toString() === productId);
        if(productIndex === -1){
            return res.status(404).json("Product not found in cart");
        }
        cart.products[productIndex].quantity = quantity;
        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        console.log(error)
    }
}

export const removeCart = async(req, res)=>{
    try {
        const userId = req.user._id;
        const { productId } = req.params;
        const cart = await Cart.findOneAndDelete({ product: productId });
        if(!cart){
            return res.status(404).json("Cart not found");
        }
        
        res.status(200).json(cart);
    } catch (error) {
        console.log(error)
    }
}

export const clearCart = async(req, res)=>{
    try {
        const userId = req.user._id;
        await Cart.findOneAndDelete({ user: userId });
        res.status(200).json("Cart cleared");
    } catch (error) {
        console.log(error)
    }
}