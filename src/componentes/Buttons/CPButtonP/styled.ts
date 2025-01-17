import styled from 'styled-components';
import breakpoints from '../../../breakPoints';

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
    width: 80px;
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
    width: 70px;
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
