const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { sendContactEmail } = require('../utils/sendEmail');

router.post('/', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please provide name, email and message.' });
    }

    try {
        const newContact = await Contact.create({
            name,
            email,
            subject,
            message,
        });

        // Fire and forget email
        sendContactEmail({ name, email, subject, message }).catch(err => {
            console.error('Nodemailer Error:', err);
        });

        res.status(201).json({ 
            success: true, 
            message: 'Message sent successfully!',
            data: newContact 
        });
    } catch (err) {
        console.error('Server Error:', err);
        res.status(500).json({ error: 'Internal server error. Please try again later.' });
    }
});

module.exports = router;
