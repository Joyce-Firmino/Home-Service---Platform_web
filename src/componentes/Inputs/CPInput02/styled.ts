import styled from 'styled-components';
import breakpoints from '../../../breakPoints';

type CustomInputProps = {
  variantComponent: string;
}


export const DivContainer = styled.div`
  height: 84px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin: 5px;


  ::placeholder {
    color: ${props => props.theme.COLORS.purple400}; /* Cor do placeholder */

  };


  @media (${breakpoints.tablet}px){
    
  }

  @media (${breakpoints.mobile}px) {
    width: 345px;
  }
`;


export const DivSubContainer = styled.div<CustomInputProps>`
  background-color: ${props => props.theme.COLORS.white};
  height: 56px;
  border-radius: 8px;
  border: 2px solid ${props => props.theme.COLORS.purple400};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 0px  0 21px  ;

  ::placeholder {
    color: ${props => props.theme.COLORS.purple400}; /* Cor do placeholder */
    font-size: ${props => props.theme.FONTSIZE.pp}px;

  };
  width: ${props => props.variantComponent === 'pequeno' ?
    '345px'
    :
    '530px'};

  @media (${breakpoints.tablet}px){
  }

  @media (${breakpoints.mobile}px) {
    width: 345px;
  }
`;

export const IIcon = styled.i`
  font-family: 'Material Symbols Outlined', sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 22px;
  display: inline-block;
  vertical-align: middle;
  padding: 13px 0px;
  color: ${props => props.theme.COLORS.purple700};
  cursor: pointer;



  @media (${breakpoints.tablet}px) {
  }

  @media (${breakpoints.mobile}px)  {
    font-size: 4vw;
  }
`;

export const Input = styled.input<CustomInputProps>`
  background-color: transparent;
  border-color: transparent;
  outline: none; /* Remove o efeito de foco */
  height: 56px;
  border-radius: 8px;
  color: ${props => props.theme.COLORS.purple700};

  width: ${props => props.variantComponent === 'pequeno' ?
    '275px'
    :
    '443px'};

    @media (${breakpoints.tablet}px) {

  }

  @media (${breakpoints.mobile}px)  {
    width: 275px;
    font-size: 10px;
  }
`;

export const PTitulo = styled.p`
  font-size: ${props => props.theme.FONTSIZE.pp}px;
  font-weight: bold;
  display: inline-block;
  vertical-align: middle;
  color: ${props => props.theme.COLORS.purple700};

  @media (${breakpoints.tablet}px) {
  }

  @media (${breakpoints.mobile}px)  {
  }
`;

export const ButtonEye = styled.button`
    align-items: center;
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
`;


