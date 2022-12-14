const express = require('express');
const router = express.Router();

const {getEmployee, addEmployee, updateEmployee, deleteEmployee} = require('../controller/employeeHandler');
const isAuthorized = require('../middlewares/auth');

router.get('/get', isAuthorized, getEmployee)
router.post('/add', addEmployee);
router.put('/update', updateEmployee);
router.delete('/delete', deleteEmployee);

module.exports = router;