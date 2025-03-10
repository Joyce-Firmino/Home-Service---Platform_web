import styled from 'styled-components';
import breakpoints from '../../breakPoints';

export const DivContainer = styled.div`
    height: 100%;
    background-color: ${props => props.theme.COLORS.purple200};
    display: flex;
    flex-direction: column;
    gap: 45px;
    
`;

export const DivSubcontainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 65px;
    

`;

export const DivTitulo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    

`;

export const H1Titulo = styled.h1`
    color: ${props => props.theme.COLORS.purple700};
    font-size: ${props => props.theme.FONTSIZE.gg}px;
    font-weight: bold;

    @media (${breakpoints.tablet}px) {
    font-size: ${props => props.theme.FONTSIZE.g1}px;
    }

    @media (${breakpoints.mobile}px) {
    font-size: ${props => props.theme.FONTSIZE.g}px;
    }
    
    
`;
export const PDescricao = styled.p`
    color: ${props => props.theme.COLORS.purple700};
    font-size: ${props => props.theme.FONTSIZE.g}px;
    width: 80%;
    text-align: center;

    @media (${breakpoints.tablet}px) {
    font-size: 1.1rem;
    }
    @media (${breakpoints.mobile}px) {
    font-size: 1rem;
    }
`;

export const DivCards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(330px, 0fr)); //joyce deve colocar aqui o width do componente dela que é 330px
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding-bottom: 80px;
    min-height: 80vh;


    @media (max-width: 1500px) {
    grid-template-columns: repeat(3, minmax(330px, 0fr)); //joyce deve colocar aqui o width do componente dela que é 330px
    gap: 30px;
    }
    
    @media (${breakpoints.tablet}px) {
      display: grid;
      grid-template-columns: repeat(2, minmax(300px, 0fr));
    }

    @media (${breakpoints.mobile}px) {
    display: flex;
    flex-direction: column;
  }

`;

export const DivMedia = styled.div`
    
    
  

`;