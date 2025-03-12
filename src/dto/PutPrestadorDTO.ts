export interface PutPrestadorDTO {
    nome: string;
    telefone: string;
    horarioDisponibilidade: string;
    latitude: number | null;
    longitude: number | null;
}