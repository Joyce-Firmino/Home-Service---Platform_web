import { styled } from "styled-components";
import breakpoints from "../../breakPoints";


export const DivContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${props => props.theme.COLORS.purple200};
    width: 100%;
    height: 100vh;
    gap: 100px;
    padding: 0 65px 0 0;

    @media (${breakpoints.tablet}px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0px;
    gap: 0;
  }

    @media (${breakpoints.mobile}px) {
    padding: 0;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 0;
    padding: 65px 0;

  }
`;

export const DivSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  gap: 40px;

  @media (${breakpoints.tablet}px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 50px 32px;
  }
  
  @media (${breakpoints.mobile}px) {
    display: flex;
      flex-direction: column;
      padding: 0 32px;
      width: 100%;
      height: 100%; 
      gap: 32px;     
  }
`;
export const H1Titulo = styled.h1`
    color: ${props => props.theme.COLORS.purple700};
    font-size: ${props => props.theme.FONTSIZE.g1}px;
    font-weight: bold;


    @media (${breakpoints.tablet}px) {
      width: 100%;
      margin: 20px;
  }

    @media (${breakpoints.mobile}px) {
      width: 100%;
      margin: 5px;
  }
`;

export const DivInfo = styled.div`
      display: flex;
      flex-direction: column;
      gap: 32px;

      @media (${breakpoints.mobile}px) {
      width: 100%;      
    }
`;

export const DivDPessoais = styled.div`
    display: flex;
    flex-direction: column;
    gap: 23px;

    @media (${breakpoints.mobile}px) {
      width: 100%;
  }
       
`;
export const DivDProfissionais = styled.div`
    display: flex;
    flex-direction: column;
    gap: 23px;

    @media (${breakpoints.mobile}px) {
      width: 100%;
  }
`;

export const PDescricao = styled.p`
      color: ${props => props.theme.COLORS.purple400};
      font-size: ${props => props.theme.FONTSIZE.m}px;

      @media (${breakpoints.tablet}px) {
      width: 100%;
      margin: 0 20px;
  }
      
      @media (${breakpoints.mobile}px) {
      width: 100%;
      margin: 5px;
  }
`;

export const DivInputs1 = styled.div`
      display : flex ;
      flex-direction: row;
      gap: 12px;

    @media (${breakpoints.tablet}px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }

    @media (${breakpoints.mobile}px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
export const DivButton = styled.div`
      display : flex ;
      align-items: center;
      justify-content: center;
      padding-top: 10px;

      @media (${breakpoints.mobile}px) {
      padding-top: 0px;
  }
`;