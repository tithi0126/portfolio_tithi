const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
require('dotenv').config();

const contactRouter = require('./src/routes/contact');

const app = express();
const PORT = process.env.PORT || 3000;

// ─── Security: HTTP Headers ──────────────────────────────────────────────────
// Helmet sets ~15 security headers: X-Frame-Options, X-Content-Type-Options,
// Strict-Transport-Security, X-DNS-Prefetch-Control, Referrer-Policy, etc.
app.use(helmet({
    crossOriginResourcePolicy: { policy: 'same-site' },
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc:  ["'self'"],
            styleSrc:   ["'self'", "'unsafe-inline'"],
            imgSrc:     ["'self'", 'data:'],
            connectSrc: ["'self'"],
            fontSrc:    ["'self'"],
            objectSrc:  ["'none'"],
            frameSrc:   ["'none'"],
        },
    },
}));

// ─── Security: Request Audit Logging ─────────────────────────────────────────
// Morgan 'combined' format includes IP, method, path, status, and user-agent
app.use(morgan('combined'));

// ─── Security: CORS ───────────────────────────────────────────────────────────
// Whitelist only known origins — never falls back to '*'
const ALLOWED_ORIGINS = (process.env.CORS_ORIGIN || 'http://localhost:5173')
    .split(',')
    .map(o => o.trim())
    .filter(Boolean);

app.use(cors({
    origin: (origin, callback) => {
        // Allow server-to-server requests (no origin) only in development
        if (!origin && process.env.NODE_ENV !== 'production') {
            return callback(null, true);
        }
        if (ALLOWED_ORIGINS.includes(origin)) {
            return callback(null, true);
        }
        callback(new Error(`CORS: Origin '${origin}' is not allowed.`));
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: false,                 // No cookies/auth headers needed
}));

// ─── Security: Global Rate Limiting ──────────────────────────────────────────
// Broad limit — per-route limits (e.g. contact) are stricter on top of this
const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,  // 15 minutes
    max: 100,                   // 100 requests per IP per window
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many requests. Please slow down.' },
});
app.use(globalLimiter);

// ─── Body Parsing ─────────────────────────────────────────────────────────────
// 10kb limit prevents large payload attacks
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: false, limit: '10kb' }));

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use('/api/contact', contactRouter);

// Health check — no server fingerprinting
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

// ─── 404 Handler ─────────────────────────────────────────────────────────────
app.use((req, res) => {
    res.status(404).json({ error: 'Not found.' });
});

// ─── Global Error Handler ─────────────────────────────────────────────────────
// Catches CORS errors and any unhandled route errors
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    if (err.message && err.message.startsWith('CORS:')) {
        return res.status(403).json({ error: 'Forbidden: ' + err.message });
    }
    console.error('Unhandled Error:', err.message);
    res.status(500).json({ error: 'Internal server error.' });
});

// ─── Database Connection ──────────────────────────────────────────────────────
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB: TithiPortfolio');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('MongoDB Connection Error:', err.message);
        process.exit(1);
    });

