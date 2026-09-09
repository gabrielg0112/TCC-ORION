import { bdEstatico } from '../data/mockBd.js';

export const registrarCandidato = (req, res) => {
  const { nome, telefone, dataNascimento, senha } = req.body;
  if (!nome || !telefone || !dataNascimento || !senha) return res.status(400).json({ erro: "Todos os campos são obrigatórios." });
  
  const telefoneExiste = bdEstatico.candidatos.find(c => c.telefone === telefone);
  if (telefoneExiste) return res.status(409).json({ erro: "Este telefone já está cadastrado." });
  
  const novoCandidato = { idCandidato: bdEstatico.candidatos.length + 1, nome, telefone, dataNascimento, senha, status: "ATIVO" };
  bdEstatico.candidatos.push(novoCandidato);
  return res.status(201).json({ mensagem: "Cadastro realizado com sucesso!", candidato: { idCandidato: novoCandidato.idCandidato, nome: novoCandidato.nome } });
};

export const loginCandidato = (req, res) => {
  const { telefone, senha } = req.body;
  const candidato = bdEstatico.candidatos.find(c => c.telefone === telefone && c.senha === senha);
  if (!candidato) return res.status(401).json({ erro: "Telefone ou senha inválidos." });
  return res.status(200).json({ mensagem: "Login efetuado com sucesso!", candidato: { idCandidato: candidato.idCandidato, nome: candidato.nome } });
};

export const listarCandidatos = (req, res) => res.status(200).json(bdEstatico.candidatos);