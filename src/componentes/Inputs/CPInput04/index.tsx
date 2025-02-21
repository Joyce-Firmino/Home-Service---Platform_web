import { DivContainer, Input, MensagemErro, PTitulo } from "./styled";

interface CustomModalProps {
  titulo: string;
  placeholder: string;
  variantSize: "pequeno" | "grande";
  register: any;
  errorMessage?: string;
}

export function CPInput04({
  titulo,
  placeholder,
  variantSize,
  register,
  errorMessage,
}: CustomModalProps) {
  return (
    <>
      <DivContainer variantComponent={variantSize}>
        <PTitulo>{titulo}</PTitulo>
        <Input
          placeholder={placeholder}
          variantComponent={variantSize}
          {...register}
        />
      </DivContainer>
      {errorMessage && <MensagemErro>{errorMessage}</MensagemErro>}
    </>
  );
}
