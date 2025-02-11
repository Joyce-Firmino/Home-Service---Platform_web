import { useContext, useState } from 'react';
import { CPButtonG } from '../../componentes/Buttons/CPButtonG';
import { CPInput02 } from '../../componentes/Inputs/CPInput02';
import { CPInput03 } from '../../componentes/Inputs/CPInput03';
import { CPInputEyePassword } from '../../componentes/Inputs/CPInputEyePassword';
import { CPImagemLogin } from '../../componentes/Others/CPImagemLogin';
import { DivContainer, DivInferior, DivInput, DivLateral, DivTitulo, H1Titulo, PDescricao } from './styled';
import { AuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router';

export function Login() {

  const authContext = useContext(AuthContext);

  const navigate = useNavigate();

  const chamarSigIn = async () => {
    try {
      const retorno = await authContext.signIn(email, password);
    } catch (error) {

    }
    finally {
      navigate(`/teste`);
    }
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  return (

    <DivContainer>
      <CPImagemLogin></CPImagemLogin>
      <DivLateral>
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
      </DivLateral>

    </DivContainer>

  );


}