import { useContext, useEffect, useState } from "react";
import { CPFooter } from "../../componentes/Others/CPFooter";
import { CPHeader1 } from "../../componentes/Others/CPHeader";
import { CPProfileG } from "../../componentes/Profiles/CPProfileG";
import { DivBloco, DivCabecalho, DivContainer, DivCXAreia, DivFoto, DivInfo, DivMedia, DivMetodos, DivSeparacao, DivSubContainer, DivText, H1Tittle, ModalBackground, PAlterarFt, PClick, PDescricao, PResposta } from "./styled";
import { AuthContext } from "../../context/authContext";
import { PrestadorContext } from "../../context/prestadorConntext";
import { navegarParaPaginaHome } from "../../util/navigation";
import { useNavigate } from "react-router";
import { EditDialog } from "../../componentes/Others/Dialog";
import { CPModalSN } from "../../componentes/Modals/CPModalSN";

export function Profile() {

    const navigate = useNavigate();

    const authData = useContext(AuthContext);
    const prestadorContext = useContext(PrestadorContext);
    const [visibilidadeModal, setVisibilidadeModal] = useState(false);


    const fazerLogout = () => {
        setVisibilidadeModal(true); // Exibe o modal ao clicar em "Sair"
    };

    const confirmarLogout = () => {
        authData.logOut();
        navegarParaPaginaHome(navigate);
    };

    const buscarDadosPrestador = async () => {
        try {
            prestadorContext.buscarDadosPrestador();
        } catch (error) {
            console.log(error);
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
                    </DivFoto>
                    <DivInfo>
                        <DivCabecalho>
                            <H1Tittle>Meu Perfil</H1Tittle>
                            <DivMetodos>
                                <EditDialog></EditDialog>
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
            {/* Modal de Confirmação */}
            {visibilidadeModal && (
                <ModalBackground>
                    <CPModalSN
                        icone="warning"
                        menssagem="Deseja realmente sair da conta?"
                        titulo="Logout"
                        botaoNao={() => setVisibilidadeModal(false)}
                        botaoSim={confirmarLogout}
                    />
                </ModalBackground>
            )}
        </DivContainer>
    );
}
