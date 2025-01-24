import { CPButtonG } from '../../componentes/Buttons/CPButtonG';
import { CPInput02 } from '../../componentes/Inputs/CPInput02';
import { CPInput03 } from '../../componentes/Inputs/CPInput03';
import { CPImagemLogin } from '../../componentes/Others/CPImagemLogin';
import { DivContainer, DivInferior, DivInput, DivLateral, DivTitulo, H1Titulo, PDescricao } from './styled';

export function Login() {
  function clickado() {
    alert('Clicado!');
  }

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
            />
            <CPInput02
              titulo='Senha'
              placeholder='Digite sua senha'
              icone='visibility_off'
              variantSize='grande'
            />
          </DivInput>
          <CPButtonG
            title="Login"
            onClick={clickado}
            variantType='primario'
          />
        </DivInferior>
      </DivLateral>

    </DivContainer>

  );


}