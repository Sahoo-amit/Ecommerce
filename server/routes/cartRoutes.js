import express from 'express';
import {addToCart, getCart, updateCart, clearCart, removeCart} from '../controllers/cartController.js'
import { auth } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/',auth, getCart)
router.post('/',auth, addToCart)
router.put('/', updateCart)
router.delete('/',auth, clearCart)
router.delete('/:id',auth, removeCart)

export default router