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
  nome: z.string({ required_error: "Nome é obrigatório" }).trim().min(3, "O nome deve ter no mínimo 3 caracteres"),
  email: z.string({ required_error: "E-mail é obrigatório" }).trim().email("E-mail inválido"),
  senha: z.string({ required_error: "Senha é obrigatória" }).trim().min(6, "A senha deve ter pelo menos 6 caracteres"),
  telefone: z
    .string({ required_error: "Telefone é obrigatório" })
    .refine((value) => validaTelefone(value), {
      message: "Telefone incorreto: digite no padrão (XX) XXXX-XXXX.",
    }),
  cnpj: z
    .string({ required_error: "CNPJ é obrigatório" })
    .trim()
    .refine((value) => validaCnpj(value), {
      message: "CNPJ incorreto: digite no padrão XX.XXX.XXX/XXXX-XX.",
    }),
  horarioDisponibilidade: z
    .string({ required_error: "Horário de disponibilidade é obrigatório" })
    .nonempty("Horário de disponibilidade é obrigatório"),
  latitude: z.number({ required_error: "Latitude é obrigatória" }),
  longitude: z.number({ required_error: "Longitude é obrigatória" }),
});

export type UserSchemaRegisterCadastroType = z.infer<typeof UserSchemaRegisterCadastro>;
