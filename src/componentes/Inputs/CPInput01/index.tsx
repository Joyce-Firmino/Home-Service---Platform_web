import { useState } from 'react';
import { DivContainer, Input, IIcon, PTitulo, DivSubContainer } from './styled';

interface CustomModalProps {
    titulo: string;
    placeholder: string;
    icone: string;
    variantSize: "pequeno" | "grande";
    onChange: (valor: string) => void;
}

export function CPInput01({ titulo, placeholder, icone, variantSize, onChange }: CustomModalProps) {

    const [texto, setTexto] = useState('');

    return (
        <DivContainer>
            <PTitulo>{titulo}</PTitulo> 
            {/* alterar esse p para uma label   */}
            <DivSubContainer variantComponent={variantSize}>
                <IIcon>{icone}</IIcon>
                <Input variantComponent={variantSize} placeholder={placeholder} onChange={(e) => onChange(e.target.value)}></Input>
            </DivSubContainer>
        </DivContainer>
    );
}