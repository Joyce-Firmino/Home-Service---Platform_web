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

  const dados = [
    { id: 1, servico: "Programador", icone: "../../assets/cozinhar-comida-em-uma-cacarola-quente.png" },
    { id: 2, servico: "Programador", icone: "../../assets/cozinhar-comida-em-uma-cacarola-quente.png" },
    { id: 3, servico: "Programador", icone: "../../assets/cozinhar-comida-em-uma-cacarola-quente.png" },
    { id: 4, servico: "Programador", icone: "../../assets/cozinhar-comida-em-uma-cacarola-quente.png" },
    { id: 5, servico: "Programador", icone: "http://localhost:3005/files/categorias/e6f86b26e67701f418bdce2a8d799370-carrinho-de-bebe.png" },
  ];

  const usuario = {
    id: 1, iniciais: "JV", name: "José Vieira"
  }

  return (
    <DivContainer>

      <CPHeader1 iniciais={usuario.iniciais} name={usuario.name} variantType='secundario'></CPHeader1>

      <CPCarrossel settings={settings} >
        {dados.map((dado) => (
          <SwiperSlide key={dado.id}>
            <CPCardCategory categoria={dado.servico} uriFoto={dado.icone} />
          </SwiperSlide>
        ))}
      </CPCarrossel>

      <DivMediana>
        <DivDescricao>  
          <DivTextos>
            <H1Titulo>Encontre o serviço que você procura!</H1Titulo>
            <PDescricao>Aqui você descobre prestadores de serviço qualificados para resolver qualquer necessidade, seja ela grande ou pequena. Acesse as categorias e encontre o o serviço ideal para você!</PDescricao>
          </DivTextos>
          <CPButtonG title='Encontrar prestador' variantType='primario' onClick={category}></CPButtonG>
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