
import { CPButtonG } from '../../componentes/Buttons/CPButtonG';
import { CPButtonM } from '../../componentes/Buttons/CPButtonM';
import { CPButtonP } from '../../componentes/Buttons/CPButtonP';
import { CPCardAnuncioCategory } from '../../componentes/Cards/CPCardAnuncioCategoryZ';
import { CPCardCategory } from '../../componentes/Cards/CPCardAnuncioCategoryZ copy';
import { CPCardPrestador } from '../../componentes/Cards/CPCardPrestador';
import { CPInput01 } from '../../componentes/Inputs/CPInput01';
import { Input } from '../../componentes/Inputs/CPInput01/styled';
import { CPInput02 } from '../../componentes/Inputs/CPInput02';
import { CPInput03 } from '../../componentes/Inputs/CPInput03';
import { CPModalConfirm } from '../../componentes/Modals/CPModalConfirmacao';
import { CPModalSN } from '../../componentes/Modals/CPModalSN';
import { CPHeader1 } from '../../componentes/Others/CPHeader';
import { DivContainer, DivPrestador } from './styled';

export function Login() {
  function clickado() {
    alert('Clicado!');
  }

  return (

    <DivContainer>
      <CPInput03
      titulo='Email'
      placeholder='Digite aqui seu email'
      variantSize='grande'
      ></CPInput03>
      <CPInput02
      titulo='Senha'
      placeholder='Digite sua senha'
      icone='visibility_off'
      variantSize='grande'
      ></CPInput02>

      <CPButtonG
        title="Button P"
        onClick={clickado}
        variantType='primario'
      />

    </DivContainer>
      
  );

  
}