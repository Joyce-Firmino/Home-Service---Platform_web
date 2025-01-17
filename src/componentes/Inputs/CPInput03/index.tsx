import { DivContainer, Input, PTitulo } from './styled';

interface CustomModalProps {
    titulo: string;
    placeholder: string;
}

function clickado() {
    alert("Clicado");
}

export function CPInput03({ titulo, placeholder }: CustomModalProps) {
    return (
        <DivContainer>
            <PTitulo>{titulo}</PTitulo>
            <Input placeholder={placeholder}></Input>
        </DivContainer>
    );
}