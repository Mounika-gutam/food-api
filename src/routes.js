const express = require('express');
const router = express.Router();
const FoodItem = require('./models');

// Seed data
const seedData = [
    {
        name: "Pizza",
        description: "Delicious cheese pizza",
        price: 12.99,
        category: "Fast Food",
        imageUrl: "http://example.com/pizza.jpg"
    },
    {
        name: "Burger",
        description: "Juicy beef burger",
        price: 8.99,
        category: "Fast Food",
        imageUrl: "http://example.com/burger.jpg"
    },
    {
        name: "Pasta",
        description: "Creamy Alfredo pasta",
        price: 10.99,
        category: "Italian",
        imageUrl: "http://example.com/pasta.jpg"
    }
];

// Seed the database with initial data
router.get('/seed', async (req, res) => {
    try {
        await FoodItem.deleteMany({});
        const foodItems = await FoodItem.insertMany(seedData);
        res.status(201).send(foodItems);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all food items
router.get('/food', async (req, res) => {
    try {
        const foodItems = await FoodItem.find();
        res.status(200).send(foodItems);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
