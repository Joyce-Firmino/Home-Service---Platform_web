import { ButtonG } from "../ButtonG";
import { ContainerStyled, SubcontainerStyled, IconStyled, TextStyled, TituloStyled, MsgStyled, ButtonContainerStyled } from './styled';

interface CustomModalProps {
    icone: string;
    titulo: string;
    menssagem: string;
}

function clickado() {
    alert("Clicado");
}

export function ModalConfirm({ icone, titulo, menssagem }: CustomModalProps) {
    const retorno = {
        icone,
        titulo,
        menssagem
    };

    return (
        <ContainerStyled>
            <SubcontainerStyled>
                <IconStyled>{icone}</IconStyled>
                <TextStyled>
                    <TituloStyled>{titulo}</TituloStyled>
                    <MsgStyled>{menssagem}</MsgStyled>
                    <ButtonContainerStyled>
                        <ButtonG
                            color="#564caf"
                            onClick={clickado}
                            textColor="#fff"
                            title="Continuar"
                            key={2}
                        />
                    </ButtonContainerStyled>
                </TextStyled>
            </SubcontainerStyled>
        </ContainerStyled>
    );
}