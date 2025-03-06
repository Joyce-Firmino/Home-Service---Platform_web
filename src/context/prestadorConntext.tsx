import { createContext, useEffect, useState } from "react";
import { IpropsDTO } from "../dto/IpropsDTO";
import { ProfilePrestadorDTO } from "../dto/ProfilePrestadorDTO";
import { api } from "../api/axios";

interface ProfileContextDTO {
    prestadorData?: ProfilePrestadorDTO;
    buscarDadosPrestador: () => Promise<void>;
    removerDadosPrestador: () => void; // Não precisa ser async, pois só altera o estado local
}

export const PrestadorContext = createContext<ProfileContextDTO>({} as ProfileContextDTO);

export function PrestadorProvider({ children }: IpropsDTO) {
    const [prestadorData, setPrestadorData] = useState<ProfilePrestadorDTO>();

    async function buscarDadosPrestador() {
        try {
            const response = await api.get("/prestadorPerfil");
            const dadosPrestador = response.data as ProfilePrestadorDTO;
            setPrestadorData(dadosPrestador);
            console.log("Dados do prestador carregados:", dadosPrestador);
        } catch (error) {
            console.error("Erro ao buscar dados do prestador:", error);
        }
    }

    function removerDadosPrestador() {
        setPrestadorData(undefined);
    }

    // Se quiser carregar os dados automaticamente quando o contexto for montado
    useEffect(() => {
        buscarDadosPrestador();
    }, []);

    return (
        <PrestadorContext.Provider value={{ prestadorData, buscarDadosPrestador, removerDadosPrestador }}>
            {children}
        </PrestadorContext.Provider>
    );
}
