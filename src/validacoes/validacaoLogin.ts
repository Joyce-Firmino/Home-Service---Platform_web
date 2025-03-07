import { z } from "zod";

export const UserSchemaLogin = z.object({
    email: z.string({ required_error: "E-mail é obrigatório" }).trim().email("E-mail inválido"),
    senha: z.string({ required_error: "Senha é obrigatória" })
});

export type UserSchemaLoginType = z.infer<typeof UserSchemaLogin>;
