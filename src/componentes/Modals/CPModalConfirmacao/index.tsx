import { CPButtonG } from "../../Buttons/CPButtonG";
import { DivContainer, DivSubcontainer, IIcon, DivText, PTitulo, PMsg, DivButtonContainer } from './styled';

type CustomModalProps = {
  icone: string;
  titulo: string;
  menssagem: string;
  variant: "sucesso" | "erro";
};

function clickado() {
  alert("Clicado");
}

export function CPModalConfirm({ icone, titulo, menssagem, variant }: CustomModalProps) {
  return (
    <DivContainer>
      <DivSubcontainer>
        <IIcon variantComponent={variant}>{icone}</IIcon>
        <DivText>
          <PTitulo>{titulo}</PTitulo>
          <PMsg>{menssagem}</PMsg>
          <DivButtonContainer>
            <CPButtonG title='Confirmar' variantType='primario' onClick={clickado}></CPButtonG>

          </DivButtonContainer>
        </DivText>
      </DivSubcontainer>
    </DivContainer>
  );
}
