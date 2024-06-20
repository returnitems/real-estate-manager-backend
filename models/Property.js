const mongoose = require('mongoose');

// Changing the app to dynamically include apartments and add residents to those apartments after property creation. This change is due to non relational nature of MongoDB.
// const ResidentSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     age: {
//         type: Number,
//         required: true,
//     },
//     occupation: {
//         type: String,
//         required: true,
//     },
//     apartment: {
//         type: String,
//         required: true,
//     },
//     leaseExpiration: {
//         type: Number,
//         required: true,
//     },
// });

// const Resident = mongoose.model('Resident', ResidentSchema);

// const ApartmentSchema = new mongoose.Schema({
//     number: {
//         type: String,
//         required: true,
//     },
//     resident: {
//         type: ResidentSchema,
//         default: null,
//     },
// });

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