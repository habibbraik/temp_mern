import mongoose from 'mongoose';

const SingleOrderItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subtitle: { type: String, required: true },
  avatar: { type: String, required: true,default: '/uploads/example.jpeg' },
  price: { type: Number, required: true },
  amount: { type: Number, required: true },   
  flavors: {
    type: [String],
    default: ['Strawberry', 'Cherry', 'Lime'],
    enum: ['Strawberry', 'Cherry', 'Lime'],
    required: true,
  },
  sizes: {
    type: [String],
    default: ['1kg', '2kg', '5kg'],
    enum: ['1kg', '2kg', '5kg'],
    required: true,
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: 'Product',
    required: true,
  },
});

const OrderSchema = new mongoose.Schema(
  {
    shippingFee: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
      default: -300,
    },
    total: {
      type: Number,
      required: true,
    },
    totalAmount:{
      type: Number,
      required: true,
    },
    orderItems: [SingleOrderItemSchema],
    status: {
      type: String,
      enum: ['Processing', 'Cancelled', 'Completed'],
      default: 'Processing',
    },
    address: {
      type: String,
      required: true,
    },
    wilaya: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    house:{
      type:String
    },
    codePostal: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Order', OrderSchema);
