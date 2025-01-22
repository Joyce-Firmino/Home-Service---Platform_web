import { DivContainer, Input, IIcon, PTitulo, DivSubContainer } from './styled';

interface CustomModalProps {
    titulo: string;
    placeholder: string;
    icone: string;
    variantSize: "pequeno" | "grande";
}

export function CPInput01({ titulo, placeholder, icone, variantSize }: CustomModalProps) {
    return (
        <DivContainer>
            <PTitulo>{titulo}</PTitulo>
            <DivSubContainer variantComponent={variantSize}>
                <IIcon>{icone}</IIcon>
                <Input variantComponent={variantSize} placeholder={placeholder} ></Input>
            </DivSubContainer>
        </DivContainer>
    );
}