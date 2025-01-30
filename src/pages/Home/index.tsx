import { CPCardCategory } from '../../componentes/Cards/CPCardCategory';
import { CPHeader1 } from '../../componentes/Others/CPHeader';
import { DivBaixar, DivContainer, DivDescricao, DivInferior, DivLojas, DivMediana, DivTextos, H1Titulo, H2Titulo, ImgAppStore, ImgCelulares, ImgPlayStore, ImgTrabalhador } from './styled';
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
  function clickado() {
    alert('Clicado!');
  }

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

  return (
    <DivContainer>

      <CPHeader1 iniciais='JV' name='Jose Vieira' variantType='primario'></CPHeader1>
      <CPCarrossel settings={settings} >

        <SwiperSlide>
          <CPCardCategory categoria='Cozinheiro' uriFoto=''/>
        </SwiperSlide>
        <SwiperSlide>
          <CPCardCategory categoria='Cozinheiro' uriFoto=''/>
        </SwiperSlide>
        <SwiperSlide>
          <CPCardCategory categoria='Cozinheiro' uriFoto=''/>
        </SwiperSlide>
        <SwiperSlide>
          <CPCardCategory categoria='Cozinheiro' uriFoto=''/>
        </SwiperSlide>
        <SwiperSlide>
          <CPCardCategory categoria='Cozinheiro' uriFoto=''/>
        </SwiperSlide>
        <SwiperSlide>
          <CPCardCategory categoria='Cozinheiro' uriFoto=''/>
        </SwiperSlide>
        <SwiperSlide>
          <CPCardCategory categoria='Cozinheiro' uriFoto=''/>
        </SwiperSlide>
        <SwiperSlide>
          <CPCardCategory categoria='Cozinheiro' uriFoto=''/>
        </SwiperSlide>
      </CPCarrossel>
      
      <DivMediana>
        <DivDescricao>
          <DivTextos>
            <H1Titulo>Encontre o serviço que você procura!</H1Titulo>
            <PDescricao>Aqui você descobre prestadores de serviço qualificados para resolver qualquer necessidade, seja ela grande ou pequena. Acesse as categorias e encontre o o serviço ideal para você!</PDescricao>
          </DivTextos>
          <CPButtonG title='Encontrar prestador' variantType='primario' onClick={clickado}></CPButtonG>
        </DivDescricao>
        <ImgTrabalhador src={trabalhador} alt="Homem com roupa de trabalho" />
      </DivMediana>

      <DivInferior>
        <ImgCelulares src={celulares} alt="Homem com roupa de trabalho" />
        <DivBaixar>
          <H2Titulo>Baixe nosso aplicativo
            mobile e acesse na palma da mão</H2Titulo>
          <DivLojas>
            <ImgPlayStore src={playstore} alt="Homem com roupa de trabalho" />
            <ImgAppStore src={appstore} alt="Homem com roupa de trabalho" />
          </DivLojas>
        </DivBaixar>
      </DivInferior>
      <CPFooter></CPFooter>
    </DivContainer>
  );


}