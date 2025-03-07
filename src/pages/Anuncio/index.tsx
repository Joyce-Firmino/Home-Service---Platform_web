import { useContext, useEffect, useState } from "react";
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
  TextoVazio,
} from "./styled";
import { useNavigate } from "react-router";
import { api } from "../../api/axios";
import { AnuncioCompletoDTO } from "../../dto/AnuncioCompletoDTO";
import { AuthContext } from "../../context/authContext";

export function Anuncio() {
  const navigate = useNavigate();

  const [visibilidadeModal, setVisibilidadeModal] = useState<boolean>(false);
  const [anuncios, setAnuncios] = useState<AnuncioCompletoDTO[]>([]);
  const [anuncioParaExcluir, setAnuncioParaExcluir] = useState<string | null>(
    null
  );

  const { authData } = useContext(AuthContext);

  const token = authData?.token;
  const email = authData?.email;

  useEffect(() => {
    if (!token || !email) {
      console.error("Token ou email não encontrado");
      return;
    }

    const buscarAnuncios = async () => {
      try {
        console.log("response");
        const response = await api.get<AnuncioCompletoDTO[]>(
          "/anunciosPrestador",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              email,
            },
          }
        );
        console.log(response.data);
        setAnuncios(response.data);
      } catch (error) {
        console.error("Erro ao carregar anúncios:", error);
      }
    };

    buscarAnuncios();
  }, [anuncios, token, email]);

  function handleExcluir(id: string) {
    console.log(id);
    setAnuncioParaExcluir(id);
    setVisibilidadeModal(true);
  }

  function confirmarExclusao() {
    if (anuncioParaExcluir !== null) {
      excluirAnuncio(anuncioParaExcluir);
    }
  }

  async function excluirAnuncio(id: string) {
    if (!token || !email) {
      console.error("Token ou email não encontrado");
      return;
    }

    try {
      const response = await api.delete(`/anuncio/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          email,
        },
      });
      console.log("Anúncio excluído com sucesso:", response.data);
      setVisibilidadeModal(false);
      navigate("/anuncios");
    } catch (error) {
      console.error("Erro ao excluir o anúncio:", error);
    }
  }

  return (
    <>
      <DivContainer>
        <CPHeader1 name={"Danrlei"} variantType="secundario"></CPHeader1>
        <DivMediana>
          <H1Titulo>Meus Anúncios</H1Titulo>

          {anuncios.length > 0 ? (
            <DivGridContainer>
              {anuncios.map((anuncio) => {
                return (
                  <CPCardAnuncio
                    key={anuncio.id}
                    prestador={anuncio.prestador.usuario.nome}
                    servico={anuncio.categoria.servico}
                    pagamento={anuncio.preco}
                    descricao={anuncio.descricao}
                    atualizar={() =>
                      navigate(`/editarAnuncio?id=${anuncio.id}`)
                    }
                    excluir={() => handleExcluir(anuncio.id)}
                    uriFoto="test"
                  />
                );
              })}
            </DivGridContainer>
          ) : (
            <TextoVazio>Prestador não possui nenhum anúncio!</TextoVazio>
          )}

          <DivDireita>
            <CPButtonG
              title="Criar anúncios"
              variantType="primario"
              onClick={() => navigate("/criarAnuncio")}
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
            botaoSim={() => confirmarExclusao()}
          ></CPModalSN>
        </ModalBackground>
      )}
    </>
  );
}
