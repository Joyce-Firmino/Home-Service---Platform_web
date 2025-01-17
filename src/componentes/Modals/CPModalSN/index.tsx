import { CPButtonG } from "../../Buttons/CPButtonG";
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
              color="#fff"
              onClick={clickado}
              textColor="#564caf"
              title="Não"
              borderColor="#564caf"
              borderWidth={1}
            />

            <CPButtonP
              color="#564caf"
              onClick={clickado}
              textColor="#fff"
              title="Sim"
            />
          </DivButtonContainer>
        </DivText>
      </DivSubcontainer>
    </DivContainer>
  );
}
