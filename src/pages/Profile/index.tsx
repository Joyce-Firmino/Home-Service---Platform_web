import { useContext, useEffect, useState } from "react";
import { CPFooter } from "../../componentes/Others/CPFooter";
import { CPHeader1 } from "../../componentes/Others/CPHeader";
import { CPProfileG } from "../../componentes/Profiles/CPProfileG";
import { DivBloco, DivCabecalho, DivContainer, DivCXAreia, DivFoto, DivInfo, DivMedia, DivMetodos, DivSeparacao, DivSubContainer, DivText, H1Tittle, PAlterarFt, PClick, PDescricao, PResposta } from "./styled";
import { PrestadorDTO } from "../../dto/GetPrestadorDTO";
import { api } from "../../api/axios";
import { AuthContext } from "../../context/authContext";


// const [teste, setTeste] = useState(
//     {
//         nome: "",
//         cpf: "",
//         fone:""
//     }
// );

// const user = {
//     nome: "joanina",
//     cpf: "523.365.636-77",
//     fone:"(83) 96954-5669"
// }



// const [dadosPrestador, setPrestador] = useState<PrestadorDTO>({}as PrestadorDTO);

// useEffect(() => {
//     const dadosUsuario = {
//         id: "1",
//         nome: "Roselene Silva",
//         email: "rose@gmail.com",
//         telefone: "(83) 99638-7412",
//         foto: "lala",
//         prestador: {
//             cnpj: "12.369.235/0001-25",
//             horarioDisponibilidade: "08h às 18h",
//             latitude: 5336655254,
//             longitude: 535412369
//         }
//     } as PrestadorDTO;

//     setTeste(user);

//     setPrestador(dadosUsuario);
// }, []); // O array vazio faz com que execute apenas na montagem do componente




export function Profile() {

    const [dadosPrestador, setDadosPrestador] = useState<PrestadorDTO>({} as PrestadorDTO);
    const authData = useContext(AuthContext);

    const buscarPrestador = async () => {
        try {
            const response = await api.get<PrestadorDTO>('/prestadorPerfil', {
                headers: {
                    Authorization: `Bearer ${authData.authData?.token}`,
                    email: authData.authData?.email
                }
            });
            setDadosPrestador(response.data)
            console.log(dadosPrestador);
        } catch (error) {
            console.log("erro")
        }
    }

    useEffect(() => {
        buscarPrestador();
        const interval = setInterval(() => {
          buscarPrestador();
        }, 30000); // Atualiza a cada 30 segundos
    
        return () => clearInterval(interval);
      }, []);

    return (
        <DivContainer>
            <CPHeader1
                iniciais="JV"
                name={dadosPrestador.nome}
                variantType="secundario"
            />
            <DivSubContainer>
                <DivBloco>
                    <DivFoto>
                        <CPProfileG
                            iniciais="JV"
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
                                        <PResposta>{dadosPrestador.nome}</PResposta>
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
                                        <PResposta> {dadosPrestador.prestador?.cnpj}</PResposta>
                                    </DivText>
                                    <DivText>
                                        <PDescricao>Horário de Disponibildade</PDescricao>
                                        <PResposta>{dadosPrestador.prestador?.horarioDisponibilidade}</PResposta>
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