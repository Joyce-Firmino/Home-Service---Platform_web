.carousel .slick-arrow.slick-prev,
.carousel .slick-arrow.slick-next {
  background: #fcfcfc;
  width: 47px;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  box-shadow: 1px 2px 10px -1px rgb(0 0 0 / 30%);
}
.carousel .slick-prev {
  left: 0;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
}
.carousel .slick-next {
  right: 0;
  border-bottom-left-radius: 7px;
  border-top-left-radius: 7px;
}

import styled, { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  .slick-prev, .slick-next {
    z-index: 1;
    color: red; /* Cor personalizada */
  }

  .slick-prev:before, .slick-next:before {
    font-size: 24px; /* Tamanho da seta */
    color: red; /* Cor personalizada */
  }
`;