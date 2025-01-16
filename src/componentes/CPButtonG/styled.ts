import styled from 'styled-components';

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
  width: 300px;
  height: 60px;

  @media (max-width: 768px) {
    width: 250px;
    height: 50px;
  }

  @media (max-width: 431px) {
    width: 200px;
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

  @media (max-width: 768px) {
    border-radius: 20px;
  }

  @media (max-width: 431px) {
    border-radius: 15px;
  }
`;

export const SpanTitleButton = styled.span`
  font-size: ${props => props.theme.FONTSIZE.m}px;
  font-family: var(--font-family-regular);

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 431px) {
    font-size: 0.8rem;
  }
`;

/* Regras de mídia agrupadas no final */
// export const MediaStyles = styled.div`
//   @media ${breakpoints.tablet} {
//     ${ContainerStyled} {
//       width: 250px;
//       height: 50px;
//     }
//     ${ButtonGStyled} {
//       border-radius: 20px;
//     }
//     ${TitleButtonStyled} {
//       font-size: 0.9rem;
//     }
//   }

//   @media ${breakpoints.mobile} {
//     ${ContainerStyled} {
//       width: 200px;
//       height: 35px;
//     }
//     ${ButtonGStyled} {
//       border-radius: 15px;
//     }
//     ${TitleButtonStyled} {       
//       font-size: 0.8rem;
//     }
//   }
// `;