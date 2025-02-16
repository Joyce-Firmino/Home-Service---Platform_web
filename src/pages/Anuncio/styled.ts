import styled from "styled-components";
import breakpoints from "../../breakPoints";

export const DivContainer = styled.div`
  background-color: ${(props) => props.theme.COLORS.purple200};
`;

export const DivMediana = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
  align-items: center;
  padding: 40px 0;

  @media (${breakpoints.tablet}px) {
    gap: 10px;
  }

  @media (${breakpoints.mobile}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const H1Titulo = styled.h1`
  font-size: ${(props) => props.theme.FONTSIZE.gg}px;
  color: ${(props) => props.theme.COLORS.purple700};

  @media (${breakpoints.tablet}px) {
    font-size: ${(props) => props.theme.FONTSIZE.g}px;
  }

  @media (${breakpoints.mobile}px) {
    width: 300px;
  }
`;

export const PDescricao = styled.p`
  font-size: ${(props) => props.theme.FONTSIZE.g}px;
  color: ${(props) => props.theme.COLORS.purple700};
  width: 629px;

  @media (${breakpoints.tablet}px) {
    text-align: center;
    font-size: 22px;
  }

  @media (${breakpoints.mobile}px) {
    width: 354px;
  }
`;

export const DivGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    3,
    minmax(400px, 1fr)
  ); //joyce deve colocar aqui o width do componente dela que é 330px
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media (${breakpoints.tablet}px) {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }

  @media (${breakpoints.mobile}px) {
    grid-template-columns: repeat(1, minmax(250px, 1fr));
  }
`;

export const DivDireita = styled.div`
  margin-right: 40px;
  align-self: end;

  @media (${breakpoints.mobile}px) {
    align-self: center;
    margin-right: 0px;
  }
`;

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #1c1b1f80;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
