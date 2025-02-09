import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
        Proudct: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true},
        quantity: { type: Number, required: true },
    }
  ],
  totalPrice: { type: Number, required: true },
  address: { type: String, required: true },
  paymentStatus: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
  orderStatus: { type: String, enum: ['processing', 'shipped', 'delivered'], default: 'processing' },
});

export const Order = mongoose.model("Order", orderSchema)