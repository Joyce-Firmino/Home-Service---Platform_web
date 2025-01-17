import { DivContainer, Input, IIcon, PTitulo, DivSubContainer } from './styled';

interface CustomModalProps {
    titulo: string;
    placeholder: string;
    icone: string;
}

function clickado() {
    alert("Clicado");
}

export function CPInput01({ titulo, placeholder, icone }: CustomModalProps) {
    return (
        <DivContainer>
            <PTitulo>Titulo</PTitulo>
            <DivSubContainer>
                <IIcon>search</IIcon>
                <Input placeholder={placeholder}></Input>
            </DivSubContainer>
        </DivContainer>
    );
}