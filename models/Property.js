const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    apartments: {
        type: Number,
        required: true,
    },
});

const Property = mongoose.model('Property', PropertySchema);

module.exports = Property;