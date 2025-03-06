import { CPFooter } from "../../componentes/Others/CPFooter";
import { CPForm } from "../../componentes/Others/CPForm";
import { CPHeader1 } from "../../componentes/Others/CPHeader";
import { DivContainer, DivMediana, H1Titulo } from "./styled";

export function EditarAnuncio() {
  return (
    <DivContainer>
      <CPHeader1 name={"Danrlei"} variantType="primario"></CPHeader1>
      <DivMediana>
        <H1Titulo>Editar Anúncio</H1Titulo>
        <CPForm />
      </DivMediana>
      <CPFooter></CPFooter>
    </DivContainer>
  );
}
