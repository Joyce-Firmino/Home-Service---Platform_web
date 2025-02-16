import { useState } from "react";
import { CPButtonG } from "../../componentes/Buttons/CPButtonG";
import { CPCardAnuncio } from "../../componentes/Cards/CPCardAnuncio";
import { CPModalSN } from "../../componentes/Modals/CPModalSN";
import { CPFooter } from "../../componentes/Others/CPFooter";
import { CPHeader1 } from "../../componentes/Others/CPHeader";
import {
  H1Titulo,
  DivContainer,
  DivMediana,
  DivGridContainer,
  DivDireita,
  ModalBackground,
} from "./styled";

const anuncios = [
  {
    id: "1",
    prestador: "Danilo",
    servico: "Babá",
    descricao: "Cuidado profissional para crianças, disponível todos os dias.",
    preco: "R$ 50,00/hora",
  },
  {
    id: "2",
    prestador: "Danilo",
    servico: "Jardinagem",
    descricao: "Serviço de jardinagem para pequenos e grandes espaços.",
    preco: "R$ 80,00 por serviço",
  },
  {
    id: "3",
    prestador: "Danilo",
    servico: "Encanador",
    descricao: "Reparo de encanamentos e instalações hidráulicas.",
    preco: "R$ 120,00 por visita",
  },
  {
    id: "4",
    prestador: "Danilo",
    servico: "Eletricista",
    descricao: "Instalações elétricas e manutenção preventiva.",
    preco: "R$ 100,00 por hora",
  },
];

export function Anuncio() {
  const [visibilidadeModal, setVisibilidadeModal] = useState<boolean>(false);
  return (
    <>
      <DivContainer>
        <CPHeader1
          iniciais={"MC"}
          name={"Clara"}
          variantType="primario"
        ></CPHeader1>
        <DivMediana>
          <H1Titulo>Meus Anúncios</H1Titulo>
          <DivGridContainer>
            {anuncios.map((anuncio) => {
              return (
                <CPCardAnuncio
                  key={anuncio.id}
                  prestador={anuncio.prestador}
                  servico={anuncio.servico}
                  pagamento={anuncio.preco}
                  descricao={anuncio.descricao}
                  atualizar={() => console.log("atualizar!")}
                  excluir={() => setVisibilidadeModal(true)}
                  uriFoto="test"
                />
              );
            })}
          </DivGridContainer>
          <DivDireita>
            <CPButtonG
              title="Criar anúncios"
              variantType="primario"
              onClick={() => console.log("clique")}
            ></CPButtonG>
          </DivDireita>
        </DivMediana>

        <CPFooter></CPFooter>
      </DivContainer>
      {visibilidadeModal && (
        <ModalBackground>
          <CPModalSN
            icone="warning"
            menssagem="Deseja realmente excluir o anúncio?"
            titulo="Excluir Anúncio"
            botaoNao={() => setVisibilidadeModal(false)}
            botaoSim={() => console.log("")}
          ></CPModalSN>
        </ModalBackground>
      )}
    </>
  );
}
