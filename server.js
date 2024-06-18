const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const app = express();

const dbConnect = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
}

mongoose.connection.on('Connected', () => {
    console.log('connected to db');
});

app.use(cors());
app.use(express.json());

const propertyRoutes = require('./Routes/propertyRoutes.js');
app.use('/properties', propertyRoutes);


app.listen(3000, () => {
    console.log('Working fine');
});