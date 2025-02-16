import styled from "styled-components";
import Slider from "react-slick";


export const GlobalStyles = styled.div`
  body {
    width: 100%; /* ou uma largura específica */
    max-width: 1200px; /* Define uma largura máxima para evitar comportamentos anômalos */
    margin: 0 auto;
    overflow: hidden; /* Evita elementos "esticados" fora do contêiner */
  }
`;

export const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    flex-direction: row;
    /* justify-content: center;
    align-items: center; */
    background: red;
    border-radius: 10px;
    /* width: auto; */
    /* padding: 10px; */

  }
  .slick-slide.slick-cloned {
  display: none;
}

  .slick-list {
    display: flex;
    width: 100% !important; /* Garante que não ultrapasse o tamanho do contêiner pai */
  }

  .slick-prev,
  .slick-next {
    color: #000; /* Cor padrão dos controles */
  }

  .slick-prev:hover,
  .slick-next:hover {
    color: #f39c12; /* Cor ao passar o mouse nos controles */
  }

  .slick-dots {
    bottom: -30px;
    li {
      margin: 0 5px;
      button {
        &:before {
          color: #000; /* Cor padrão dos pontos */
          opacity: 0.6;
        }
      }
    }
    li.slick-active button:before {
      color: #f39c12; /* Cor do ponto ativo */
      opacity: 1;
    }
  }
`;

