const mongoose = require('mongoose');

const Contact = mongoose.model(
    "API-XP",
    {
        email: {
            type: String, required: true
        },
        message: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now()
        },

    },"contact"
)
module.exports = { Contact };