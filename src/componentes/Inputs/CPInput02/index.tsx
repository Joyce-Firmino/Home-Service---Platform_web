import { DivContainer, Input, IIcon, PTitulo, DivSubContainer } from './styled';

interface CustomModalProps {
    titulo: string;
    placeholder: string;
    icone: string;
}

function clickado() {
    alert("Clicado");
}

export function CPInput02({ titulo, placeholder, icone }: CustomModalProps) {
    return (
        <DivContainer>
            <PTitulo>{titulo}</PTitulo>
            <DivSubContainer>
                <Input placeholder={placeholder}></Input>
                <IIcon>{icone}</IIcon>
            </DivSubContainer>
        </DivContainer>
    );
}