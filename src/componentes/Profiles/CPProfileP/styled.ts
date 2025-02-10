import styled from 'styled-components';

interface CustomProfileProps {
    variantType: "primario" | "secundario";
}

export const DivContainer = styled.div<CustomProfileProps>`
  background-color: ${({ variantType, theme }) =>
    variantType === "primario" ? theme.COLORS.purple700 : theme.COLORS.white};
  width: 50px;
  height: 50px;
  border-radius: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const H1Title = styled.h1<CustomProfileProps>`
  color: ${({ variantType, theme }) =>
    variantType === "primario" ? theme.COLORS.white : theme.COLORS.purple700};
    font-size: ${(props) => props.theme.FONTSIZE.g}px;

    @media (max-width: 768px) {
      font-size: ${(props) => props.theme.FONTSIZE.m}px;

  }

`;




// import styled from 'styled-components';

// interface CustomProfileProps {
//     variantType: "primario" | "secundario" | "primarioMaior" | "secundarioMaior";
// }

// export const DivContainer = styled.div<CustomProfileProps>`
//   background-color: ${({ variantType, theme }) =>
//     variantType === "primario" || variantType === "primarioMaior" ? theme.COLORS.purple700 : theme.COLORS.white};
//   width: ${({ variantType }) =>
//     variantType === "primarioMaior" || variantType === "secundarioMaior" ? "200px" : "50px"};
//   height: ${({ variantType }) =>
//     variantType === "primarioMaior" || variantType === "secundarioMaior" ? "200px" : "50px"};
//   border-radius: ${({ variantType }) =>
//     variantType === "primarioMaior" ? "100px" : "70px"};
  
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   @media (max-width: 768px) {
//     width: 40px;
//     height: 40px;
//   }
// `;

// export const H1Title = styled.h1<CustomProfileProps>`
//   color: ${({ variantType, theme }) =>
//     variantType === "primario" || variantType === "primarioMaior" ? theme.COLORS.white : theme.COLORS.purple700};
    
//     font-size: ${({ variantType, theme }) =>
//     variantType === "primario" || variantType === "secundario"? `${theme.FONTSIZE.g}px` : `${theme.FONTSIZE.exgg}px`};

//     @media (max-width: 768px) {
//       font-size: ${(props) => props.theme.FONTSIZE.m}px;
//   }

// `;
