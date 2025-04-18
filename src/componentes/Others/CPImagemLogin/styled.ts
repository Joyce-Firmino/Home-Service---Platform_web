import styled from 'styled-components'
import foto from "../../../assets/imagemLateralLogin.webp"
import breakpoints from '../../../breakPoints';


export const DivImagem = styled.div`
  position: fixed;
  width: 42%;
  height: 100%;
  background-image: url(${foto});
  background-color: ${props => props.theme.COLORS.purple700};;
  background-size: cover;
  background-position: center;  

  @media (${breakpoints.tablet}px) {
  width: 100%; /* Ocupar toda a largura */
  height: 40%; /* Definir 40% da altura */
  position: absolute; /* Ajustar a posição corretamente */
  top: 0; /* Garantir que fique no topo */
  left: 0;
}
  
  @media (${breakpoints.mobile}px) {
    display: none;
  }
`;

export const PBemvindo = styled.p`
  position: absolute;
  font-size: 75px;
  font-weight: bold;
  color: ${props => props.theme.COLORS.white};
  top: 50%;
  left: 58%;
  transform: translate(-50%, -50%);
  width: 450px;

  @media (${breakpoints.tablet}px) {
    font-size: 65px;
    width: 420px;
    left: 50%;
  }
`;