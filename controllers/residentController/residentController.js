const express = require('express');
const Resident = require('../../models/Resident.js');


// List of all residents
const getAllResidents = async (req, res) => {
    try {
        const residentList = await Resident.find();
        res.status(200).json(residentList);
    } catch (error) {
        console.log(error);
    }
};


// Resident by ID
const getSingleResident = async (req, res) => {
    try {
        const getResident = await Resident.findById(req.params.residentId);
        if (!getResident) {
            res.status(404);
            throw new Error('Resident not found.');
        }
        res.status(200).json(getResident);
    } catch (error) {
        console.log(error);
    }
};


// Create resident
const createResident = async (req, res) => {
    try {
        const newResident = await Resident.create(req.body);
        res.status(201).json(newResident);
    } catch (error) {
        console.log(error);
    }
};


// Update resident
const updateResident = async (req, res) => {
    try {
        const updatedResident = await Resident.findByIdAndUpdate(req.params.residentId, req.body, {new: true});
        if (!updatedResident) {
            res.status(404);
            throw new Error('Resident not found.');
        }
        res.status(200).json(updatedResident);
    } catch (error) {
        console.log(error);
    }
};


// Delete resident
const deleteResident = async (req, res) => {
    try {
        const deletedResident = await Resident.findByIdAndDelete(req.params.residentId);
        if (!deletedResident) {
            res.status(404);
            throw new Error('Resident not found');
        }
        res.status(200).json(deletedResident);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getAllResidents, getSingleResident, createResident, updateResident, deleteResident };