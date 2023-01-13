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

// {
//     "name": "к100во36 Руднев",
//     "date": "12.01,2023 19.06",
//     "card": 1234567812345678,
//     "point": "Rosneft",
//     "address": "Ростовская область, Новочеркасск, Ростовское шоссе",
//     "fuelName": "ДТ",
//     "fuelCount": 70,
//     "coast": 4028
// }
