import styled from 'styled-components';
import breakpoints from '../../../breakPoints';

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

  @media (${breakpoints.mobile}px) {
    width: 110px;
    height: 110px;
  }
`;

export const H1Title = styled.h1<CustomProfileProps>`
    color: ${({ variantType, theme }) => variantType === "primario" ? theme.COLORS.white : theme.COLORS.purple700};
    font-size: ${(props) => props.theme.FONTSIZE.exgg}px;
   
    @media (${breakpoints.mobile}px) {
      font-size: ${(props) => props.theme.FONTSIZE.gg}px;
  }

`;
