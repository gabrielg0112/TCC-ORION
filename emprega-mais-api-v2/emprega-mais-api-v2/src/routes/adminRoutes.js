import { Router } from 'express';
import { registrarAdmin, loginAdmin, listarAdmins } from '../controllers/adminController.js';

const router = Router();
router.post('/cadastro', registrarAdmin);
router.post('/login', loginAdmin);
router.get('/', listarAdmins);
export default router;