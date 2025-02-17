import { styled } from "styled-components";
import breakpoints from "../../breakPoints";


export const DivContainer = styled.div`
    background-color: ${props => props.theme.COLORS.purple200};
    width: 100%;
    height: 100%;
    
    @media (${breakpoints.tablet}px) {
      height: 100%;
    }

    @media (${breakpoints.mobile}px) {
        height: 100%;
  }
`;

export const DivSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 140px 0;

    @media (${breakpoints.tablet}px) {
      padding: 80px 30px;
    
    }

    @media (${breakpoints.mobile}px) {
      
    }
`;

export const DivBloco = styled.div`
    display: flex;
    flex-direction: row;
    width: 1181px;
    height: 643px;
    background-color: ${props => props.theme.COLORS.white};
    border-radius: 14px;
    gap: 66px;
    

    @media (${breakpoints.tablet}px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 33px 0;
      
    }

    @media (${breakpoints.mobile}px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 33px 0;
    }
`;


export const DivFoto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 117px 0 117px 70px;

    @media (${breakpoints.tablet}px) {
        padding: 12px 0 0 0;
    }

    @media (${breakpoints.mobile}px) {
        padding: 12px 0 0 0;
    }
    
`;

export const PAlterarFt = styled.p`
    
`;

export const DivInfo = styled.div`
    /* width: 62%; */
    padding: 117px 0 117px 0;
    display: flex;
    flex-direction: column;
    gap:52px;

    @media (${breakpoints.tablet}px) {
        padding: 0;
    }

    @media (${breakpoints.mobile}px) {
        padding: 0;
    }
    
`;

export const DivCabecalho = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 485px;

    @media (${breakpoints.tablet}px) {
        display: flex;
        flex-direction: row;
        padding: 0 40px;
        gap: 415px; 
    }

    @media (${breakpoints.mobile}px) {
        display: flex;
        flex-direction: row;
        padding: 0 20px;
        gap: 125px; 
    }
`;

export const H1Tittle = styled.h1`
    color: ${props => props.theme.COLORS.purple700};
    font-size: ${props => props.theme.FONTSIZE.g3}px;
    font-weight: bold;

    @media (${breakpoints.mobile}px) {
        font-size: ${props => props.theme.FONTSIZE.m2}px; 
    }
   
`;

export const DivMetodos = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
`;

export const PClick = styled.p`
    color: ${props => props.theme.COLORS.purple400};
    font-size: ${props => props.theme.FONTSIZE.m}px;

    @media (${breakpoints.mobile}px) {
        font-size: ${props => props.theme.FONTSIZE.p}px;
    }
`;

export const DivMedia = styled.div`
    display: flex;
    flex-direction: column;
    gap: 34px;
    
`;
export const DivSeparacao = styled.div`
    display: flex;
    flex-direction: column;
    gap:7px;

    @media (${breakpoints.tablet}px) {
        display: flex;
        flex-direction: column;
        padding: 0 40px;
    }

    @media (${breakpoints.mobile}px) {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
    }
    
`;

export const DivCXAreia = styled.div`
    display: flex;
    flex-direction: row;
    height: 110px;
    gap: 100px;
    border: 2px solid;
    border-radius: 7px;
    border-color: ${props => props.theme.COLORS.purple200};
    justify-content: flex-start;
    align-items: center;
    padding: 0 37px;

    @media (${breakpoints.mobile}px) {
        display: flex;
        flex-direction: column;
        height: 100%;
        gap:20px;
        align-items: flex-start;
        padding: 33px 20px;
    }
`;

export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    gap:12px;
    
`;

export const PDescricao = styled.p`
    color: ${props => props.theme.COLORS.purple700};
    font-size: ${props => props.theme.FONTSIZE.m}px;
    font-weight: bold;
`;

export const PResposta = styled.p`
    color: ${props => props.theme.COLORS.purple400};
    font-size: ${props => props.theme.FONTSIZE.m}px;
    /* white-space: nowrap; // Impede a quebra de linha 
    overflow: hidden; // Oculta o texto que ultrapassar a largura 
    text-overflow: ellipsis; // Adiciona os "..." no final 
    max-width: 153px; // Defina um tamanho máximo para o elemento  */

`;