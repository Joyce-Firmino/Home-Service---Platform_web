import { useState } from 'react';
import { DivContainer, Input, PTitulo } from './styled';

interface CustomModalProps {
    titulo: string;
    placeholder: string;
    variantSize: "pequeno" | "grande";
    onChange: (valor: string) => void;
}

function clickado() {
    alert("Clicado");
}

export function CPInput03({ titulo, placeholder, variantSize, onChange }: CustomModalProps) {


    return (
        <DivContainer variantComponent={variantSize} >
            <PTitulo>{titulo}</PTitulo>
            <Input placeholder={placeholder} variantComponent={variantSize} onChange={(e) => onChange(e.target.value)}></Input>
        </DivContainer>
    );
}