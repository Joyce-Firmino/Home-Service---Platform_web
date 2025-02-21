import { useContext, useEffect, useState } from 'react';
import { CPButtonG } from '../../componentes/Buttons/CPButtonG';
import { CPInput03 } from '../../componentes/Inputs/CPInput03';
import { CPInputEyePassword } from '../../componentes/Inputs/CPInputEyePassword';
import { CPImagemLogin } from '../../componentes/Others/CPImagemLogin';
import { DivContainer, DivConteudo, DivImagem, DivInferior, DivInput, DivLateral, DivTitulo, H1Titulo, PDescricao } from './styled';
import { AuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router';
import { CPModalConfirm } from '../../componentes/Modals/CPModalConfirmacao';
import { useCookies } from 'react-cookie';



export function Login() {

  const authContext = useContext(AuthContext);

  function navegarParaLogin() {
    navigate(`/login`);
}

  const [cookies, setCookie] = useCookies(['cookieName']);



  const navigate = useNavigate();

  useEffect(() => {
    // authContext.setAuthData(undefined);
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  //FAZER ALGUMA LÓGICA PARA ZERAR O AUTHCONTEXT

  const chamarSigIn = async () => {
    try {
      const retorno = await authContext.signIn(email, password);
      setCookie('cookieName', authContext.authData?.token);

      console.log(cookies.cookieName + " Token do cookie!");
      navigate(`/teste`);

    } catch (error) {

    }
  }

  return (
    <DivContainer>
      {authContext.authData?.token && <p> token</p>}
      {authContext.error && <CPModalConfirm icone='error' titulo='Erro' menssagem='Usuário ou senha inválidos!' variant='erro' onClose={navegarParaLogin}></CPModalConfirm>}



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