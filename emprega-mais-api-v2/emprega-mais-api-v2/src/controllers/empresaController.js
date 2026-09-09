import { bdEstatico } from '../data/mockBd.js';

export const registrarEmpresa = (req, res) => {
  const { cnpj, senha, razaoSocial, segmento, cidade } = req.body;
  
  if (!cnpj || !senha || !razaoSocial) {
    return res.status(400).json({ erro: "CNPJ, Senha e Razão Social são obrigatórios." });
  }

  const empresaExiste = bdEstatico.empresas.find(e => e.cnpj === cnpj);
  if (empresaExiste) {
    return res.status(409).json({ erro: "Este CNPJ já está cadastrado." });
  }

  const novaEmpresa = {
    idEmpresa: bdEstatico.empresas.length + 1,
    cnpj, senha, razaoSocial, segmento, cidade, status: "ATIVO"
  };

  bdEstatico.empresas.push(novaEmpresa);

  return res.status(201).json({ 
    mensagem: "Empresa cadastrada com sucesso!", 
    empresa: { idEmpresa: novaEmpresa.idEmpresa, razaoSocial: novaEmpresa.razaoSocial }
  });
};

export const loginEmpresa = (req, res) => {
  const { cnpj, senha } = req.body;

  if (!cnpj || !senha) return res.status(400).json({ erro: "CNPJ e senha são obrigatórios." });

  const empresa = bdEstatico.empresas.find(e => e.cnpj === cnpj && e.senha === senha);

  if (!empresa) return res.status(401).json({ erro: "CNPJ ou senha inválidos." });

  return res.status(200).json({ 
    mensagem: "Login efetuado com sucesso!", 
    empresa: { idEmpresa: empresa.idEmpresa, razaoSocial: empresa.razaoSocial }
  });
};

export const listarEmpresas = (req, res) => res.status(200).json(bdEstatico.empresas);