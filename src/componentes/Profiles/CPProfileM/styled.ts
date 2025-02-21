import styled from 'styled-components';
import breakpoints from '../../../breakPoints';

interface CustomProfileProps {
    variantType: "primario" | "secundario";
}

export const DivContainer = styled.div<CustomProfileProps>`
  background-color: ${({ variantType, theme }) =>
    variantType === "primario" ? theme.COLORS.purple600 : theme.COLORS.white};
  width: 160px;
  height: 160px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (${breakpoints.tablet}px) {
    width: 130px;
    height: 130px;
  }
  
  @media (${breakpoints.mobile}px)  {
    width: 100px;
    height: 100px;
  }
`;

export const H1Title = styled.h1<CustomProfileProps>`
    color: ${({ variantType, theme }) => variantType === "primario" ? theme.COLORS.white : theme.COLORS.purple700};
    font-size: ${(props) => props.theme.FONTSIZE.exgg}px;
   
    @media (${breakpoints.mobile}px) {
      font-size: ${(props) => props.theme.FONTSIZE.gg}px;
  }

`;
