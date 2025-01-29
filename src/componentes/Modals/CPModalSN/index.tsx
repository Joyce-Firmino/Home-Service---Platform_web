import { CPButtonP } from "../../Buttons/CPButtonP";
import { DivContainer, DivSubcontainer, IIcon, DivText, PTitulo, PMsg, DivButtonContainer } from './styled';

type CustomModalProps = {
  icone: string;
  titulo: string;
  menssagem: string;
};

function clickado() {
  alert("Clicado");
}

export function CPModalSN({ icone, titulo, menssagem }: CustomModalProps) {
  return (
    <DivContainer>
      <DivSubcontainer>
        <IIcon>{icone}</IIcon>
        <DivText>
          <PTitulo>{titulo}</PTitulo>
          <PMsg>{menssagem}</PMsg>
          <DivButtonContainer>
            <CPButtonP
            onClick={clickado}
            title="Não"
            variantType="primario"
            key={1}
            />
            <CPButtonP
            onClick={clickado}
            title="Sim"
            variantType="secundario"
            key={1}
            />
          </DivButtonContainer>
        </DivText>
      </DivSubcontainer>
    </DivContainer>
  );
}
