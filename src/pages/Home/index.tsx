import { CPCardCategory } from '../../componentes/Cards/CPCardCategory';
import { CPHeader1 } from '../../componentes/Others/CPHeader';
import { DivBaixar, DivContainer, DivDescricao, DivInferior, DivLojas, DivMediana, DivTextos, H1Titulo, H2Titulo, ImgCelulares, ImgPlayStore, ImgTrabalhador } from './styled';
import playstore from "../../assets/playStore.svg"
import appstore from "../../assets/appstore.svg"
import trabalhador from "../../assets/trabalhador.svg"
import celulares from "../../assets/celulares.svg"
import { PDescricao } from '../Home/styled';
import { CPButtonG } from '../../componentes/Buttons/CPButtonG';
import { CPFooter } from '../../componentes/Others/CPFooter';
import CPCarrossel from '../../componentes/Others/CPCarrossel';
import { SwiperProps, SwiperSlide } from 'swiper/react';


import './style.css';
import { useEffect, useState } from 'react';
import { CategoriaDTO } from '../../dto/CategoriaDTO';
import { api } from '../../api/axios';
import { PrestadorDTO } from '../../dto/GetPrestadorDTO';
import { useNavigate } from 'react-router';


export function Home() {
  //fazer a lógica de navegação
  const category = () => {
    // navigation.navigate("Category") 
  };


  const settings: SwiperProps = {
    navigation: false,
    autoHeight: false,
    loop: true,
    breakpoints: {
      429: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 5,
      },
      1024: {
        slidesPerView: 6,
      },
    },
    className: "carrossel"

  };

  const [dadosCategoria, setDadosCategoria] = useState<CategoriaDTO[]>([]);
  const [dadosPrestador, setDadosPrestador] = useState<PrestadorDTO[]>([]);
  const [carregando, setCarregando] = useState<boolean>(false);

  const navigate = useNavigate();

  function navegarParaPaginaCategory(id: string): void {
    navigate(`/anunciosCategoria/${id}`);
  }

  function navegarParaPaginaHome() {
    navigate(`/`);
  }

  const buscarCategoria = async () => {
    try {
      console.log("response");
      setCarregando(true);
      const response = await api.get<CategoriaDTO[]>('/listCategorias');

      console.log(response.data);

      setDadosCategoria(response.data);
    } catch (error) {
      console.error('Erro ao carregar categorias:', error);
      // Alert.alert('Erro', 'Não foi possível carregar os anúncios');
    } finally {
      setCarregando(false);
    }
  };

  const buscarPrestador = async () => {
    try {
      const response = await api.get<PrestadorDTO[]>('/prestadorPerfil', {
        // headers: {
        //     Authorization: `Bearer ${authData.authData?.token}`,
        //     email: authData.authData?.email
        // }
      });
      console.log(response.data);
      setDadosPrestador(response.data);
    } catch (error) {
      console.error('Erro ao carregar prestador:', error);
      // Alert.alert('Erro', 'Não foi possível carregar os anúncios');
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarCategoria();
    const interval = setInterval(() => {
      buscarCategoria();
    }, 30000); // Atualiza a cada 30 segundos

    return () => clearInterval(interval);
  }, []);



  const usuario = {
    id: 1, iniciais: "JV", name: "José Vieira"
  }

  return (
    <DivContainer>

      <CPHeader1 name={usuario.name} variantType='primario'></CPHeader1>

      <CPCarrossel settings={settings} >
        {dadosCategoria.map((dado) => (
          <SwiperSlide key={dado.id}>
            <button onClick={() => navegarParaPaginaCategory(dado.id)}>
              <CPCardCategory categoria={dado.servico} uriFoto={dado.icone} />
            </button>
          </SwiperSlide>
        ))}
      </CPCarrossel>

      <DivMediana>
        <DivDescricao>
          <DivTextos>
            <H1Titulo>Encontre o serviço que você procura!</H1Titulo>
            <PDescricao>Aqui você descobre prestadores de serviço qualificados para resolver qualquer necessidade, seja ela grande ou pequena. Acesse as categorias e encontre o o serviço ideal para você!</PDescricao>
          </DivTextos>
          <CPButtonG title='Encontrar prestador' variantType='primario' onClick={() => console.log('d')}></CPButtonG>
        </DivDescricao>
        <ImgTrabalhador src={trabalhador} alt="Homem com roupa de trabalho" />
      </DivMediana>

      <DivInferior>
        <ImgCelulares src={celulares} alt="Homem com roupa de trabalho" />
        <DivBaixar>
          <H2Titulo>Baixe nosso aplicativo
            mobile e acesse na palma da mão</H2Titulo>
          <DivLojas>
            <a href="https://play.google.com/store/games?device=windows&&utm_source=latam_Med&utm_medium=hasem&utm_content=Dec1622&utm_campaign=Evergreen&pcampaignid=MKT-EDR-latam-br-1710138+-Med-hasem-py-Evergreen-Dec1622-Text_Search_BKWS-id_102353_%7CEXA%7CONSEM_kwid_43700074624718464_adgroupid_145056776536_keywordid_kwd-28432345789&gad_source=1&gclid=Cj0KCQiA4-y8BhC3ARIsAHmjC_F6HuSDv3WR3U49HduRoybghTMv1BPm3fek20sV5ws92Er5IYO6_nwaAntbEALw_wcB&gclsrc=aw.ds"
              target="_blank"
              rel="noopener noreferrer"><ImgPlayStore src={playstore} alt="Loja da playstore" /></a>
            <a href="https://www.apple.com/br/app-store/"
              target="_blank"
              rel="noopener noreferrer"><ImgPlayStore src={appstore} alt="Loja da Apple" /></a>
          </DivLojas>
        </DivBaixar>
      </DivInferior>
      <CPFooter></CPFooter>
    </DivContainer>
  );


}