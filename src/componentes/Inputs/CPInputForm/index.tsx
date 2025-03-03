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
                <PTitulo>{titulo}</PTitulo>
                <Input 
                    placeholder={placeholder} 
                    variantComponent={variantSize} 
                    onChange={onChange} 
                    ref={ref} // <-- Agora o `ref` é passado corretamente
                    {...rest}
                />
            </DivContainer>
        );
    }
);

CPInputForm.displayName = "CPInputForm"; // Evita erro no React DevTools




// import { Input, DivContainer, PTitulo } from './styled';
// import { ChangeEventHandler } from 'react';

// interface CustomFormInputProps {
//     titulo: string;
//     placeholder: string;
//     variantSize: "pequeno" | "grande";
//     onChange: ChangeEventHandler<HTMLInputElement>;
//     onBlur?: React.FocusEventHandler<HTMLInputElement>;
//     ref?: React.Ref<HTMLInputElement>;
//     name?: string;
//     value?: string;
// }

// export function CPInputForm({
//     titulo,
//     placeholder,
//     variantSize,
//     onChange,
//     ...rest
// }: CustomFormInputProps) {
//     return (
//         <DivContainer variantComponent={variantSize}>
//             <PTitulo>{titulo}</PTitulo>
//             <Input 
//                 placeholder={placeholder} 
//                 variantComponent={variantSize} 
//                 onChange={onChange} 
//                 {...rest}
//             />
//         </DivContainer>
//     );
// }
