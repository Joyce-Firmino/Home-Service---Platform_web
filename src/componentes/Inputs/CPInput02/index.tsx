import { DivContainer, Input, IIcon, PTitulo, DivSubContainer } from './styled';

interface CustomModalProps {
    titulo: string;
    placeholder: string;
    icone: string;
    variantSize: "pequeno" | "grande";
}

export function CPInput02({ titulo, placeholder, icone, variantSize }: CustomModalProps) {
    return (
        <DivContainer>
            <PTitulo>{titulo}</PTitulo>
            <DivSubContainer  variantComponent={variantSize}>
                <Input  variantComponent={variantSize} placeholder={placeholder}></Input>
                <IIcon>{icone}</IIcon>
            </DivSubContainer>
        </DivContainer>
    );
}