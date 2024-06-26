const express = require('express');
const Property = require('../../models/Property.js')


// Get all properties
const getProperties = async (req, res) => {
    try {
        const propertiesList = await Property.find({});
        res.status(200).json(propertiesList);
    } catch (error) {
        console.log(error);
    }
};


// Get a single property by ID
const getSingleProperty = async (req, res) => {
    try {
        const property = await Property.findById(req.params.propertyId);
        if (!property) {
            res.status(404);
            throw new Error('Property not found.');
        }
        res.status(200).json(property);
    } catch (error) {
        console.log(error);
    }
};


// Create a new property
const createProperty = async (req, res) => {
    try {
        const newProperty = await Property.create(req.body);
        res.status(201).json(newProperty);
    } catch (error) {
        console.log(error);
    }
};


// Update property by ID
const updateProperty = async (req, res) => {
    try {
        const updatedProperty = await Property.findByIdAndUpdate(req.params.propertyId, req.body, {new: true});
        if (!updatedProperty) {
            res.status(404);
            throw new Error('Property not found.');
        }
        res.status(200).json(updatedProperty);
    } catch (error) {
        console.log(error);
    }
};


// Delete a property
const deleteProperty = async (req, res) => {
    try {
        const deletedProperty = await Property.findByIdAndDelete(req.params.propertyId);
        if (!deletedProperty) {
            res.status(404);
            throw new Error('Property not found.');
        }
        res.status(200).json(deletedProperty);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getProperties, getSingleProperty, createProperty, updateProperty, deleteProperty };


// Add a resident to an apartment
// const addResidentToApartment = async (req, res) => {
//     try {
//         const { name, age, occupation, leaseExpiration } = req.body;
//         const property = await Property.findById(req.params.propertyId);

//         if (property) {
//             const apartment = property.apartments.id(req.params.apartmentId);
//             if (apartment) {
//                 const resident = new Resident({
//                     name,
//                     age,
//                     occupation,
//                     apartment: apartment.number,
//                     leaseExpiration,
//                 });

//                 await resident.save();
//                 apartment.resident = resident._id;
//                 await property.save();
//                 res.status(201).json(resident);
//             } else {
//                 res.status(404).json({ message: 'Apartment not found' });
//             }
//         } else {
//             res.status(404).json({ message: 'Property not found' });
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };