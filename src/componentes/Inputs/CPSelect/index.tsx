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
import { CategoriaDTO } from "../../../dto/CategoriaDTO";

interface CustomModalProps {
  titulo: string;
  variantSize: "pequeno" | "grande";
  options: CategoriaDTO[];
  register: any;
  errorMessage?: string;
  setValue: UseFormSetValue<{
    titulo: string;
    descricao: string;
    preco: string;
    categoriaId: string;
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

  function handleSelect(option: CategoriaDTO) {
    setSelectState(option.servico);
    setValue("categoriaId", option.id);
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
              <SelectOption
                key={option.id}
                onClick={() => handleSelect(option)}
              >
                {option.servico}
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
