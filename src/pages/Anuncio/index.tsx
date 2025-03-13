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
  DivConteudo,
} from "./styled";
import { useNavigate } from "react-router";
import { api } from "../../api/axios";
import { AnuncioCompletoDTO } from "../../dto/AnuncioCompletoDTO";
import { AuthContext } from "../../context/authContext";
import { Loader } from "../../componentes/Others/CPLoader";
import { PrestadorContext } from "../../context/prestadorConntext";

export function Anuncio() {
  const navigate = useNavigate();

  const [visibilidadeModal, setVisibilidadeModal] = useState<boolean>(false);
  const [anuncios, setAnuncios] = useState<AnuncioCompletoDTO[]>([]);
  const [anuncioParaExcluir, setAnuncioParaExcluir] = useState<string | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  const { authData } = useContext(AuthContext);
  const prestadorContext = useContext(PrestadorContext);

  const token = authData?.token;
  const email = authData?.email;

  const buscarDadosPrestador = async () => {
    try {
      prestadorContext.buscarDadosPrestador();
    } catch (error) {
      console.log(error);
    }
  };

  const buscarAnuncios = async () => {
    try {
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!token || !email) {
      console.error("Token ou email não encontrado");
      return;
    }

    if (!prestadorContext.prestadorData) {
      buscarDadosPrestador();
    }

    buscarAnuncios();
  }, [token, email]);

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
      await api.delete(`/anuncio/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          email,
        },
      });

      setAnuncios((prev) => prev.filter((anuncio) => anuncio.id !== id));

      await buscarAnuncios();

      setVisibilidadeModal(false);
    } catch (error) {
      console.error("Erro ao excluir o anúncio:", error);
    }
  }

  return (
    <>
      <DivContainer>
        <CPHeader1
          name={prestadorContext.prestadorData?.name}
          variantType="secundario"
        />
        <DivMediana>
          <H1Titulo>Meus Anúncios</H1Titulo>

          {isLoading ? (
            <Loader />
          ) : anuncios.length > 0 ? (
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
                    uriFoto={anuncio.categoria.icone}
                  />
                );
              })}
            </DivGridContainer>
          ) : (
            <DivConteudo>
              <TextoVazio>
                Não foi possível achar nenhum anúncio criado pelo prestador!
              </TextoVazio>
            </DivConteudo>
          )}

          <DivDireita>
            <CPButtonG
              title="Criar anúncio"
              variantType="primario"
              type="button"
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
