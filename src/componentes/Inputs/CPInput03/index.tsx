import { ChangeEvent } from "react";
import { DivContainer, Input, PTitulo } from "./styled";

interface CustomModalProps {
  titulo: string;
  placeholder: string;
  variantSize: "pequeno" | "grande";
  onChange?: (valor: string) => void;
  register?: {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
    ref?: (instance: HTMLInputElement | null) => void;
    name?: string;
    [key: string]: any; // Permite outras propriedades do register sem erro
  };
}

export function CPInput03({ titulo, placeholder, variantSize, onChange, register }: CustomModalProps) {
  return (
    <DivContainer variantComponent={variantSize}>
      <PTitulo>{titulo}</PTitulo>
      <Input
        {...register} // Aplica as propriedades do register corretamente
        placeholder={placeholder}
        variantComponent={variantSize}
        onChange={(e) => {
          if (onChange) onChange(e.target.value); // Chama a função onChange caso seja passada
          if (register?.onChange) register.onChange(e); // Chama a função do register caso seja usada
        }}
      />
    </DivContainer>
  );
}