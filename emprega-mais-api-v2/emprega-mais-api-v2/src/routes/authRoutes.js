import { Router } from 'express';
import { registrarCandidato, loginCandidato, listarCandidatos } from '../controllers/authController.js';

const router = Router();
router.post('/cadastro', registrarCandidato);
router.post('/login', loginCandidato);
router.get('/', listarCandidatos);
export default router;