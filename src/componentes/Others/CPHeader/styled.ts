import styled from 'styled-components'

export const DivContainer = styled.div`
    height: 220px;
    width: 100%;
    background-color: ${props => props.theme.COLORS.purple700};
    

`;

export const DivBloco = styled.div`
    display: flex;
    height: 220px;
    align-items: center;
    justify-content: center;
    gap: 1500px;

`;

export const DivLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;

`;

export const ImgLogo = styled.img`
    width: 160px;
    height: 160px;

`;
export const H1Title = styled.h1`
    color: ${props => props.theme.COLORS.white};
    font-size: ${props => props.theme.FONTSIZE.exg}px;

`;
export const DivCategorias = styled.div`
    display: flex;
    gap: 50px;

`;

export const PCategoria = styled.p`
    font-size: ${props => props.theme.FONTSIZE.ex}px;
    color: ${props => props.theme.COLORS.white};
    font-weight: bold;
    font-weight: normal;
    font-style: normal;
`;

export const PCadastro = styled.p`


`;

export const PLogin = styled.p`


`;