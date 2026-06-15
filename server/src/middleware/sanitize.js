/**
 * sanitize.js
 * Middleware to strip HTML/script tags and trim whitespace from all string
 * fields in req.body. Prevents stored XSS and basic injection payloads from
 * ever reaching the database or email transport.
 */

/**
 * Strips HTML tags and trims whitespace from a string value.
 * @param {string} value
 * @returns {string}
 */
function stripHtml(value) {
    if (typeof value !== 'string') return value;
    return value
        .replace(/<[^>]*>/g, '')        // strip HTML tags
        .replace(/&lt;/gi, '')           // strip encoded < 
        .replace(/&gt;/gi, '')           // strip encoded >
        .replace(/javascript:/gi, '')    // strip JS protocol
        .replace(/on\w+\s*=/gi, '')      // strip inline event handlers (onclick=, onerror=, etc.)
        .trim();
}

/**
 * Recursively sanitizes all string fields in an object.
 * @param {object} obj
 * @returns {object}
 */
function sanitizeObject(obj) {
    if (!obj || typeof obj !== 'object') return obj;
    const sanitized = {};
    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'string') {
            sanitized[key] = stripHtml(value);
        } else if (typeof value === 'object' && value !== null) {
            sanitized[key] = sanitizeObject(value);
        } else {
            sanitized[key] = value;
        }
    }
    return sanitized;
}

/**
 * Express middleware: sanitize req.body in-place.
 */
const sanitizeBody = (req, res, next) => {
    if (req.body && typeof req.body === 'object') {
        req.body = sanitizeObject(req.body);
    }
    next();
};

module.exports = { sanitizeBody, stripHtml };
