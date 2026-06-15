const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const validator = require('validator');
const Contact = require('../models/Contact');
const { sendContactEmail } = require('../utils/sendEmail');
const { sanitizeBody } = require('../middleware/sanitize');

// Strict per-route rate limiter: max 5 submissions per 15 minutes per IP
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5,
    message: {
        error: 'Too many messages sent from this IP. Please try again after 15 minutes.',
    },
    standardHeaders: true,   // Return rate limit info in RateLimit-* headers
    legacyHeaders: false,     // Disable X-RateLimit-* headers
    skipSuccessfulRequests: false,
});

// Field length limits (must match Mongoose schema maxlength)
const LIMITS = {
    name:    100,
    email:   254,
    subject: 200,
    message: 2000,
};

router.post('/', contactLimiter, sanitizeBody, async (req, res) => {
    const { name, email, subject, message } = req.body;

    // --- Presence check ---
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please provide name, email and message.' });
    }

    // --- Type check: ensure all fields are strings ---
    if (
        typeof name !== 'string' ||
        typeof email !== 'string' ||
        typeof message !== 'string' ||
        (subject !== undefined && typeof subject !== 'string')
    ) {
        return res.status(400).json({ error: 'Invalid field types.' });
    }

    // --- Field length check ---
    if (name.length > LIMITS.name) {
        return res.status(400).json({ error: `Name must be ${LIMITS.name} characters or fewer.` });
    }
    if (email.length > LIMITS.email) {
        return res.status(400).json({ error: 'Email address is too long.' });
    }
    if (subject && subject.length > LIMITS.subject) {
        return res.status(400).json({ error: `Subject must be ${LIMITS.subject} characters or fewer.` });
    }
    if (message.length > LIMITS.message) {
        return res.status(400).json({ error: `Message must be ${LIMITS.message} characters or fewer.` });
    }

    // --- Email format validation ---
    if (!validator.isEmail(email)) {
        return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    // --- Normalize email ---
    const normalizedEmail = validator.normalizeEmail(email) || email.toLowerCase();

    try {
        // Capture submitter IP for audit trail (stored in DB, never returned to client)
        const submitterIp =
            (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
            req.socket?.remoteAddress ||
            'unknown';

        const newContact = await Contact.create({
            name,
            email: normalizedEmail,
            subject: subject || '',
            message,
            ip: submitterIp,
        });

        // Fire-and-forget email notification
        sendContactEmail({ name, email: normalizedEmail, subject, message }).catch(err => {
            console.error('Nodemailer Error:', err.message);
        });

        // Return success without echoing back the stored document (avoid data leak)
        res.status(201).json({
            success: true,
            message: 'Message sent successfully!',
        });
    } catch (err) {
        // Handle Mongoose validation errors distinctly
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(e => e.message);
            return res.status(400).json({ error: messages.join(' ') });
        }
        console.error('Server Error:', err.message);
        res.status(500).json({ error: 'Internal server error. Please try again later.' });
    }
});

module.exports = router;

