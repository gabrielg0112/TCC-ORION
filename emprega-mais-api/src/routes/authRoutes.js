import { Router } from 'express';
// Adicionamos o listarCandidatos aqui na importação
import { registrarCandidato, loginCandidato, listarCandidatos } from '../controllers/authController.js';

const router = Router();

router.post('/cadastro', registrarCandidato);
router.post('/login', loginCandidato);

// Nova rota GET para ver os dados no navegador
router.get('/candidatos', listarCandidatos);

export default router;