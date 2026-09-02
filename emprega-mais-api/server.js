import app from './src/app.js';

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`- Rota de Login: POST http://localhost:${PORT}/api/auth/login`);
  console.log(`- Rota de Cadastro: POST http://localhost:${PORT}/api/auth/cadastro`);
});