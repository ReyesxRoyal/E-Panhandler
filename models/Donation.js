const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    donorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ['food', 'clothing', 'monetary'],
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'processed', 'delivered'],
        default: 'pending'
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
}, {
    timestamps: true
});

donationSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Donation', donationSchema);
