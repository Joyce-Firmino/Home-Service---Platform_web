import { CPButtonP } from "../../Buttons/CPButtonP";
import {
  DivContainer,
  DivSubcontainer,
  IIcon,
  DivText,
  PTitulo,
  PMsg,
  DivButtonContainer,
} from "./styled";

type CustomModalProps = {
  icone: string;
  titulo: string;
  menssagem: string;
  botaoNao: () => void;
  botaoSim: () => void;
};

export function CPModalSN({
  icone,
  titulo,
  menssagem,
  botaoNao,
  botaoSim,
}: CustomModalProps) {
  return (
    <DivContainer>
      <DivSubcontainer>
        <IIcon>{icone}</IIcon>
        <DivText>
          <PTitulo>{titulo}</PTitulo>
          <PMsg>{menssagem}</PMsg>
          <DivButtonContainer>
            <CPButtonP
              onClick={botaoNao}
              title="Não"
              variantType="primario"
              key={1}
            />
            <CPButtonP
              onClick={botaoSim}
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
