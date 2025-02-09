import express from 'express'
import {getAllOrders, getUserOrders, createOrder, updateOrderStatus, deleteOrder} from '../controllers/orderController.js'

const router = express.Router();

router.get('/', getAllOrders)
router.get('/user', getUserOrders)
router.post('/', createOrder)
router.put('/:id', updateOrderStatus)   
router.delete('/:id', deleteOrder)

export default router