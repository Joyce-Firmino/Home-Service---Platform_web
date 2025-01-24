import styled from 'styled-components'
import foto from "../../../assets/imagemLateralLogin.png"
import breakpoints from '../../../breakPoints';


export const DivImagem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${foto});
  background-size: cover;
  background-position: center;  

  @media (${breakpoints.tablet}px) {
    height: 70% ;
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
  left: 52%;
  transform: translate(-50%, -50%);
  width: 450px;

  @media (${breakpoints.tablet}px) {
    font-size: 65px;
    width: 420px;
  }
`;