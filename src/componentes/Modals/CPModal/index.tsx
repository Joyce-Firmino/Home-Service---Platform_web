import { CPButtonG } from "../../Buttons/CPButtonG";
import { DivContainer, DivSubcontainer, IIcon, DivText, PTitulo, PMsg, DivButtonContainer } from './styled';

interface CustomModalProps {
    icone: string;
    titulo: string;
    menssagem: string;
}

function clickado() {
    alert("Clicado");
}

export function CPModalConfirm({ icone, titulo, menssagem }: CustomModalProps) {
    return (
        <DivContainer>
            <DivSubcontainer>
                <IIcon>{icone}</IIcon>
                <DivText>
                    <PTitulo>{titulo}</PTitulo>
                    <PMsg>{menssagem}</PMsg>
                    <DivButtonContainer>
                        <CPButtonG
                            color="#564caf"
                            onClick={clickado}
                            textColor="#fff"
                            title="Continuar"
                            key={2}
                        />
                    </DivButtonContainer>
                </DivText>
            </DivSubcontainer>
        </DivContainer>
    );
}