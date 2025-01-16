import styled from 'styled-components';

interface ButtonProps {
  color: string;
  textColor: string;
  borderColor: string;
  borderWidth: number;
}

export const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 280px;
  height: 40px;

  @media (max-width: 768px) {
    width: 240px;
    height: 36px;
  }

  @media (max-width: 431px) {
    width: 200px;
    height: 30px;
  }
`;

export const ButtonMStyled = styled.button<ButtonProps>`
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

export const TitleButtonStyled = styled.span`
  font-size: ${props => props.theme.FONTSIZE.m}px;
  font-family: var(--font-family-regular);

  @media (max-width: 768px) {
    font-size: calc(${props => props.theme.FONTSIZE.m}px * 0.9);
  }

  @media (max-width: 431px) {
    font-size: calc(${props => props.theme.FONTSIZE.m}px * 0.7);
  }
`;

