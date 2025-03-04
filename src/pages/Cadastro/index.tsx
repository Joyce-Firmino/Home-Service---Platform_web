import { useState } from "react";
import { CPButtonG } from "../../componentes/Buttons/CPButtonG";
import { CPImagemLogin } from "../../componentes/Others/CPImagemLogin";
import { DivContainer, DivDPessoais, DivDProfissionais, DivGlobal, DivInfo, DivInputs1, DivSubGlobal, H1Titulo, LabelError, PDescricao, DivButton,DivInput, } from "./styled";
import { PostPrestadorDTO } from "../../dto/PostPrestadorDTO";
import { api } from "../../api/axios";
import { useNavigate } from "react-router";
import { CPModalConfirm } from "../../componentes/Modals/CPModalConfirmacao";
import { UserSchemaRegisterCadastro, UserSchemaRegisterCadastroType,} from "../../validacoes/validacaoCadastro";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CPInputForm } from "../../componentes/Inputs/CPInputForm";
import { input } from "zod";

export function Cadastro() {
  const navigate = useNavigate();
  const [mostrarModal, setMostrarModal] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<UserSchemaRegisterCadastroType>({
    resolver: zodResolver(UserSchemaRegisterCadastro),
  });

  const criarPrestador = async (data: UserSchemaRegisterCadastroType) => {
    try {
      const prestador: PostPrestadorDTO = {
        nome: data.nome,
        email: data.email,
        senha: data.senha,
        telefone: data.telefone,
        cnpj: data.cnpj,
        horarioDisponibilidade: data.horarioDisponibilidade,
        latitude: 0,
        longitude: 0,
      };

      console.log(prestador.nome);

      const response = await api.post<PostPrestadorDTO>(
        "/prestador",
        prestador
      );

      if (response.status === 200 || response.status === 201) {
        reset(); // Limpa o formulário
        setMostrarModal(true); // Exibe o modal de confirmação
        console.log("Prestador cadastrado com sucesso!");
      }
    } catch (error: any) {
      console.error("Error details:", error);
    }
  };

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
                <DivInput>
                  <CPInputForm
                    titulo="Nome"
                    placeholder="Informe seu nome"
                    variantSize="pequeno"
                    {...register("nome")}
                  />
                  {errors.nome && (
                    <LabelError>{errors.nome.message}</LabelError>
                  )}
                </DivInput>

                <DivInput>
                  <CPInputForm
                    titulo="Telefone"
                    placeholder="Informe seu telefone"
                    variantSize="pequeno"
                    {...register("telefone")}
                  />
                  {errors.telefone && (
                    <LabelError>{errors.telefone.message}</LabelError>
                  )}
                </DivInput>
              </DivInputs1>
              <DivInputs1>
                <DivInput>
                  <CPInputForm
                    titulo="Email"
                    placeholder="Informe seu email"
                    variantSize="pequeno"
                    {...register("email")}
                  />
                  {errors.email && (
                    <LabelError>{errors.email.message}</LabelError>
                  )}
                </DivInput>

                <DivInput>
                  <CPInputForm
                    titulo="Senha"
                    placeholder="Informe sua senha"
                    variantSize="pequeno"
                    {...register("senha")}
                  />
                  {errors.senha && (
                    <LabelError>{errors.senha.message}</LabelError>
                  )}
                </DivInput>
              </DivInputs1>
            </DivDPessoais>
            <DivDProfissionais>
              <PDescricao>Dados Profissionais</PDescricao>
              <DivInputs1>
                <DivInput>
                  <CPInputForm
                    titulo="CNPJ"
                    placeholder="Informe seu CNPJ"
                    variantSize="pequeno"
                    {...register("cnpj")}
                  />
                  {errors.cnpj && (
                    <LabelError>{errors.cnpj.message}</LabelError>
                  )}
                </DivInput>

                <DivInput>
                  <CPInputForm
                    titulo="Horário de Disponibilidade"
                    placeholder="Informe sua disponibilidade"
                    variantSize="pequeno"
                    {...register("horarioDisponibilidade")}
                  />
                  {errors.horarioDisponibilidade && (
                    <LabelError>
                      {errors.horarioDisponibilidade.message}
                    </LabelError>
                  )}
                </DivInput>
              </DivInputs1>
            </DivDProfissionais>
          </DivInfo>
          <DivButton>
            <CPButtonG
              onClick={handleSubmit(criarPrestador)} // Agora passa pelo `handleSubmit`
              title="Cadastrar"
              variantType="primario"
            />
          </DivButton>
        </DivSubGlobal>
      </DivGlobal>

      {/* Modal de Confirmação */}
      {mostrarModal && (
        <CPModalConfirm
          icone="✅"
          titulo="Sucesso"
          menssagem="Prestador cadastrado com sucesso!"
          variant="sucesso"
          onClose={() => {
            setMostrarModal(false);
            navigate(`/`);
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
// import { DivButton, DivContainer, DivDPessoais, DivDProfissionais, DivGlobal, DivInfo, DivInputs1, DivSubGlobal, H1Titulo, LabelError, PDescricao } from "./styled";
// import { PostPrestadorDTO } from "../../dto/PostPrestadorDTO";
// import { api } from "../../api/axios";
// import { useNavigate } from "react-router";
// import { CPModalConfirm } from "../../componentes/Modals/CPModalConfirmacao";
// import { UserSchemaRegisterCadastro, UserSchemaRegisterCadastroType } from "../../validacoes/validacaoCadastro";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";

// export function Cadastro() {
//     const { register, handleSubmit, formState: { errors } } = useForm<UserSchemaRegisterCadastroType>({
//         resolver: zodResolver(UserSchemaRegisterCadastro),
//       });
//     const navigate = useNavigate();
//     const [mostrarModal, setMostrarModal] = useState(false);

//     function navegarParaPaginaHome() {
//         navigate(`/`);
//     }

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

//             // Enviando o prestador para a API
//             const response = await api.post<PostPrestadorDTO>('/prestador', prestador);
//             console.log(typeof (prestador.horarioDisponibilidade));

//             if (response.status === 200 || response.status === 201) {
//                 setNome('');
//                 setSenha('');
//                 setEmail('');
//                 setTelefone('');
//                 setHorario('');
//                 setCnpj('');

//                 setMostrarModal(true); // Exibe o modal de confirmação
//                 console.log('Prestador cadastrado com sucesso!');
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
//             <CPImagemLogin />
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
//                                     {errors.nome && <LabelError>{errors.nome.message}</LabelError>}
//                                 <CPInput03
//                                     titulo='Telefone'
//                                     placeholder='Informe seu telefone'
//                                     variantSize='pequeno'
//                                     onChange={setTelefone} />
//                                     {errors.telefone && <LabelError>{errors.telefone.message}</LabelError>}
//                             </DivInputs1>
//                             <DivInputs1>
//                                 <CPInput03
//                                     titulo='Email'
//                                     placeholder='Informe seu email'
//                                     variantSize='pequeno'
//                                     onChange={setEmail} />
//                                     {errors.email && <LabelError>{errors.email.message}</LabelError>}
//                                 <CPInput03
//                                     titulo='Senha'
//                                     placeholder='Informe sua senha'
//                                     variantSize='pequeno'
//                                     onChange={setSenha} />
//                                     {errors.senha && <LabelError>{errors.senha.message}</LabelError>}
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
//                                     {errors.nome && <LabelError>{errors.nome.message}</LabelError>}
//                                 <CPInput03
//                                     titulo='Horário de Disponibilidade'
//                                     placeholder='Informe sua disponibilidade'
//                                     variantSize='pequeno'
//                                     onChange={setHorario} />
//                                     {errors.horarioDisponibilidade && <LabelError>{errors.horarioDisponibilidade.message}</LabelError>}
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

//             {/* Modal de Confirmação */}
//             {mostrarModal && (
//                 <CPModalConfirm
//                     icone='✅'
//                     titulo='Sucesso'
//                     menssagem='Prestador cadastrado com sucesso!'
//                     variant='sucesso'
//                     onClose={() => {
//                         setMostrarModal(false);
//                         navegarParaPaginaHome();
//                     }}
//                 />
//             )}
//         </DivContainer>
//     );
// }

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
