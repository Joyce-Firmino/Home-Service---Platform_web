import styled from 'styled-components';
import breakpoints from '../../../breakPoints';


type CustomInputProps = {
  variantComponent: string;
}


export const DivContainer = styled.div<CustomInputProps>`
  height: 84px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin: 5px;

  ::placeholder {
    color: ${props => props.theme.COLORS.purple400}; /* Cor do placeholder */
    font-size: ${props => props.theme.FONTSIZE.pp}px;
  }

  width: ${props => props.variantComponent === 'pequeno' ?
    '345px'
    :
    '530px'
  };

  @media (${breakpoints.tablet}px){
    padding: 1rem;
    max-width: 380px;
  }

  @media (${breakpoints.mobile}px) {
    padding: 0.8rem;
    width: 250px;
  }
`;

export const Input = styled.input<CustomInputProps>`
  outline: none; /* Remove o efeito de foco */
  width: 353px;
  height: 56px;
  border-radius: 8px;
  border: 2px solid ${props => props.theme.COLORS.purple400};
  color: ${props => props.theme.COLORS.purple700};
  padding: 20px;

  width: ${props => props.variantComponent === 'pequeno' ?
    '345px'
    :
    '530px'
  };

    @media (${breakpoints.tablet}px) {
    font-size: 8vw;
  }

  @media (${breakpoints.mobile}px)  {
    font-size: 10vw;
  }
`;

export const PTitulo = styled.p`
  font-weight: normal;
  font-style: normal;
  font-size: ${props => props.theme.FONTSIZE.pp}px;
  font-weight: bold;
  display: inline-block;
  vertical-align: middle;
  color: ${props => props.theme.COLORS.purple700};

  @media (${breakpoints.tablet}px) {
    font-size: 8vw;
  }

  @media (${breakpoints.mobile}px)  {
    font-size: 10vw;
  }
`;


