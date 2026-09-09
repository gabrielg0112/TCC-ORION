import app from './src/app.js';

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`--- ROTAS DISPONÍVEIS ---`);
  console.log(`Candidato: POST /api/candidatos/login | POST /api/candidatos/cadastro | GET /api/candidatos`);
  console.log(`Empresa:   POST /api/empresas/login    | POST /api/empresas/cadastro    | GET /api/empresas`);
  console.log(`Admin:     POST /api/admins/login      | POST /api/admins/cadastro      | GET /api/admins`);
});