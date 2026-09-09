import { bdEstatico } from '../data/mockBd.js';

export const registrarAdmin = (req, res) => {
  const { nome, email, senha } = req.body;
  
  if (!nome || !email || !senha) return res.status(400).json({ erro: "Nome, E-mail e Senha são obrigatórios." });

  const adminExiste = bdEstatico.administradores.find(a => a.email === email);
  if (adminExiste) return res.status(409).json({ erro: "Este e-mail já está cadastrado." });

  const novoAdmin = {
    idAdministrador: bdEstatico.administradores.length + 1,
    nome, email, senha, nivelAcesso: "PADRAO", status: "ATIVO"
  };

  bdEstatico.administradores.push(novoAdmin);

  return res.status(201).json({ 
    mensagem: "Administrador cadastrado com sucesso!", 
    admin: { idAdministrador: novoAdmin.idAdministrador, nome: novoAdmin.nome }
  });
};

export const loginAdmin = (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) return res.status(400).json({ erro: "E-mail e senha são obrigatórios." });

  const admin = bdEstatico.administradores.find(a => a.email === email && a.senha === senha);

  if (!admin) return res.status(401).json({ erro: "E-mail ou senha inválidos." });

  return res.status(200).json({ 
    mensagem: "Login efetuado com sucesso!", 
    admin: { idAdministrador: admin.idAdministrador, nome: admin.nome }
  });
};

export const listarAdmins = (req, res) => res.status(200).json(bdEstatico.administradores);