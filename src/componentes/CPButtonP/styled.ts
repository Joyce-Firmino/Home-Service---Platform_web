import styled from 'styled-components';
import breakpoints from '../../breakPoints';

interface ButtonProps {
  color: string;
  textColor: string;
  borderColor: string;
  borderWidth: number;
}

export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 155px;
  height: 55px;

  @media (${breakpoints.tablet}px) {
    width: 135px;
    height: 48px;
  }

  @media (${breakpoints.mobile}px){
    width: 120px;
    height: 35px;
  }
`;

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background-color: ${({ color }) => color};
  color: ${({ textColor }) => textColor};
  border: solid ${({ borderColor }) => borderColor} ${({ borderWidth }) => `${borderWidth}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (${breakpoints.tablet}px) {
    border-radius: 20px;
  }

  @media (${breakpoints.mobile}px)  {
    border-radius: 15px;
    width: 50%;
  }
`;

export const SpanTitleButton = styled.span`
  font-size: ${props => props.theme.FONTSIZE.m}px;
  font-family: var(--font-family-regular);

  @media (${breakpoints.tablet}px) {
    font-size: calc(${props => props.theme.FONTSIZE.m}px * 0.9);
  }

  @media (${breakpoints.mobile}px)  {
    font-size: calc(${props => props.theme.FONTSIZE.m}px * 0.6);
  }
`;


/* Regras de mídia agrupadas no final */
// export const MediaStyles = styled.div`
//   @media ${breakpoints.tablet} {
//     ${ContainerStyled} {
//       width: 135px;
//       height: 48px;
//     }
//     ${ButtonPStyled} {
//       border-radius: 20px;
//     }
//     ${TitleButtonStyled} {
//       font-size: calc(var(--font-size-m) * 0.9);
//     }
//   }

//   @media ${breakpoints.mobile} {
//     ${ContainerStyled} {
//       width: 120px;
//       height: 35px;
//     }
//     ${ButtonPStyled} {
//       border-radius: 15px;
//       width: 50%;
//     }
    
//     ${TitleButtonStyled} {       
//       font-size: calc(var(--font-size-m) * 0.6);
//     }
//   }`;

