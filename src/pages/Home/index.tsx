import { CPCardCategory } from '../../componentes/Cards/CPCardAnuncioCategoryZ copy';
import { CPHeader1 } from '../../componentes/Others/CPHeader';
import { DivBaixar, DivContainer, DivDescricao, DivInferior, DivLojas, DivMediana, DivTextos, H1Titulo, H2Titulo, ImgAppStore, ImgCelulares, ImgPlayStore, ImgTrabalhador } from './styled';
import foto from "../../assets/cozinhar-comida-em-uma-cacarola-quente.png"
import playstore from "../../assets/playStore.svg"
import appstore from "../../assets/appstore.svg"
import trabalhador from "../../assets/trabalhador.svg"
import celulares from "../../assets/celulares.svg"
import { PDescricao } from '../Home/styled';
import { CPButtonG } from '../../componentes/Buttons/CPButtonG';

import { CPFooter } from '../../componentes/Others/CPFooter';
// import { CPCarrosel } from '../../componentes/Others/CPCarrossel';
import SimpleSlider from '../../componentes/Others/CPCarrossel';


// import 'swiper/css';


export function Home() {
  function clickado() {
    alert('Clicado!');
  }

  return (
    <DivContainer>
      <DivMediana>
        <DivDescricao>
          <DivTextos>
            <H1Titulo>Encontre o serviço que você procura!</H1Titulo>
            <PDescricao>Aqui você descobre prestadores de serviço qualificados para resolver qualquer necessidade, seja ela grande ou pequena. Acesse as categorias e encontre o o serviço ideal para você!</PDescricao>
          </DivTextos>
          <CPButtonG title='Encontrar prestador' variantType='primario' onClick={clickado}></CPButtonG>
        </DivDescricao>
        <ImgTrabalhador src={trabalhador} alt="Homem com roupa de trabalho" />      </DivMediana>

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