import { useContext, useEffect } from "react";
import { CPFooter } from "../../componentes/Others/CPFooter";
import { CPHeader1 } from "../../componentes/Others/CPHeader";
import { CPProfileG } from "../../componentes/Profiles/CPProfileG";
import { DivBloco, DivCabecalho, DivContainer, DivCXAreia, DivFoto, DivInfo, DivMedia, DivMetodos, DivSeparacao, DivSubContainer, DivText, H1Tittle, PAlterarFt, PClick, PDescricao, PResposta } from "./styled";
import { AuthContext } from "../../context/authContext";
import { PrestadorContext } from "../../context/prestadorConntext";
import { useNavigate } from 'react-router';

export function Profile() {

    const authData = useContext(AuthContext);
    const prestadorContext = useContext(PrestadorContext);
    const navigate = useNavigate();

    const fazerLogout = () => {
        authData.logOut();
        navigate(`/`);
    }

    const buscarDadosPrestador = async () => {
        try {
            prestadorContext.buscarDadosPrestador();
        } catch (error) {

        }
      }

    useEffect(() => {
        if (!prestadorContext.prestadorData) {
            buscarDadosPrestador();
        }
    }, []);
    return (
        <DivContainer>
            <CPHeader1
                name={prestadorContext.prestadorData?.name}
                variantType="secundario"
            />
            <DivSubContainer>
                <DivBloco>
                    <DivFoto>
                        <CPProfileG
                            name= {prestadorContext.prestadorData?.name}
                            variantType="primario" />
                        {/* <PAlterarFt> Alterar foto</PAlterarFt> */}
                    </DivFoto>
                    <DivInfo>
                        <DivCabecalho>
                            <H1Tittle>Meu Perfil</H1Tittle>
                            <DivMetodos>
                                <PClick onClick={fazerLogout}>editar</PClick>
                                <PClick onClick={fazerLogout}>sair</PClick>
                            </DivMetodos>
                        </DivCabecalho>
                        <DivMedia>
                            <DivSeparacao>
                                <PDescricao>Informações Pessoais</PDescricao>
                                <DivCXAreia>
                                    <DivText>
                                        <PDescricao>Nome</PDescricao>
                                        <PResposta>{prestadorContext.prestadorData?.name}</PResposta>
                                    </DivText>
                                    <DivText>
                                        <PDescricao>Telefone</PDescricao>
                                        <PResposta>{prestadorContext.prestadorData?.telefone}</PResposta>
                                    </DivText>
                                    <DivText>
                                        <PDescricao>Email</PDescricao>
                                        <PResposta>{prestadorContext.prestadorData?.email}</PResposta>
                                    </DivText>
                                </DivCXAreia>
                            </DivSeparacao>
                            <DivSeparacao>
                                <PDescricao>Informações Profissionais</PDescricao>
                                <DivCXAreia>
                                    <DivText>
                                        <PDescricao>CNPJ</PDescricao>
                                        <PResposta> {prestadorContext.prestadorData?.cnpj}</PResposta>
                                    </DivText>
                                    <DivText>
                                        <PDescricao>Horário de Disponibildade</PDescricao>
                                        <PResposta>{prestadorContext.prestadorData?.horarioDisponibilidade}</PResposta>
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
