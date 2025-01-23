import styled from 'styled-components';

export const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.COLORS.purple200};
  width: 100%;
  height: 100vh;
  gap: 20px;
  padding: 0 85px 0 0;

  @media (max-width: 500px) {
    width: 430px;
  }
`;

export const DivImagem = styled.div`
  width: 50%;
  height: 100%;
  
@media (max-width: 820px) {
    display: none;
  }
`;

export const DivLateral = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  width: 536px;
`;
export const DivTitulo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  width: 536px;
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