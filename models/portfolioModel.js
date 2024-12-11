// models/portfolioModel.js
const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title'],
        trim: true,
        maxlength: [100, 'Title cannot be more than 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Please provide a description']
    },
    image: {
        type: String,
        required: [true, 'Please provide an image']
    },
    category: {
        type: String,
        required: [true, 'Please provide a category'],
        enum: ['web', 'mobile', 'design', 'other']
    },
    technologies: [{
        type: String
    }],
    liveUrl: String,
    githubUrl: String,
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

module.exports = mongoose.model('Portfolio', portfolioSchema);