import { useState } from "react";
import { CPImagemLogin } from "../../componentes/Others/CPImagemLogin";
import { DivContainer, DivDPessoais, DivDProfissionais, DivGlobal, DivInfo, DivInputs1, DivSubGlobal, H1Titulo, LabelError, PDescricao, DivButton, DivInput } from "./styled";
import { PostPrestadorDTO } from "../../dto/PostPrestadorDTO";
import { api } from "../../api/axios";
import { useNavigate } from "react-router";
import { CPModalConfirm } from "../../componentes/Modals/CPModalConfirmacao";
import { UserSchemaRegisterCadastro, UserSchemaRegisterCadastroType, } from "../../validacoes/validacaoCadastro";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CPInputForm } from "../../componentes/Inputs/CPInputForm";
import { CPButtonG } from "../../componentes/Buttons/CPButtonG";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import "./cadastro.css"

export function Cadastro() {
  const navigate = useNavigate();
  const [mostrarModal, setMostrarModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserSchemaRegisterCadastroType>({
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
              <div>
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[51.505, -0.09]}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
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