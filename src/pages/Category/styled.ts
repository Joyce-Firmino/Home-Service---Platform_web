import styled from 'styled-components';
import breakpoints from '../../breakPoints';

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.COLORS.purple200};
  width: 100%;
  height: 100%;
`;

export const DivMediana = styled.div`
  display: flex;
  flex-direction: row;
  gap: 45px;
  justify-content: center;
  padding: 40px 0;
  
  @media (${breakpoints.tablet}px) {
  gap: 10px;

  }

  @media (${breakpoints.mobile}px)  {
  flex-direction: column;
  align-items: center;
  } 
`;

export const DivDescricao = styled.div`
  display: flex;
  flex-direction: column;
  width: 659px;
  gap: 50px;

  
  @media (${breakpoints.tablet}px) {
  width: 400px;

  }

  @media (${breakpoints.mobile}px)  {
   align-items: center;
  width: 354px;

  } 
`;

export const DivTextos = styled.div`
  display: flex;
  flex-direction: column;
  width: 659px;
  gap: 10px;
  align-items: center;
  padding: 35px 0;

  @media (${breakpoints.tablet}px) {

  }

  @media (${breakpoints.mobile}px)  {
  text-align: center;
  width: 354px;
  justify-content: center;
  align-items: center;
  } 
`;


export const H1Titulo = styled.h1`
  font-size: ${props => props.theme.FONTSIZE.gg}px;
  color: ${props => props.theme.COLORS.purple700};
  
  @media (${breakpoints.tablet}px) {
  font-size: ${props => props.theme.FONTSIZE.g}px;


  }

  @media (${breakpoints.mobile}px)  {
   width: 300px;
  } 
`;

export const PDescricao = styled.p`
  font-size: ${props => props.theme.FONTSIZE.g}px;
  color: ${props => props.theme.COLORS.purple700};
  width: 629px;
  
  @media (${breakpoints.tablet}px) {
    text-align: center;
  font-size: 22px;


  }

  @media (${breakpoints.mobile}px)  {
    width: 354px;
  } 
`;


export const DivGridContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(3, minmax(400px, 1fr));; //joyce deve colocar aqui o width do componente dela que é 330px
   gap: 20px;
   justify-content: center;
   align-items: center;
   padding-bottom: 80px;
  
  @media (${breakpoints.tablet}px) {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }

  @media (${breakpoints.mobile}px)  {
    grid-template-columns: repeat(1, minmax(250px, 1fr));

  } 
`;

export const ImgCelulares = styled.img`

    width: 407px;
  
  @media (${breakpoints.tablet}px) {
    width: 307px;
  }

  @media (${breakpoints.mobile}px)  {
    width: 207px;
  } 
`;

export const DivBaixar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 18px;

  @media (${breakpoints.tablet}px) {
  }

  @media (${breakpoints.mobile}px)  {
    width: 180px;

  } 
`;

export const H2Titulo = styled.h2`
  font-size: ${props => props.theme.FONTSIZE.g1}px;
  color: ${props => props.theme.COLORS.purple700};
  width: 400px;
  text-align: right;
  
  @media (${breakpoints.tablet}px) {
  }

  @media (${breakpoints.mobile}px)  {
  width: 180px;
  font-size: ${props => props.theme.FONTSIZE.g}px;


  } 
`;

export const DivLojas = styled.div`
  display:flex;
  gap: 18px;
  @media (${breakpoints.tablet}px) {
  }

  @media (${breakpoints.mobile}px)  {
  gap: 15px;

  } 
`;

export const ImgPlayStore = styled.img`
  height: 40px;
  
  @media (${breakpoints.tablet}px) {
  }

  @media (${breakpoints.mobile}px)  {
    height: 25px;

  } 
`;

export const ImgAppStore = styled.img`
  height: 40px;
  
  @media (${breakpoints.tablet}px) {
  }

  @media (${breakpoints.mobile}px)  {
    height: 25px;

  } 
`;