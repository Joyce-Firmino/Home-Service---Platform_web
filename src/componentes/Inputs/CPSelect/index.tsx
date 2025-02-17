import { useState } from "react";
import { IIcon } from "../CPInput02/styled";
import {
  DivContainer,
  Select,
  PTitulo,
  SelectDropdown,
  SelectOption,
  HiddenInput,
  MensagemErro,
} from "./styled";
import { UseFormSetValue } from "react-hook-form";

interface CustomModalProps {
  titulo: string;
  variantSize: "pequeno" | "grande";
  options: string[];
  register: any;
  errorMessage?: string;
  setValue: UseFormSetValue<{
    titulo: string;
    descricao: string;
    preco: string;
    categoria: string;
  }>;
}

export function CPSelect({
  titulo,
  variantSize,
  options,
  register,
  errorMessage,
  setValue,
}: CustomModalProps) {
  const [visibilidadeDropdown, setVisibilidadeDropdown] =
    useState<boolean>(false);
  const [selectState, setSelectState] = useState<string>("");

  function handleSelect(option: string) {
    setSelectState(option);
    setValue("categoria", option);
    setVisibilidadeDropdown(false);
  }

  return (
    <div>
      <DivContainer variantComponent={variantSize}>
        <PTitulo>{titulo}</PTitulo>
        <Select
          variantComponent="grande"
          onClick={() => setVisibilidadeDropdown(!visibilidadeDropdown)}
        >
          {selectState || "Categoria"}
          <IIcon>keyboard_arrow_down</IIcon>
        </Select>
        {visibilidadeDropdown && (
          <SelectDropdown>
            {options.map((option) => (
              <SelectOption key={option} onClick={() => handleSelect(option)}>
                {option}
              </SelectOption>
            ))}
          </SelectDropdown>
        )}
      </DivContainer>

      <HiddenInput type="hidden" value={selectState} {...register} />

      {errorMessage && <MensagemErro>{errorMessage}</MensagemErro>}
    </div>
  );
}
