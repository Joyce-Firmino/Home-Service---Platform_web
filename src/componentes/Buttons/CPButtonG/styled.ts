import styled from 'styled-components';
import breakpoints from '../../../breakPoints';

interface ButtonProps {
  variantType: string;
}

export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 280px;
  height: 55px;

  @media (${breakpoints.tablet}px) {
    width: 250px;
    height: 50px;
  }

  @media (${breakpoints.mobile}px)  {
    width: 200px;
    height: 35px;
  }
`;

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  
  background-color: ${({ variantType, theme }) =>
    variantType === "primario" ? theme.COLORS.purple700 : variantType === "secundario" ? theme.COLORS.white : "#ffffff"};

  color: ${({ variantType, theme }) =>
    variantType === "primario" ?  theme.COLORS.white : variantType === "secundario" ? theme.COLORS.purple700: "#00000"};
  
  border: solid ${({ variantType, theme }) => variantType === "primario" ?  "transparent": variantType === "secundario" ? theme.COLORS.purple700: "#00000"} 3px;


  @media (${breakpoints.tablet}px) {
    border-radius: 20px;
  }

  @media (${breakpoints.mobile}px) {
    border-radius: 15px;
  }
`;

export const SpanTitleButton = styled.span`
  font-size: ${props => props.theme.FONTSIZE.m}px;
  font-family: var(--font-family-regular);

  @media (${breakpoints.tablet}px) {
    font-size: 0.9rem;
  }

  @media (${breakpoints.mobile}px) {
    font-size: 0.8rem;
  }
`;