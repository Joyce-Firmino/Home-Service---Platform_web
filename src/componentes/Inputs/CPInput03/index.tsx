import { DivContainer, Input, PTitulo } from './styled';

interface CustomModalProps {
    titulo: string;
    placeholder: string;
    variantSize: "pequeno" | "grande";
}

function clickado() {
    alert("Clicado");
}

export function CPInput03({ titulo, placeholder, variantSize }: CustomModalProps) {
    return (
        <DivContainer variantComponent={variantSize} >
            <PTitulo>{titulo}</PTitulo>
            <Input placeholder={placeholder} variantComponent={variantSize} ></Input>
        </DivContainer>
    );
}