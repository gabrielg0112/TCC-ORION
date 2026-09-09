import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import empresaRoutes from './routes/empresaRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Rotas da aplicação
app.use('/api/candidatos', authRoutes); // Mantive a do candidato
app.use('/api/empresas', empresaRoutes); // Novas rotas de empresa
app.use('/api/admins', adminRoutes);     // Novas rotas de admin

export default app;