import { ChangeEvent, useState } from "react";
import { DivContainer, Input, IIcon, PTitulo, DivSubContainer, ButtonEye } from "./styled";

interface CustomModalProps {
  titulo: string;
  placeholder: string;
  variantSize: "pequeno" | "grande";
  onChange?: (valor: string) => void;
  register?: {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur: (event: ChangeEvent<HTMLInputElement>) => void;
    ref: (instance: HTMLInputElement | null) => void;
    name: string;
  };
}

export function CPInputEyePassword({ titulo, placeholder, variantSize, onChange, register }: CustomModalProps) {
  const [hide, setHide] = useState(true);

  return (
    <DivContainer>
      <PTitulo>{titulo}</PTitulo>
      <DivSubContainer variantComponent={variantSize}>
        <Input
          {...register} // Aplica o register corretamente
          variantComponent={variantSize}
          placeholder={placeholder}
          type={hide ? "password" : "text"}
          onChange={(e) => {
            if (onChange) onChange(e.target.value); // Se a prop onChange foi passada, chama a função
            if (register?.onChange) register.onChange(e); // Se register existir, chama a função do React Hook Form
          }}
        />
        <ButtonEye onClick={() => setHide(!hide)}>
          <IIcon>{hide ? "visibility" : "visibility_off"}</IIcon>
        </ButtonEye>
      </DivSubContainer>
    </DivContainer>
  );
}






// import { useState } from 'react';
// import { DivContainer, Input, IIcon, PTitulo, DivSubContainer, ButtonEye } from './styled';

// interface CustomModalProps {
//     titulo: string;
//     placeholder: string;
//     variantSize: "pequeno" | "grande";
//     onChange: (valor: string) => void;
// }


// export function CPInputEyePassword({ titulo, placeholder, variantSize, onChange }: CustomModalProps) {
//     const [hide, setHide] = useState(true);
//     return (
//         <DivContainer>
//             <PTitulo>{titulo}</PTitulo>
//             <DivSubContainer variantComponent={variantSize}>                
//                 <Input variantComponent={variantSize} placeholder={placeholder}  type={hide ? "password" : "text"}  onChange={(e) => onChange(e.target.value)} ></Input>
//                 <ButtonEye onClick={() => setHide(!hide)}>
//                     {hide ?
//                         <IIcon>{'visibility'}</IIcon>
//                         :
//                         <IIcon>{'visibility_off'}</IIcon>
//                     }
//                 </ButtonEye>
//             </DivSubContainer>
//         </DivContainer>
//     );
// }

