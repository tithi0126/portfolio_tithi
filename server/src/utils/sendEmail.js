const nodemailer = require('nodemailer');

/**
 * Escapes HTML special characters to prevent XSS in email body.
 * @param {string} str
 * @returns {string}
 */
function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
}

const sendContactEmail = async (contactData) => {
    const { name, email, subject, message } = contactData;

    // Escape all user-supplied values before HTML interpolation
    const safeName    = escapeHtml(name);
    const safeEmail   = escapeHtml(email);
    const safeSubject = escapeHtml(subject || 'No Subject');
    const safeMessage = escapeHtml(message);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.NOTIFY_EMAIL || process.env.EMAIL_USER,
        subject: `New Portfolio Message: ${safeSubject}`,
        text: `You have received a new message from your portfolio.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || 'No Subject'}\n\nMessage:\n${message}`,
        html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                <h2 style="color: #536878; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Portfolio Inquiry</h2>
                <p><strong>Name:</strong> ${safeName}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                <p><strong>Subject:</strong> ${safeSubject}</p>
                <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
                    <p><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap;">${safeMessage}</p>
                </div>
                <hr style="margin-top: 30px; border: 0; border-top: 1px solid #eee;" />
                <p style="font-size: 12px; color: #999;">This email was sent from your portfolio contact form.</p>
            </div>
        `,
    };

    return transporter.sendMail(mailOptions);
};

module.exports = { sendContactEmail };

