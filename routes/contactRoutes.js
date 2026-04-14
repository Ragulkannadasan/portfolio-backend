const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// POST a new message
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newMessage = new Message({ name, email, message });
        await newMessage.save();
        res.status(201).json({ message: 'Message sent successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Error sending message', error: err.message });
    }
});

module.exports = router;
