import { useContext, useEffect, useState } from "react";
import { CPFooter } from "../../componentes/Others/CPFooter";
import { CPHeader1 } from "../../componentes/Others/CPHeader";
import { CPProfileG } from "../../componentes/Profiles/CPProfileG";
import { DivBloco, DivCabecalho, DivContainer, DivCXAreia, DivFoto, DivInfo, DivMedia, DivMetodos, DivSeparacao, DivSubContainer, DivText, H1Tittle, PAlterarFt, PClick, PDescricao, PResposta } from "./styled";
import { PrestadorDTO } from "../../dto/GetPrestadorDTO";
import { api } from "../../api/axios";
import { AuthContext } from "../../context/authContext";
import { ProfilePrestadorDTO } from "../../dto/ProfilePrestadorDTO";


export function Profile() {

    const [dadosPrestador, setDadosPrestador] = useState<ProfilePrestadorDTO>({} as ProfilePrestadorDTO);
    const authData = useContext(AuthContext);


    useEffect(() => {
        console.log("Novo estado de dadosPrestador:", dadosPrestador);
    }, [dadosPrestador]); // Executa sempre que `dadosPrestador` mudar



    const buscarPrestador = async () => {
        try {
            const response = await api.get<ProfilePrestadorDTO>('/prestadorPerfil', {
                headers: {
                    Authorization: `Bearer ${authData.authData?.token}`,
                    email: authData.authData?.email
                }
            });

            console.log("Dados recebidos da API:", response.data); // Verifique o formato dos dados

            if (response.data) {
                setDadosPrestador(response.data);
            }

        } catch (error) {
            console.error("Erro ao buscar prestador:", error);
        }
    };
    useEffect(() => {
        buscarPrestador();
    }, []);

    return (
        <DivContainer>
            <CPHeader1
                name={dadosPrestador.name}
                variantType="secundario"
            />
            <DivSubContainer>
                <DivBloco>
                    <DivFoto>
                        <CPProfileG
                            name= {dadosPrestador.name}
                            variantType="primario" />
                        <PAlterarFt> Alterar foto</PAlterarFt>
                    </DivFoto>
                    <DivInfo>
                        <DivCabecalho>
                            <H1Tittle>Meu Perfil</H1Tittle>
                            <DivMetodos>
                                <PClick>editar</PClick>
                                <PClick>sair</PClick>
                            </DivMetodos>
                        </DivCabecalho>
                        <DivMedia>
                            <DivSeparacao>
                                <PDescricao>Informações Pessoais</PDescricao>
                                <DivCXAreia>
                                    <DivText>
                                        <PDescricao>Nome</PDescricao>
                                        <PResposta>{dadosPrestador.name}</PResposta>
                                    </DivText>
                                    <DivText>
                                        <PDescricao>Telefone</PDescricao>
                                        <PResposta>{dadosPrestador.telefone}</PResposta>
                                    </DivText>
                                    <DivText>
                                        <PDescricao>Email</PDescricao>
                                        <PResposta>{dadosPrestador.email}</PResposta>
                                    </DivText>
                                </DivCXAreia>
                            </DivSeparacao>
                            <DivSeparacao>
                                <PDescricao>Informações Profissionais</PDescricao>
                                <DivCXAreia>
                                    <DivText>
                                        <PDescricao>CNPJ</PDescricao>
                                        <PResposta> {dadosPrestador.cnpj}</PResposta>
                                    </DivText>
                                    <DivText>
                                        <PDescricao>Horário de Disponibildade</PDescricao>
                                        <PResposta>{dadosPrestador.horarioDisponibilidade}</PResposta>
                                    </DivText>
                                </DivCXAreia>
                            </DivSeparacao>

                        </DivMedia>
                    </DivInfo>
                </DivBloco>
            </DivSubContainer>
            <CPFooter></CPFooter>
        </DivContainer>
    );
}