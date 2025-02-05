import { CPHeader1 } from '../../componentes/Others/CPHeader';
import { DivContainer, DivGridContainer, DivRender, DivTextos, H1Titulo } from './styled';
import { PDescricao } from '../Home/styled';
import { CPFooter } from '../../componentes/Others/CPFooter';

import './style.css';
import { CPCardAnuncioCategory } from '../../componentes/Cards/CPCardAnuncioCategoryZ';
import { useCallback, useEffect, useState } from 'react';
import { AnuncioCompletoDTO } from '../../dto/AnuncioCompletoDTO';
import { api } from '../../api/axios';

interface CustomCategoryProps {
  category: string;
}


export function Category({ category }: CustomCategoryProps) {
  function clickado() {
    alert('Clicado!');
  }

  const [dadosAnuncios, setDadosAnuncios] = useState<AnuncioCompletoDTO[]>([]);
  const [carregando, setCarregando] = useState<boolean>(false);

  const buscarAnuncios = async () => {
    try {
      console.log("response");
      setCarregando(true);
      const response = await api.get<AnuncioCompletoDTO[]>('/anuncios');

      console.log(response.data);

      setDadosAnuncios(response.data);
    } catch (error) {
      console.error('Erro ao carregar anúncios:', error);
      // Alert.alert('Erro', 'Não foi possível carregar os anúncios');
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarAnuncios();
  }, []);


  return (
    <DivContainer>
      {carregando ?
        <DivRender>
            <H1Titulo>carregando</H1Titulo>
        </DivRender>
        :


        <DivRender>
          <CPHeader1 iniciais='JV' name='Jose Vieira' variantType='primario'></CPHeader1>


          <DivTextos>
            <H1Titulo>{category}</H1Titulo>
            <PDescricao>Encontre abaixo todos os profissionais dessa categoria</PDescricao>
          </DivTextos>

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

          <CPFooter></CPFooter>

        </DivRender>
      }

    </DivContainer>
  );


}

function useFocusEffect(arg0: any) {
  throw new Error('Function not implemented.');
}
