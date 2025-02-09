import { Order} from '../models/orderModel.js'

export const createOrder = async(req, res)=>{
    try {
        const { products, totalPrice, address } = req.body
        const userId = req.user._id;
        const order = await Order.create({ user: userId, products, totalPrice, address });
        res.status(201).json(order);
    } catch (error) {
        console.log(error)
    }
}

export const getAllOrders = async(req, res)=>{
    try {
        const orders = await Order.find().populate('user','name email')
        res.status(200).json(orders)
    } catch (error) {
        console.log(error)
    }
}

export const getUserOrders = async(req, res)=>{
    try {
        const orders = await Order.find({user: req.user._id})
        res.status(200).json(orders)
    } catch (error) {
        console.log(error)
    }
}

export const updateOrderStatus = async(req, res)=>{
    try {
        const { orderStatus, paymentStatus } = req.body
        const order = await Order.findByIdAndUpdate(req.params.id, {orderStatus, paymentStatus}, {new: true})
        if(!order){
            return res.status(404).json("Order not found")
        }
        res.status(200).json(order)
    } catch (error) {
        console.log(error)
    }
}

export const deleteOrder = async(req, res)=>{
    try {
        const deleteOrder = await Order.findByIdAndDelete(req.params.id);
        if(!deleteOrder){
            return res.status(404).json("Order not found")
        }
        res.status(200).json(deleteOrder);
    } catch (error) {
        console.log(error)
    }
}