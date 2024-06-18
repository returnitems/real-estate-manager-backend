const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController/propertyController.js');

router.get('/', propertyController.getProperties);
router.get('/:propertId', propertyController.getSingleProperty);
router.post('/', propertyController.createProperty);
router.put('/:propertyId', propertyController.updateProperty);
router.delete('/:propertyId', propertyController.deleteProperty);

module.exports = router;