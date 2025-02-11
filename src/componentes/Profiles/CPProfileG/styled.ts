import styled from 'styled-components';

interface CustomProfileProps {
    variantType: "primario" | "secundario";
}

export const DivContainer = styled.div<CustomProfileProps>`
  background-color: ${({ variantType, theme }) =>
    variantType === "primario" ? theme.COLORS.purple700 : theme.COLORS.white};
  width: 200px;
  height: 200px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const H1Title = styled.h1<CustomProfileProps>`
    color: ${({ variantType, theme }) => variantType === "primario" ? theme.COLORS.white : theme.COLORS.purple700};
    font-size: ${(props) => props.theme.FONTSIZE.exgg}px;
   
    @media (max-width: 768px) {
      font-size: ${(props) => props.theme.FONTSIZE.m}px;
  }

`;
