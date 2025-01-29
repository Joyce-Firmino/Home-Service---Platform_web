import styled from "styled-components";
import breakpoints from "../../../breakPoints";

interface HeaderProps {
  variantType: string;
}

export const DivContainer = styled.div`
  display: flex;
  height: 104px;
  width: 100%;
  background-color: ${(props) => props.theme.COLORS.purple700};
  align-items: center;
  justify-content: center;


  @media (${breakpoints.tablet}px) {
    width: 100%;
  }

  @media (${breakpoints.mobile}px) {
    width: 100%;
    height: 85px;
  }
`;

export const DivBloco = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  width: 1300px;

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
  width: 65px;
  height: 61px;

  @media (${breakpoints.tablet}px) {
    width: 50px;
    height: auto;
  }
  @media (${breakpoints.mobile}px) {
    width: 40px;
    height: auto;
  }
`;

export const H1Title = styled.h1`
  color: ${(props) => props.theme.COLORS.white};
  font-size: ${(props) => props.theme.FONTSIZE.g}px;

  @media (${breakpoints.mobile}px) {
    font-size: ${(props) => props.theme.FONTSIZE.m}px;
  }
`;

export const DivCategorias = styled.div<HeaderProps>`
  display: flex;
  align-items: center;
  gap: 30px;

  gap: ${({ variantType }) =>
    variantType === "primario" ? 30 : variantType === "secundario" ? 15 : 30}px;


  @media (${breakpoints.mobile}px) {
    display: none;
  }
`;



export const DivMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
    

  @media (${breakpoints.mobile}px) {
  }

  svg {
    color: ${(props) => props.theme.COLORS.white};
  }

`;

export const IIcon = styled.i`
font-family: 'Material Symbols Outlined', sans-serif;
font-weight: normal;
font-style: normal;
font-size: 20px;
color: ${props => props.theme.COLORS.white};
`;

export const PCategoria = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.COLORS.white};
  font-weight: normal;

  @media (${breakpoints.mobile}px) {
    font-size: ${(props) => props.theme.FONTSIZE.p}px;
  }

`;

export const PWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;

  @media (${breakpoints.mobile}px) {
  }
`;

export const CPProfileWrapper = styled.div`

  @media (${breakpoints.mobile}px) {
   

  }
`;

export const PCabecalho = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.COLORS.white};
  font-weight: normal;

  @media (${breakpoints.mobile}px) {
    font-size: ${(props) => props.theme.FONTSIZE.p}px;
  }
`;

// Menu Hamburguer
export const HamburgerMenu = styled.div<HeaderProps>`
    ${({ variantType }) =>
    variantType === "primario" &&
    `
    @media (${breakpoints.mobile}px) {
      display: flex;
    }
  `}

  display: none; /* Deixe flex por padrão */
  flex-direction: column;
  gap: 6px;
  cursor: pointer;

  span {
    width: 30px;
    height: 4px;
    background-color: ${(props) => props.theme.COLORS.white};
    border-radius: 2px;
  }
  

  /* Se for 'secundaria', esconde no mobile */
  ${({ variantType }) =>
    variantType === "secundario" &&
    `
    @media (${breakpoints.mobile}px) {
      display: none;
    }
  `}
`;

// Menu Mobile
export const MobileMenu = styled.div`
  display: none;


@media (${breakpoints.mobile}px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 200px;
    height: 100%;
    background: ${(props) => props.theme.COLORS.purple700};
    z-index: 1001;
    display: flex;
    flex-direction: column;
    padding: 16px;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
    gap: 20px;
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
  display: none;
 
  @media (${breakpoints.mobile}px) {
    display: flex;
    position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Transparência */
  z-index: 1000; /* Camada abaixo do menu */  }
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
