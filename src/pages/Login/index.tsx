import { useContext } from "react";
import { CPButtonG } from "../../componentes/Buttons/CPButtonG";
import { CPInputEyePassword } from "../../componentes/Inputs/CPInputEyePassword";
import { CPInput03 } from "../../componentes/Inputs/CPInput03";
import { CPImagemLogin } from "../../componentes/Others/CPImagemLogin";
import { DivGlobal, DivImage, DivContainer, DivConteudo, DivInferior, DivInput, LabelError, DivLateral, DivTitulo, H1Titulo, PDescricao } from "./styled";
import { AuthContext } from "../../context/authContext";
import { CPModalConfirm } from "../../componentes/Modals/CPModalConfirmacao";
import { UserSchemaLogin, UserSchemaLoginType } from "../../validacoes/validacaoLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { navegarParaPaginaHome } from "../../util/navigation";
import { useNavigate } from "react-router-dom";


export function Login() {
  const authContext = useContext(AuthContext);

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<UserSchemaLoginType>({
    resolver: zodResolver(UserSchemaLogin),
  });

  function setErro() {
    authContext.setError(false);
  }

  const chamarSigIn = async (data: UserSchemaLoginType) => {
    await authContext.signIn(data.email, data.senha);
    navegarParaPaginaHome(navigate);
  };

  return (
    <form onSubmit={handleSubmit(chamarSigIn)}>
      <DivContainer>
        {authContext.error && (
          <CPModalConfirm
            icone="error"
            titulo="Erro"
            menssagem="Usuário ou senha inválidos!"
            variant="erro"
            onClose={setErro}
          ></CPModalConfirm>
        )}

        <DivImage>
          <CPImagemLogin />
        </DivImage>
        <DivGlobal>
          <DivLateral>
            <DivConteudo>
              <DivTitulo>
                <H1Titulo>Login</H1Titulo>
                <PDescricao>Preencha os dados para fazer o login</PDescricao>
              </DivTitulo>
              <DivInferior>
                <DivInput>
                  <CPInput03
                    titulo="Email"
                    placeholder="Digite aqui seu email"
                    variantSize="grande"
                    register={register("email")}
                  />
                  {errors.email && (
                    <LabelError>{errors.email.message}</LabelError>
                  )}
                  <CPInputEyePassword
                    titulo="Senha"
                    placeholder="Digite sua senha"
                    variantSize="grande"
                    register={register("senha")}
                  />
                  {errors.senha && (
                    <LabelError>{errors.senha.message}</LabelError>
                  )}
                </DivInput>
                <CPButtonG
                  title="Login"
                  variantType="primario"
                  type="submit"
                />
              </DivInferior>
            </DivConteudo>
          </DivLateral>
        </DivGlobal>
      </DivContainer>
    </form>
  );
}
