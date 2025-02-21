import { useState } from "react";
import { CPButtonG } from "../../componentes/Buttons/CPButtonG";
import { CPInput01 } from "../../componentes/Inputs/CPInput01";
import { CPInput03 } from "../../componentes/Inputs/CPInput03";
import { CPImagemLogin } from "../../componentes/Others/CPImagemLogin";
import { DivButton, DivContainer, DivDPessoais, DivDProfissionais, DivGlobal, DivInfo, DivInputs1, DivSubGlobal, H1Titulo, PDescricao } from "./styled";
import { PostPrestadorDTO } from "../../dto/PostPrestadorDTO";
import { api } from "../../api/axios";
import { useNavigate } from "react-router";
import { CPModalConfirm } from "../../componentes/Modals/CPModalConfirmacao";

export function Cadastro() {
    const navigate = useNavigate();
    const [mostrarModal, setMostrarModal] = useState(false);

    function navegarParaPaginaHome() {
        navigate(`/`);
    }

    const criarPrestador = async () => {
        try {
            const prestador: PostPrestadorDTO = {
                nome: nome,
                email: email,
                senha: senha,
                telefone: telefone,
                cnpj: cnpj,
                horarioDisponibilidade: horario,
                latitude: 0,
                longitude: 0
            };

            console.log(prestador.nome);

            // Enviando o prestador para a API
            const response = await api.post<PostPrestadorDTO>('/prestador', prestador);
            console.log(typeof (prestador.horarioDisponibilidade));

            if (response.status === 200 || response.status === 201) {
                setNome('');
                setSenha('');
                setEmail('');
                setTelefone('');
                setHorario('');
                setCnpj('');

                setMostrarModal(true); // Exibe o modal de confirmação
                console.log('Prestador cadastrado com sucesso!');
            }
        } catch (error: any) {
            console.error('Error details:', error); // Verifique detalhes do erro no console
        }
    };

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [horario, setHorario] = useState("");

    return (
        <DivContainer>
            <CPImagemLogin />
            <DivGlobal>
                <DivSubGlobal>
                    <H1Titulo>Cadastro</H1Titulo>
                    <DivInfo>
                        <DivDPessoais>
                            <PDescricao>Dados Pessoais</PDescricao>
                            <DivInputs1>
                                <CPInput03
                                    titulo='Nome'
                                    placeholder='Informe seu nome'
                                    variantSize='pequeno'
                                    onChange={setNome} />
                                <CPInput03
                                    titulo='Telefone'
                                    placeholder='Informe seu telefone'
                                    variantSize='pequeno'
                                    onChange={setTelefone} />
                            </DivInputs1>
                            <DivInputs1>
                                <CPInput03
                                    titulo='Email'
                                    placeholder='Informe seu email'
                                    variantSize='pequeno'
                                    onChange={setEmail} />
                                <CPInput03
                                    titulo='Senha'
                                    placeholder='Informe sua senha'
                                    variantSize='pequeno'
                                    onChange={setSenha} />
                            </DivInputs1>
                        </DivDPessoais>
                        <DivDProfissionais>
                            <PDescricao>Dados Profissionais</PDescricao>
                            <DivInputs1>
                                <CPInput03
                                    titulo='CNPJ'
                                    placeholder='Informe seu CNPJ'
                                    variantSize='pequeno'
                                    onChange={setCnpj} />
                                <CPInput03
                                    titulo='Horário de Disponibilidade'
                                    placeholder='Informe sua disponibilidade'
                                    variantSize='pequeno'
                                    onChange={setHorario} />
                            </DivInputs1>
                        </DivDProfissionais>
                    </DivInfo>
                    <DivButton>
                        <CPButtonG
                            onClick={criarPrestador}
                            title="Cadastrar"
                            variantType="primario"
                        />
                    </DivButton>
                </DivSubGlobal>
            </DivGlobal>

            {/* Modal de Confirmação */}
            {mostrarModal && (
                <CPModalConfirm
                    icone='✅'
                    titulo='Sucesso'
                    menssagem='Prestador cadastrado com sucesso!'
                    variant='sucesso'
                    onClose={() => {
                        setMostrarModal(false);
                        navegarParaPaginaHome();
                    }}
                />
            )}
        </DivContainer>
    );
}




// import { useState } from "react";
// import { CPButtonG } from "../../componentes/Buttons/CPButtonG";
// import { CPInput01 } from "../../componentes/Inputs/CPInput01";
// import { CPInput03 } from "../../componentes/Inputs/CPInput03";
// import { CPImagemLogin } from "../../componentes/Others/CPImagemLogin";
// import { DivButton, DivContainer, DivDPessoais, DivDProfissionais, DivGlobal, DivInfo, DivInputs1, DivSubGlobal, H1Titulo, PDescricao } from "./styled";
// import { PostPrestadorDTO } from "../../dto/PostPrestadorDTO";
// import { api } from "../../api/axios";
// import { useNavigate } from "react-router";
// import { CPModalConfirm } from "../../componentes/Modals/CPModalConfirmacao";



// export function Cadastro() {
//     const navigate = useNavigate();

//     function navegarParaPaginaHome() {
//         navigate(`/`);
//       }

//     const criarPrestador = async () => {
//         try {
//             const prestador: PostPrestadorDTO = {
//                 nome: nome,
//                 email: email,
//                 senha: senha,
//                 telefone: telefone,
//                 cnpj: cnpj,
//                 horarioDisponibilidade: horario,
//                 latitude: 0,
//                 longitude: 0
//             };

//             console.log(prestador.nome);
            
//             // Enviando o cliente para a API
//             const response = await api.post<PostPrestadorDTO>('/prestador', prestador);
//             console.log(typeof (prestador.horarioDisponibilidade));

//             if (response.status === 200 || response.status === 201) {
//                 setNome('');
//                 setSenha('');
//                 setEmail('');
//                 setTelefone('');
//                 setHorario('');
//                 setCnpj('');

//                 navegarParaPaginaHome;
//                 <CPModalConfirm icone='sucesso' titulo='Sucesso' menssagem='Prestador cadastrado com sucesso!' variant='sucesso'></CPModalConfirm>
//                 console.log('Prestador cadastrado com sucesso!');
//                 // alert('Prestador cadastrado com sucesso!');
//             }
//         } catch (error: any) {
//             console.error('Error details:', error); // Verifique detalhes do erro no console

//         }

//     };



//     const [nome, setNome] = useState("");
//     const [telefone, setTelefone] = useState("");
//     const [email, setEmail] = useState("");
//     const [senha, setSenha] = useState("");
//     const [cnpj, setCnpj] = useState("");
//     const [horario, setHorario] = useState("");
    

//     return (
//         <DivContainer>
//             <CPImagemLogin></CPImagemLogin>
//             <DivGlobal>
//                 <DivSubGlobal>
//                     <H1Titulo>Cadastro</H1Titulo>
//                     <DivInfo>
//                         <DivDPessoais>
//                             <PDescricao>Dados Pessoais</PDescricao>
//                             <DivInputs1>
//                                 <CPInput03
//                                     titulo='Nome'
//                                     placeholder='Informe seu nome'
//                                     variantSize='pequeno'
//                                     onChange={setNome} />
//                                 <CPInput03
//                                     titulo='Telefone'
//                                     placeholder='Informe seu telefone'
//                                     variantSize='pequeno'
//                                     onChange={setTelefone} />
//                             </DivInputs1>
//                             <DivInputs1>
//                                 <CPInput03
//                                     titulo='Email'
//                                     placeholder='Informe seu email'
//                                     variantSize='pequeno'
//                                     onChange={setEmail} />
//                                 <CPInput03
//                                     titulo='Senha'
//                                     placeholder='Informe sua senha'
//                                     variantSize='pequeno'
//                                     onChange={setSenha} />
//                             </DivInputs1>
//                         </DivDPessoais>
//                         <DivDProfissionais>
//                             <PDescricao>Dados Profissionais</PDescricao>
//                             <DivInputs1>
//                                 <CPInput03
//                                     titulo='CNPJ'
//                                     placeholder='Informe seu CNPJ'
//                                     variantSize='pequeno'
//                                     onChange={setCnpj} />
//                                 <CPInput03
//                                     titulo='Horário de Disponibilidade'
//                                     placeholder='Informe sua disponibilidade'
//                                     variantSize='pequeno'
//                                     onChange={setHorario}
                                   
//                                  />
//                             </DivInputs1>
//                         </DivDProfissionais>
//                     </DivInfo>
//                     <DivButton>
//                         <CPButtonG
//                             onClick={criarPrestador}
//                             title="Cadastrar"
//                             variantType="primario"
//                         />
//                     </DivButton>

//                 </DivSubGlobal>

//             </DivGlobal>

//         </DivContainer>
//     );
// }