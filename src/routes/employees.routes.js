import { Router } from "express";
import { getEmployees, createEmployee, updateEmployee, deleteEmployee, getEmployeebyId } from "../controllers/employees.controller.js";

const router = Router();


router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployeebyId);
router.post('/employees', createEmployee);
router.delete('/employees/:id', deleteEmployee);
router.put('/employees/:id', updateEmployee);

export default router;