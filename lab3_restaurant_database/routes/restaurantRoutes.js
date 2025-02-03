const express = require('express');
const Restaurant = require('../models/Restaurant');
const router = express.Router();

// 1. Get all restaurants
router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 2. Get restaurants by cuisine
router.get('/cuisine/:cuisine', async (req, res) => {
    try {
        const restaurants = await Restaurant.find({ cuisine: req.params.cuisine });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 3. Get restaurants sorted by restaurant_id
router.get('/', async (req, res) => {
    try {
        const sortBy = req.query.sortBy === 'DESC' ? -1 : 1;
        const restaurants = await Restaurant.find({}, { _id: 1, cuisines: 1, name: 1, city: 1, restaurant_id: 1 }).sort({ restaurant_id: sortBy });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 4. Get restaurants with Delicatessen cuisine, not in Brooklyn, sorted by name
router.get('/Delicatessen', async (req, res) => {
    try {
        const restaurants = await Restaurant.find({ cuisine: "Delicatessen", city: { $ne: "Brooklyn" } }, { _id: 0, cuisine: 1, name: 1, city: 1 })
            .sort({ name: 1 });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
