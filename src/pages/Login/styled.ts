import styled from 'styled-components';
import breakpoints from '../../breakPoints';

export const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.COLORS.purple200};
  width: 100%;
  height: 100vh;
  gap: 100px;
  padding: 0 85px 0 0;

  @media (${breakpoints.tablet}px) {
    padding: 0;
    flex-direction: column;
    gap: 100px;
    padding: 0;
  }
  @media (${breakpoints.mobile}px) {
    padding: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 0;

  }
      
`;

export const DivImagem = styled.div`
  width: 50%;
  height: 100%;
  
@media (${breakpoints.tablet}px) {
  width: 100%;
  height: 61%;
  padding: 0;
  }
`;

export const DivLateral = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  width: 536px;
  
  @media (${breakpoints.tablet}px) {
    padding: 10px 0 250px 0;
  }

  @media (${breakpoints.mobile}px)  {
   padding: 0;
   justify-content: center;
   align-items: center;

}
`;
export const DivTitulo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  width: 536px;

  @media (${breakpoints.mobile}px) {
    width: 250px;
  }
  @media (${breakpoints.mobile}px)  {
   width: 345px;
  }
`;

export const DivInferior = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;
  `;
  export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 13px;

    @media (${breakpoints.mobile}px)  {
      justify-content: center;
   
  }
  `;

export const H1Titulo = styled.h1`
  font-size: ${props => props.theme.FONTSIZE.exg}px;
  color: ${props => props.theme.COLORS.purple700};
`;

export const PDescricao = styled.p`
  font-size: ${props => props.theme.FONTSIZE.m}px;
  color: ${props => props.theme.COLORS.purple700};
`;

export const DivPrestador = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;



