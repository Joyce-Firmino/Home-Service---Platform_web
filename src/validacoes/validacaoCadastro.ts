import { z } from 'zod';

// Função para validar telefone no formato (XX) XXXX-XXXX ou (XX) XXXXX-XXXX
const validaTelefone = (value: string) => {
  return /^\(\d{2}\) \d{4,5}-\d{4}$/.test(value);
};

export const UserSchemaRegisterCadastro = z.object({
  nome: z.string({ required_error: 'Nome é obrigatório' })
    .trim()
    .min(3, { message: 'O nome deve ter no mínimo 3 caracteres' }),

  telefone: z.string({ required_error: 'Telefone é obrigatório' })
    .refine((value) => validaTelefone(value), {
      message: 'Telefone incorreto: digite no padrão (XX) XXXX-XXXX ou (XX) XXXXX-XXXX.',
    }),

  horarioDisponibilidade: z.string({ required_error: 'Horário de disponibilidade é obrigatório' }),

  latitude: z.number({ required_error: 'Latitude é obrigatória' }),

  longitude: z.number({ required_error: 'Longitude é obrigatória' }),
});

export type UserSchemaRegisterCadastroType = z.infer<typeof UserSchemaRegisterCadastro>;
