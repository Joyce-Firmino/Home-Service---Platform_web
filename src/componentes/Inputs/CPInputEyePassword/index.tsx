import { useState } from 'react';
import { DivContainer, Input, IIcon, PTitulo, DivSubContainer, ButtonEye } from './styled';

interface CustomModalProps {
    titulo: string;
    placeholder: string;
    variantSize: "pequeno" | "grande";
    onChange: (valor: string) => void;
}


export function CPInputEyePassword({ titulo, placeholder, variantSize, onChange }: CustomModalProps) {
    const [hide, setHide] = useState(true);
    return (
        <DivContainer>
            <PTitulo>{titulo}</PTitulo>
            <DivSubContainer variantComponent={variantSize}>                
                <Input variantComponent={variantSize} placeholder={placeholder}  type={hide ? "password" : "text"}  onChange={(e) => onChange(e.target.value)} ></Input>
                <ButtonEye onClick={() => setHide(!hide)}>
                    {hide ?
                        <IIcon>{'visibility'}</IIcon>
                        :
                        <IIcon>{'visibility_off'}</IIcon>
                    }
                </ButtonEye>
            </DivSubContainer>
        </DivContainer>
    );
}

