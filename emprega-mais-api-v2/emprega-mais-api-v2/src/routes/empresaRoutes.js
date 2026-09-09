import { Router } from 'express';
import { registrarEmpresa, loginEmpresa, listarEmpresas } from '../controllers/empresaController.js';

const router = Router();
router.post('/cadastro', registrarEmpresa);
router.post('/login', loginEmpresa);
router.get('/', listarEmpresas);
export default router;