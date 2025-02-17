import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";
import { CPButtonG } from "../../Buttons/CPButtonG";
import { DivContainer, DivSubcontainer, IIcon, DivText, PTitulo, PMsg, DivButtonContainer, DivSombra } from './styled';

type CustomModalProps = {
  icone: string;
  titulo: string;
  menssagem: string;
  variant: "sucesso" | "erro";
};



export function CPModalConfirm({ icone, titulo, menssagem, variant }: CustomModalProps) {
  const { error, setError } = useContext(AuthContext);


  function clickado() {
    setError(false);
  }


  return (
    <DivSombra>
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
    </DivSombra>
  );
}
