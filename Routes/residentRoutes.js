const express = require('express');
const router = express.Router();
const residentController = require('../controllers/residentController/residentController.js');

router.get('/', residentController.getAllResidents);
router.get('/:residentId', residentController.getSingleResident);
router.post('/', residentController.createResident);
router.put('/:residentId', residentController.updateResident);
router.delete('/:residentId', residentController.deleteResident);

module.exports = router;