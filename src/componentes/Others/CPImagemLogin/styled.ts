import styled from 'styled-components'
import foto from "../../../assets/imagemLateralLogin.png"


export const DivImagem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${foto});
  background-size: cover;
  background-position: center;
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
`;