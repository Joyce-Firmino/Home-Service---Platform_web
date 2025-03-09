import { useContext, useEffect } from "react";
import { CPFooter } from "../../componentes/Others/CPFooter";
import { CPForm } from "../../componentes/Others/CPForm";
import { CPHeader1 } from "../../componentes/Others/CPHeader";
import { PrestadorContext } from "../../context/prestadorConntext";
import { DivContainer, DivMediana, H1Titulo } from "./styled";

export function EditarAnuncio() {
  const prestadorContext = useContext(PrestadorContext);

  const buscarDadosPrestador = async () => {
    try {
      prestadorContext.buscarDadosPrestador();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!prestadorContext.prestadorData) {
      buscarDadosPrestador();
    }
  }, []);
  return (
    <DivContainer>
      <CPHeader1
        name={prestadorContext.prestadorData?.name}
        variantType="secundario"
      />
      <DivMediana>
        <H1Titulo>Editar Anúncio</H1Titulo>
        <CPForm />
      </DivMediana>
      <CPFooter></CPFooter>
    </DivContainer>
  );
}
