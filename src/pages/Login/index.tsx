import { useContext, useEffect, useState } from 'react';
import { CPButtonG } from '../../componentes/Buttons/CPButtonG';
import { CPInput03 } from '../../componentes/Inputs/CPInput03';
import { CPInputEyePassword } from '../../componentes/Inputs/CPInputEyePassword';
import { CPImagemLogin } from '../../componentes/Others/CPImagemLogin';
import { DivContainer, DivConteudo, DivInferior, DivInput, DivLateral, DivTitulo, H1Titulo, PDescricao } from './styled';
import { AuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router';
import { CPModalConfirm } from '../../componentes/Modals/CPModalConfirmacao';
import { useCookies } from 'react-cookie';
import { PrestadorContext } from '../../context/prestadorConntext';


export function Login() {

  const prestadorContext = useContext(PrestadorContext);
  const authContext = useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function navegarParaLogin() {
    navigate(`/login`);
  }

  function setErro() {
    authContext.setError(false);
  }

  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    authContext.logOut(); // Limpa os dados sempre que entrar na tela de login
  }, []);

  useEffect(() => {
    if (authContext.authData && isLoggingIn) {
      navigate(`/telaInicialPrestador`);
    }
  }, [authContext.authData, isLoggingIn, navigate]);

  const chamarSigIn = async () => {
    if (!email || !password) {
      alert("Preencha os campos!");
      return;
    }
    setIsLoggingIn(true); // Indica que o login está sendo feito
    await authContext.signIn(email, password);
  };

  return (
    <DivContainer>

      {authContext.error && <CPModalConfirm icone='error' titulo='Erro' menssagem='Usuário ou senha inválidos!' variant='erro' onClose={setErro}></CPModalConfirm>}

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
                titulo='Email'
                placeholder='Digite aqui seu email'
                variantSize='grande'
                onChange={setEmail}
              />
              <CPInputEyePassword
                titulo='Senha'
                placeholder='Digite sua senha'
                variantSize='grande'
                onChange={setPassword}
              />
            </DivInput>
            <CPButtonG
              title="Login"
              onClick={chamarSigIn}
              variantType='primario'
            />
          </DivInferior>
        </DivConteudo>
      </DivLateral>

    </DivContainer>

  );


}