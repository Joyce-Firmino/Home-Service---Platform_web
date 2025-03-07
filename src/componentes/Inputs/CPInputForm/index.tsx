import { Input, DivContainer, PTitulo } from './styled';
import { ChangeEventHandler, forwardRef } from 'react';

interface CustomFormInputProps {
    titulo: string;
    placeholder: string;
    variantSize: "pequeno" | "grande";
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    name?: string;
    value?: string;
}

// 🔥 Usando `forwardRef` para permitir a referência do react-hook-form
export const CPInputForm = forwardRef<HTMLInputElement, CustomFormInputProps>(
    ({ titulo, placeholder, variantSize, onChange, ...rest }, ref) => {
        return (
            <DivContainer variantComponent={variantSize}>
                <PTitulo htmlFor='name'>{titulo}</PTitulo>
                <Input 
                    placeholder={placeholder} 
                    variantComponent={variantSize} 
                    onChange={onChange} 
                    id='name'
                    ref={ref} // <-- Agora o `ref` é passado corretamente
                    {...rest}
                />
            </DivContainer>
        );
    }
);

CPInputForm.displayName = "CPInputForm"; // Evita erro no React DevTools