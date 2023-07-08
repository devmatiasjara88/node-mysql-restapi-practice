import { Router } from 'express';
import { getEmployees, createEmployee, getEmployee, updateEmployee, deleteEmployee } from '../controllers/employees.controller.js'

const router = Router();
router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployee);
router.post('/employees', createEmployee);
// router.put('/employees/:id', updateEmployee); // actualiza todo
router.patch('/employees/:id', updateEmployee); // actualiza de forma parcial
router.delete('/employees/:id', deleteEmployee);

export default router;