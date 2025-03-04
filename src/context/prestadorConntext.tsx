import { createContext, useEffect, useState } from "react";
import { IpropsDTO } from "../dto/IpropsDTO";
import { ProfilePrestadorDTO } from "../dto/ProfilePrestadorDTO";
import { api } from "../api/axios";

export const PrestadorContext = createContext<ProfileContextDTO>({} as ProfileContextDTO)

interface ProfileContextDTO {
    prestadorData?: ProfilePrestadorDTO;
    buscarDadosPrestador: () =>  Promise<void>;
    removerDadosPrestador: () =>  Promise<void>;
}

export function PrestadorProvider ({ children }: IpropsDTO) {
    const [prestadorData, setPrestadorData] = useState<ProfilePrestadorDTO>();

    async function buscarDadosPrestador () {
        const response = await api.get("/prestadorPerfil");
        const dadosPrestador = response.data as ProfilePrestadorDTO;
        setPrestadorData(dadosPrestador);
    }

    async function removerDadosPrestador () {
        setPrestadorData(undefined);
    }

    return (
        <PrestadorContext.Provider value={ { prestadorData, buscarDadosPrestador, removerDadosPrestador } }>
            {children}
        </PrestadorContext.Provider>
    )
}