import { useContext, useEffect, useState } from "react";
import { CPButtonG } from "../../componentes/Buttons/CPButtonG";
import { CPInputEyePassword } from "../../componentes/Inputs/CPInputEyePassword";
import { CPInput03 } from "../../componentes/Inputs/CPInput03";
import { CPImagemLogin } from "../../componentes/Others/CPImagemLogin";
import { DivContainer, DivConteudo, DivInferior, DivInput, LabelError, DivLateral, DivTitulo, H1Titulo, PDescricao} from "./styled";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router";
import { CPModalConfirm } from "../../componentes/Modals/CPModalConfirmacao";
import { PrestadorContext } from "../../context/prestadorConntext";
import { UserSchemaLogin, UserSchemaLoginType} from "../../validacoes/validacaoLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


export function Login() {
  const prestadorContext = useContext(PrestadorContext);
  const authContext = useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function navegarParaLogin() {
  //   navigate(`/login`);
  // }

  const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm<UserSchemaLoginType>({
      resolver: zodResolver(UserSchemaLogin),
    });

  function setErro() {
    authContext.setError(false);
  }

  // const [isLoggingIn, setIsLoggingIn] = useState(false);

  // useEffect(() => {
  //   authContext.logOut(); // Limpa os dados sempre que entrar na tela de login
  // }, []);

  // useEffect(() => {
  //   if (authContext.authData && isLoggingIn) {
  //   }
  // }, [authContext.authData, isLoggingIn, navigate]);

  const chamarSigIn = async (data: UserSchemaLoginType) => {
    // if (!email || !password) {
    //   alert("Preencha os campos!");
    //   return;
    // }
    // setIsLoggingIn(true); // Indica que o login está sendo feito

    console.log(data);
    
    await authContext.signIn(data.email, data.senha);
    navigate(`/`);
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

      <CPImagemLogin />
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
    </DivContainer>
    </form>
  );
}
