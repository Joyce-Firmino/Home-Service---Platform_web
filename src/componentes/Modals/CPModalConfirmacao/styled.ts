import styled from 'styled-components';
import breakpoints from '../../../breakPoints';

type CustomModalProps = {
  variantComponent: string;
}

export const DivSombra = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Transparência */
    z-index: 1000; /* Camada abaixo do menu */  

  @media (${breakpoints.tablet}px) {
    margin-top: 2vh;
  }

  @media (${breakpoints.mobile}px)  {
    margin-top: 2vh;
    height: 9%;
  }
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: fixed;

  background-color: ${props => props.theme.COLORS.white};
  width: 450px;
  max-width: 504px;
  height: auto;
  border-radius: 20px;
  padding: 16px;
  box-shadow: 0px 0px 0.7em 0px rgba(0, 0, 0, 0.19);
  top: 25%;
  left: 33%;
  z-index: 1001;


  @media (${breakpoints.tablet}px){
    padding: 1rem;
    max-width: 380px;
  }

  @media (${breakpoints.mobile}px) {
    padding: 0.8rem;
    width: 250px;
  }
`;

export const DivSubcontainer = styled.div`
  margin-top: 3vh;
  background-color: ${props => props.theme.COLORS.white};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  border-radius: 20px;

  @media (${breakpoints.tablet}px) {
    margin-top: 2vh;
  }

  @media (${breakpoints.mobile}px)  {
    margin-top: 2vh;
    height: 9%;
  }
`;

export const IIcon = styled.i<CustomModalProps>`
  font-family: 'Material Symbols Outlined', sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 6vw;
  display: inline-block;
  vertical-align: middle;
  
  color: ${props => props.variantComponent === 'sucesso' ?
    props.theme.COLORS.green100
    :
    props.theme.COLORS.red100};
  

  @media (${breakpoints.tablet}px) {
    font-size: 8vw;
  }

  @media (${breakpoints.mobile}px)  {
    font-size: 10vw;
  }
`;

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  max-width: 100%;
`;

export const PTitulo = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.COLORS.purple700};

  @media (${breakpoints.tablet}px) {
    font-size: 1.2rem;
  }

  @media (${breakpoints.mobile}px)  {
    font-size: 1rem;
  }
`;

export const PMsg = styled.p`
  color: ${props => props.theme.COLORS.purple700};
  font-size: 1.2rem;
  max-width: 400px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  text-align: center;

  @media (${breakpoints.tablet}px) {
    font-size: 1rem;
  }

  @media (${breakpoints.mobile}px)  {
    font-size: 0.9rem;
    max-width: 100%;
  }
`;

export const DivButtonContainer = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;

  @media (${breakpoints.tablet}px) {
    margin-top: 3%;
    margin-bottom: 3%;
  }

  @media (${breakpoints.mobile}px)  {
    margin-top: 3%;
    margin-bottom: 3%;
  }
`;
