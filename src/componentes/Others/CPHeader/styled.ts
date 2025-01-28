import styled from "styled-components";
import breakpoints from "../../../breakPoints";

export const DivContainer = styled.div`
  height: 124px;
  width: 100%;
  background-color: ${(props) => props.theme.COLORS.purple700};

  @media (${breakpoints.tablet}px) {
    width: 100%;
  }

  @media (${breakpoints.mobile}px) {
    width: 100%;
  }
`;

export const DivBloco = styled.div`
  display: flex;
  height: 124px;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  @media (${breakpoints.mobile}px) {
    justify-content: space-between;
  }
`;

export const DivLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ImgLogo = styled.img`
  width: 74px;
  height: 70px;
`;

export const H1Title = styled.h1`
  color: ${(props) => props.theme.COLORS.white};
  font-size: ${(props) => props.theme.FONTSIZE.g}px;

  @media (${breakpoints.mobile}px) {
    display: none;
  }
`;

export const DivCategorias = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (${breakpoints.mobile}px) {
    display: none;
    gap: 500px;
  }
`;

export const PCategoria = styled.p`
  font-size: ${(props) => props.theme.FONTSIZE.g}px;
  color: ${(props) => props.theme.COLORS.white};
  font-weight: bold;

  @media (${breakpoints.mobile}px) {
    font-size: ${(props) => props.theme.FONTSIZE.p}px;
  }

`;

export const PWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${breakpoints.mobile}px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const CPProfileWrapper = styled.div`

  @media (${breakpoints.mobile}px) {
    display: none;  /* Oculta o CPProfile no mobile */
    width: 100px;
    height: 100px;
    background-color: aquamarine;
  }
`;

export const PCabecalho = styled.p`
  font-size: ${(props) => props.theme.FONTSIZE.g}px;
  color: ${(props) => props.theme.COLORS.white};
  font-weight: bold;

  @media (${breakpoints.mobile}px) {
    font-size: ${(props) => props.theme.FONTSIZE.p}px;
  }
`;

// Menu Hamburguer
export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  span {
    width: 30px;
    height: 3px;
    background-color: ${(props) => props.theme.COLORS.white};
    border-radius: 2px;
  }

  @media (${breakpoints.mobile}px) {
    display: flex;
  }
`;

// Menu Mobile
export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background: ${(props) => props.theme.COLORS.purple700};
  z-index: 1001;
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  gap: 20px;

  @media (${breakpoints.mobile}px) {
    display: flex;
  }
`;

// Botão de fechar
export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.COLORS.white};
  }
`;

// Fundo Preto Transparente
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Transparência */
  z-index: 1000; /* Camada abaixo do menu */
`;








// // esse e o codigo recente

// import styled from "styled-components";
// import breakpoints from "../../../breakPoints";

// export const DivContainer = styled.div`
//   height: 124px;
//   width: 100%;
//   background-color: ${(props) => props.theme.COLORS.purple700};

//   @media (${breakpoints.tablet}px) {
//     width: 100%;
//   }

//   @media (${breakpoints.mobile}px) {
//     width: 100%;
//   }
// `;

// export const DivBloco = styled.div`
//   display: flex;
//   height: 124px;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0 16px;

//   @media (${breakpoints.mobile}px) {
//     justify-content: space-between;
//   }
// `;

// export const DivLogo = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 16px;
// `;

// export const ImgLogo = styled.img`
//   width: 74px;
//   height: 70px;
// `;

// export const H1Title = styled.h1`
//   color: ${(props) => props.theme.COLORS.white};
//   font-size: ${(props) => props.theme.FONTSIZE.g}px;

//   @media (${breakpoints.mobile}px) {
//     display: none;
//   }
// `;

// export const DivCategorias = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 24px;

//   @media (${breakpoints.mobile}px) {
//     display: none;
//   }
// `;

// export const PCategoria = styled.p`
//   font-size: ${(props) => props.theme.FONTSIZE.g}px;
//   color: ${(props) => props.theme.COLORS.white};
//   font-weight: bold;
// `;

// export const PWelcome = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// export const PCabecalho = styled.p`
//   font-size: ${(props) => props.theme.FONTSIZE.g}px;
//   color: ${(props) => props.theme.COLORS.white};
//   font-weight: bold;
// `;

// // Menu Hamburguer
// export const HamburgerMenu = styled.div`
//   display: none;
//   flex-direction: column;
//   gap: 5px;
//   cursor: pointer;

//   span {
//     width: 30px;
//     height: 3px;
//     background-color: ${(props) => props.theme.COLORS.white};
//     border-radius: 2px;
//   }

//   @media (${breakpoints.mobile}px) {
//     display: flex;
//   }
// `;

// // Menu Mobile
// export const MobileMenu = styled.div`
//   position: fixed;
//     top: 0;
//     right: 0;
//     width: 300px;
//     height: 100%;
//     background: ${(props) => props.theme.COLORS.purple700};
//     z-index: 1001;
//     display: flex;
//     flex-direction: column;
//     padding: 16px;
//     box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);

//   @media (${breakpoints.mobile}px) {
//     display: flex;
//   }
// `;

// // Botão de fechar
// export const CloseButton = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   cursor: pointer;

//   svg {
//     color: ${(props) => props.theme.COLORS.white};
//   }
// `;
