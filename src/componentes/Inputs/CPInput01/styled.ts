import styled from 'styled-components';
import breakpoints from '../../../breakPoints';

type CustomInputProps = {
  variantComponent: string;
}

export const DivContainer = styled.div`
  width: 353px;
  height: 84px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin: 5px;
  

  ::placeholder {
    color: ${props => props.theme.COLORS.purple400}; /* Cor do placeholder */
  }

  @media (${breakpoints.tablet}px){

  }

  @media (${breakpoints.mobile}px) {

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
  padding: 21px;
  gap: 10px;

  ::placeholder {
    color: ${props => props.theme.COLORS.purple400}; /* Cor do placeholder */
  }

  width: ${props => props.variantComponent === 'pequeno' ?
    '353px'
    :
    '540px'
  };

  @media (${breakpoints.tablet}px){

  }

  @media (${breakpoints.mobile}px) {
 
  }
`;

export const IIcon = styled.i`
  font-family: 'Material Symbols Outlined', sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 22px;
  display: inline-block;
  vertical-align: middle;
  color: ${props => props.theme.COLORS.purple700};

  @media (${breakpoints.tablet}px) {
  }

  @media (${breakpoints.mobile}px)  {
  }
`;

export const Input = styled.input<CustomInputProps>`
  background-color: transparent;
  border-color: transparent;
  outline: none; /* Remove o efeito de foco */
  width: 300px;
  height: 56px;
  border-radius: 8px;
  color: ${props => props.theme.COLORS.purple700};

  width: ${props => props.variantComponent === 'pequeno' ?
    '275px'
    :
    '462px'
  };

    @media (${breakpoints.tablet}px) {
  }

  @media (${breakpoints.mobile}px)  {
  }
`;

export const PTitulo = styled.p`
  font-weight: normal;
  font-style: normal;
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  vertical-align: middle;
  color: ${props => props.theme.COLORS.purple700};

  @media (${breakpoints.tablet}px) {
  }

  @media (${breakpoints.mobile}px)  {
    }
`;


