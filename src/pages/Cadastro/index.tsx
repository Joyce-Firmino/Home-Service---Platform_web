import { useState } from "react";
import { CPImagemLogin } from "../../componentes/Others/CPImagemLogin";
import { CPMapa } from "../../componentes/Others/CPMapa/index.tsx";
import { DivContainer, DivDPessoais, DivDProfissionais, DivGlobal, DivInfo, DivInputs1, DivSubGlobal, H1Titulo, LabelError, PDescricao, DivButton, DivInput } from "./styled";
import { PostPrestadorDTO } from "../../dto/PostPrestadorDTO";
import { api } from "../../api/axios";
import { useNavigate } from "react-router";
import { CPModalConfirm } from "../../componentes/Modals/CPModalConfirmacao";
import { UserSchemaRegisterCadastro, UserSchemaRegisterCadastroType } from "../../validacoes/validacaoCadastro";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CPButtonG } from "../../componentes/Buttons/CPButtonG";
import "../../componentes/Others/CPMapa/cadastro.css";
import { CPInput03 } from "../../componentes/Inputs/CPInput03";

export function Cadastro() {
  const navigate = useNavigate();
  const [mostrarModal, setMostrarModal] = useState(false);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<UserSchemaRegisterCadastroType>({
    resolver: zodResolver(UserSchemaRegisterCadastro),
  });

  const handleCoordinateChange = (lat: number, lng: number) => {
    setLatitude(lat);
    setLongitude(lng);
  };

  const criarPrestador = async (data: UserSchemaRegisterCadastroType) => {
    try {
      if (latitude && longitude) {
        const prestador: PostPrestadorDTO = {
          nome: data.nome,
          email: data.email,
          senha: data.senha,
          telefone: data.telefone, 
          cnpj: data.cnpj,
          horarioDisponibilidade: data.horarioDisponibilidade,
          latitude: latitude,
          longitude: longitude,
        };

        console.log("Dados recebidos no submit:", data);


        const response = await api.post<PostPrestadorDTO>(
          "/prestador",
          prestador
        );

        if (response.status === 200 || response.status === 201) {
          reset(); // Limpa o formulário
          setMostrarModal(true); // Exibe o modal de confirmação
          console.log("Prestador cadastrado com sucesso!");
        }
      }


    } catch (error: any) {
      console.error("Error details:", error);
    } finally {
      console.log("oi to")
    }
  };

  return (
    <form onSubmit={handleSubmit(criarPrestador)}>

      <DivContainer>
        <div>
          <CPImagemLogin />
        </div>
        <DivGlobal>
          {/* Verifique se está no form correto */}
          <DivSubGlobal>
            <H1Titulo>Cadastro</H1Titulo>
            <DivInfo>
              <DivDPessoais>
                <PDescricao>Dados Pessoais</PDescricao>
                <DivInputs1>
                  <DivInput>
                    <CPInput03
                      titulo="Nome"
                      placeholder="Informe seu nome"
                      variantSize="pequeno"
                      register={register("nome")}
                    />
                    {errors.nome && (
                      <LabelError>{errors.nome.message}</LabelError>
                    )}
                  </DivInput>

                  <DivInput>
                    <CPInput03
                      titulo="Telefone"
                      placeholder="Informe seu telefone"
                      variantSize="pequeno"
                      register={register("telefone")}
                    />
                    {errors.telefone && (
                      <LabelError>{errors.telefone.message}</LabelError>
                    )}
                  </DivInput>
                </DivInputs1>
                <DivInputs1>
                  <DivInput>
                    <CPInput03
                      titulo="Email"
                      placeholder="Informe seu email"
                      variantSize="pequeno"
                      register={register("email")}
                    />
                    {errors.email && (
                      <LabelError>{errors.email.message}</LabelError>
                    )}
                  </DivInput>

                  <DivInput>
                    <CPInput03
                      titulo="Senha"
                      placeholder="Informe sua senha"
                      variantSize="pequeno"
                      register={register("senha")}
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
                    <CPInput03
                      titulo="CNPJ"
                      placeholder="Informe seu CNPJ"
                      variantSize="pequeno"
                      register={register("cnpj")}
                    />
                    {errors.cnpj && (
                      <LabelError>{errors.cnpj.message}</LabelError>
                    )}
                  </DivInput>

                  <DivInput>
                    <CPInput03
                      titulo="Horário de Disponibilidade"
                      placeholder="Informe sua disponibilidade"
                      variantSize="pequeno"
                      register={register("horarioDisponibilidade")}
                    />
                    {errors.horarioDisponibilidade && (
                      <LabelError>
                        {errors.horarioDisponibilidade.message}
                      </LabelError>
                    )}
                  </DivInput>
                </DivInputs1>
              </DivDProfissionais>
              <CPMapa onCoordinateChange={handleCoordinateChange} />
            </DivInfo>
            <DivButton>
              <CPButtonG
                title="Cadastrar"
                variantType="primario"
                type="submit" // Verifique se o tipo é submit
              />
            </DivButton>
          </DivSubGlobal>
        </DivGlobal>

        {/* Modal de Confirmação */}
        {mostrarModal && (
          <CPModalConfirm
            icone="✅"
            titulo="Sucesso"
            menssagem="Prestador cadastrado com sucesso! Faça login para continuar!"
            variant="sucesso"
            onClose={() => {
              setMostrarModal(false);
              navigate(`/`);
            }}
          />
        )}
      </DivContainer>
    </form>
  );
}
