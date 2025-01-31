import { useState } from 'react';
import { DivContainer, Input, IIcon, PTitulo, DivSubContainer, ButtonEye } from './styled';

interface CustomModalProps {
    titulo: string;
    placeholder: string;
    icone: string;
    variantSize: "pequeno" | "grande";
    onChange: (valor: string) => void;
}

export function CPInput02({ titulo, placeholder, icone, variantSize, onChange }: CustomModalProps) {

    return (
        <DivContainer>
            <PTitulo>{titulo}</PTitulo>
            <DivSubContainer variantComponent={variantSize}>
                <Input variantComponent={variantSize} placeholder={placeholder} onChange={(e) => onChange(e.target.value)}></Input>
                <ButtonEye><IIcon>{icone}</IIcon></ButtonEye>
            </DivSubContainer>
        </DivContainer>
    );
}

