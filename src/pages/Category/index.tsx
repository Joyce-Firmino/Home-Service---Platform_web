import { CPHeader1 } from '../../componentes/Others/CPHeader';
import { DivContainer, DivConteudo, DivGridContainer, DivRender, DivTextos, H1Titulo } from './styled';
import { PDescricao } from '../Home/styled';
import { CPFooter } from '../../componentes/Others/CPFooter';
import { CPCardAnuncioCategory } from '../../componentes/Cards/CPCardAnuncioCategoryZ';
import { useEffect, useState } from 'react';
import { AnuncioCompletoDTO } from '../../dto/AnuncioCompletoDTO';
import { api } from '../../api/axios';
import { Loader } from '../../componentes/Others/CPLoader';
import { CPModalConfirm } from '../../componentes/Modals/CPModalConfirmacao';
import { useNavigate, useParams } from 'react-router';
import { navegarParaPaginaHome } from '../../util/navigation';
import { fetchAddress } from '../../util/converterEndereco';

export function Category() {

  const [dadosAnuncios, setDadosAnuncios] = useState<AnuncioCompletoDTO[]>([]);
  const [carregando, setCarregando] = useState<boolean>(false);
  const [erroCarregarDados, setErroCarregarDados] = useState<boolean>(false);
  const [mostrarModal, setMostrarModal] = useState(false);

  const { id, categoria } = useParams();

  const navigate = useNavigate();

  const buscarAnuncios = async () => {
    try {
      console.log("response");
      setCarregando(true);
      const response = await api.get<AnuncioCompletoDTO[]>(`/anunciosCategoria/${id}`);

      console.log(response.data);

      setDadosAnuncios(response.data);
    } catch (error) {
      console.error('Erro ao carregar anúncios:', error);
      setErroCarregarDados(true);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarAnuncios();
  }, []);


  return (
    <DivContainer>
      {carregando ? (
        <DivRender>
          <CPHeader1 variantType='primario'></CPHeader1>

          <DivConteudo>
            <Loader></Loader>
          </DivConteudo>

          <CPFooter></CPFooter>

        </DivRender>)
        : erroCarregarDados ? (

          <DivRender>
            <CPHeader1 variantType='primario'></CPHeader1>

            <DivConteudo>
              <CPModalConfirm icone='close' menssagem='Erro ao carregar anúncios' titulo='Erro' variant='erro' onClose={() => {
                setMostrarModal(false);
                navegarParaPaginaHome(navigate);
              }}></CPModalConfirm>
            </DivConteudo>

            <CPFooter></CPFooter>

          </DivRender>

        ) :


          < DivRender >
            <CPHeader1 variantType='primario'></CPHeader1>


            <DivTextos>
              <H1Titulo>{categoria}</H1Titulo>
              <PDescricao>Encontre abaixo todos os profissionais dessa categoria</PDescricao>
            </DivTextos>
            <DivConteudo>
              <DivGridContainer>{
                dadosAnuncios.map((anuncio) => (
                  <CPCardAnuncioCategory
                    key={anuncio.id}
                    city={fetchAddress(anuncio.prestador.latitude, anuncio.prestador.longitude)}
                    prestador={anuncio.prestador.usuario.nome}
                    email={anuncio.prestador.usuario.email}
                    servico={anuncio.titulo}
                    telefone={anuncio.prestador.usuario.telefone}
                    uriFoto={anuncio.categoria.icone}
                  />
                ))
              }
              </DivGridContainer>
            </DivConteudo>

            <CPFooter></CPFooter>

          </DivRender>
      }

    </DivContainer >
  );


}