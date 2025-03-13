export interface PostPrestadorDTO {
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    cnpj: string;
    horarioDisponibilidade: string;
    latitude: number | undefined;
    longitude: number | undefined;
}
