
import { CPButtonG } from '../../componentes/Buttons/CPButtonG';
import { CPButtonM } from '../../componentes/Buttons/CPButtonM';
import { CPButtonP } from '../../componentes/Buttons/CPButtonP';
import { CPCardAnuncioCategory } from '../../componentes/Cards/CPCardAnuncioCategoryZ';
import { CPCardCategory } from '../../componentes/Cards/CPCardAnuncioCategoryZ copy';
import { CPCardPrestador } from '../../componentes/Cards/CPCardPrestador';
import { CPInput01 } from '../../componentes/Inputs/CPInput01';
import { CPInput02 } from '../../componentes/Inputs/CPInput02';
import { CPInput03 } from '../../componentes/Inputs/CPInput03';
import { CPModalConfirm } from '../../componentes/Modals/CPModalConfirmacao';
import { CPModalSN } from '../../componentes/Modals/CPModalSN';
import { CPHeader1 } from '../../componentes/Others/CPHeader';
import { DivContainer, DivPrestador } from './styled';

export function Home() {
  function clickado() {
    alert('Clicado!');
  }

  return (
    <DivContainer>
      
      <CPButtonG
        title="Button P"
        onClick={clickado}
        variantType='secundario'
      />
      <CPButtonM
        title="Button M"
        onClick={clickado}
        color="black"
        textColor="white"
        borderColor="black"
        borderWidth={2}
      />
      <CPButtonP
        title="Button G"
        onClick={clickado}
        variantType='primario'

      />
      

      
    </DivContainer>
  );

  
}