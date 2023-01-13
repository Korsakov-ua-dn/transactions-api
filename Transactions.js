import mongoose from 'mongoose';

// Transactions Schema
const transactionsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    date: {type: String, required: true},
    card: {type: Number, required: true},
    point: {type: String},
    address: {type: String},
    fuelName: {type: String, required: true},
    fuelCount: {type: Number, required: true},
    coast: {type: Number, required: true},
})

// Creating model objects
export const Transactions = mongoose.model('transactions', transactionsSchema);