import { useContext, useEffect, useState } from "react";
import { CPCardPrestador } from "../../componentes/Cards/CPCardPrestador";
import { CPFooter } from "../../componentes/Others/CPFooter";
import { CPHeader1 } from "../../componentes/Others/CPHeader";
import { DivCards, DivContainer, DivMedia, DivSubcontainer, DivTitulo, H1Titulo, PDescricao } from "./styled";
import { AuthContext } from "../../context/authContext";
import { PrestadorDTO } from "../../dto/GetPrestadorDTO";
import { api } from "../../api/axios";
import { fetchAddress } from "../../util/converterEndereco";

export function EncontrarPrestador() {

    const [prestadores, setPrestadores] = useState<PrestadorDTO[]>([]);


    const buscarPrestadores = async () => {
        try {
            const response = await api.get<PrestadorDTO[]>('/prestador')
            setPrestadores(response.data);
        } catch (error) {
            console.error('Erro ao carregar anúncios:', error);
        }
    }

    useEffect(() => {
        buscarPrestadores();
    }, []);
    

    useEffect(() => {
        console.log("Novo estado de dadosPrestador:", prestadores);
    }, [prestadores]);  

    return (
        <DivContainer>
            <DivSubcontainer>
                <CPHeader1 variantType="primario"></CPHeader1>
                <DivTitulo>
                    <H1Titulo>Encontrar Prestadores</H1Titulo>
                    <PDescricao>Encontre abaixo todos os profissionais que você procura</PDescricao>
                </DivTitulo>
            </DivSubcontainer>
            <DivMedia>
                <DivCards>{
                    prestadores.map((prestador) => (
                        <CPCardPrestador
                        city={fetchAddress(prestador.prestador.latitude, prestador.prestador.longitude)}
                        email={prestador.email}
                        prestador={prestador.nome}
                        telefone={prestador.telefone}
                        uriFoto="fjghjfk"
                        nome={prestador.nome}
                    />
                    ))}
                </DivCards>
                <CPFooter></CPFooter>
            </DivMedia>
        </DivContainer>
    );
}