import { CPHeader1 } from '../../componentes/Others/CPHeader';
import { DivContainer, DivConteudo, DivGridContainer, DivRender, DivTextos, H1Titulo } from './styled';
import { PDescricao } from '../Home/styled';
import { CPFooter } from '../../componentes/Others/CPFooter';

import './style.css';
import { CPCardAnuncioCategory } from '../../componentes/Cards/CPCardAnuncioCategoryZ';
import { useCallback, useEffect, useState } from 'react';
import { AnuncioCompletoDTO } from '../../dto/AnuncioCompletoDTO';
import { api } from '../../api/axios';
import { Loader } from '../../componentes/Others/CPLoader';
import { CPModalConfirm } from '../../componentes/Modals/CPModalConfirmacao';

interface CustomCategoryProps {
  category: string;
}


export function Category({ category }: CustomCategoryProps) {
  function clickado() {
    alert('Clicado!');
  }

  const [dadosAnuncios, setDadosAnuncios] = useState<AnuncioCompletoDTO[]>([]);
  const [carregando, setCarregando] = useState<boolean>(false);
  const [erroCarregarDados, setErroCarregarDados] = useState<boolean>(false);
  

  const buscarAnuncios = async () => {
    try {
      console.log("response");
      setCarregando(true);
      const response = await api.get<AnuncioCompletoDTO[]>('/anuncios');

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
          <CPHeader1  name='Jose Vieira' variantType='primario'></CPHeader1>

          <DivConteudo>
            <Loader></Loader>
          </DivConteudo>

          <CPFooter></CPFooter>

        </DivRender>)
        : erroCarregarDados ? (

          <DivRender>
            <CPHeader1 name='Jose Vieira' variantType='primario'></CPHeader1>

            <DivConteudo>
              <CPModalConfirm icone='close' menssagem='Erro ao carregar anúncios' titulo='Erro' variant='erro'></CPModalConfirm>
            </DivConteudo>

            <CPFooter></CPFooter>

          </DivRender>

        ) :


          < DivRender >
            <CPHeader1 name='Jose Vieira' variantType='primario'></CPHeader1>


            <DivTextos>
              <H1Titulo>{category}</H1Titulo>
              <PDescricao>Encontre abaixo todos os profissionais dessa categoria</PDescricao>
            </DivTextos>
            <DivConteudo>
              <DivGridContainer>{
                dadosAnuncios.map((anuncio) => (
                  <CPCardAnuncioCategory
                    key={anuncio.id}
                    city={anuncio.prestador.cnpj}
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

function useFocusEffect(arg0: any) {
  throw new Error('Function not implemented.');
}
