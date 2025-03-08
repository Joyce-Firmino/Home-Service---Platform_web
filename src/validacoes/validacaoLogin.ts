import { z } from "zod";

export const UserSchemaLogin = z.object({
    email: z.string()
        .trim()
        .min(1, "E-mail é obrigatório")
        .email("E-mail inválido"),
    senha: z.string()
        .min(1, "Senha é obrigatória")
});

export type UserSchemaLoginType = z.infer<typeof UserSchemaLogin>;
