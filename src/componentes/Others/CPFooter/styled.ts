import styled from 'styled-components'
import breakpoints from '../../../breakPoints';

export const DivContainer = styled.div`
    height: 220px;
    width: 100%;
    background-color: ${props => props.theme.COLORS.purple700};
    gap:19px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 25px;

    @media (${breakpoints.mobile}px) {
    height: 430px;
    padding-top: 0;
    gap:40px;

      
}
`;

export const DivBloco = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;

@media (${breakpoints.mobile}px) {
  gap: 40px;
}

`;

export const HrLiinha = styled.hr`
  width: 90%;
`;

export const DivCategorias = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
    width: 583px;
    @media (${breakpoints.mobile}px) {

    flex-direction: column;
    width: 215px;
    align-items: center;
    gap: 24px;


}

`;

export const PCategoria = styled.p`
    font-size: ${props => props.theme.FONTSIZE.m}px;
    color: ${props => props.theme.COLORS.white};
    font-weight: bold;
    font-style: normal;
`;

export const DivRodape = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  
  @media (${breakpoints.tablet}px) {
    
  }
  
  @media (${breakpoints.mobile}px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}`;


export const PCopy = styled.p`
    font-size: ${props => props.theme.FONTSIZE.m}px;
    color: ${props => props.theme.COLORS.white};
    font-weight: bold;
    font-weight: normal;
    font-style: normal;
    text-align: center;
`;

export const DivLogo = styled.div`
    display: flex;
    position: absolute;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    left: 90%;
    @media (${breakpoints.tablet}px) {
      left: 87%;

}

@media (${breakpoints.mobile}px) {
      position: relative;
      left: auto;
}

`;



export const ImgLogo = styled.img`
    width: 22px;
    height: 22px;

`;