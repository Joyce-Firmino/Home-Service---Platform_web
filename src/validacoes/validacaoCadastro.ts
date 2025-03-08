import { z } from "zod";

// Função de validação para CNPJ
function validaCnpj(cnpj: string): boolean {
  const padraoCNPJ = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
  return padraoCNPJ.test(cnpj);
}

// Função de validação para Telefone
const validaTelefone = (telefone: string): boolean => {
  const padraoTelefone = /^\(\d{2}\) \d{4}-\d{4}$/;
  return padraoTelefone.test(telefone);
};

// Esquema de validação do prestador
export const UserSchemaRegisterCadastro = z.object({
  nome: z
    .string()
    .trim()
    .min(1, "Nome é obrigatório")
    .min(3, "O nome deve ter no mínimo 3 caracteres"),
  
  email: z
    .string()
    .trim()
    .min(1, "E-mail é obrigatório")
    .email("E-mail inválido"),
  
  senha: z
    .string()
    .trim()
    .min(1, "Senha é obrigatória")
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
  
  telefone: z
    .string()
    .trim()
    .min(1, "Telefone é obrigatório")
    .refine((value) => validaTelefone(value), {
      message: "Telefone incorreto: digite no padrão (XX) XXXX-XXXX.",
    }),
  
  cnpj: z
    .string()
    .trim()
    .min(1, "CNPJ é obrigatório")
    .refine((value) => validaCnpj(value), {
      message: "CNPJ incorreto: digite no padrão XX.XXX.XXX/XXXX-XX.",
    }),
  
  horarioDisponibilidade: z
    .string()
    .trim()
    .min(1, "Horário de disponibilidade é obrigatório"),
});

export type UserSchemaRegisterCadastroType = z.infer<typeof UserSchemaRegisterCadastro>;
