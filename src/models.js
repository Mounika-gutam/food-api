const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true
    },
    category: String,
    imageUrl: String
});

const FoodItem = mongoose.model('FoodItem', foodItemSchema);

module.exports = FoodItem;
