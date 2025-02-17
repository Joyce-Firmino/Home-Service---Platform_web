import { styled } from "styled-components";
import breakpoints from "../../breakPoints";


export const DivContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${props => props.theme.COLORS.purple200};
    width: 100%;
    height: 100vh;

    @media (${breakpoints.tablet}px) {
    display: flex;
    flex-direction: column;
    width: 100%;
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

export const DivGlobal = styled.div`
    width: 100%;
    height: 100%;
`;

export const DivSubGlobal = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 100px;
    justify-content: center;

    @media (${breakpoints.tablet}px){
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 34px;
      justify-content: center;
    }

    @media (${breakpoints.mobile}px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      padding: 0 34px;
    }
`;
export const H1Titulo = styled.h1`
    color: ${props => props.theme.COLORS.purple700};
    font-size: ${props => props.theme.FONTSIZE.g1}px;
    font-weight: bold;
    width: 100%;
    padding: 0 12px 15px 12px;
   


    @media (${breakpoints.tablet}px) {
      width: 100%;
      padding: 0 12px 15px 12px;
  }

    @media (${breakpoints.mobile}px) {
      width: 100%;
      
  }
`;

export const DivInfo = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 32px;
      

      @media (${breakpoints.mobile}px) {
      width: 100%;      
    }
`;

export const DivDPessoais = styled.div`
    display: flex;
    flex-direction: column;
    gap: 23px;
    width: 100%;
    padding: 0 12px;

    @media (${breakpoints.tablet}px) {
      width: 100%;
      padding: 0 12px;
    }

    @media (${breakpoints.mobile}px) {
      width: 100%;
  }
       
`;
export const DivDProfissionais = styled.div`
    display: flex;
    flex-direction: column;
    gap: 23px;
    width: 100%;
    padding: 0 12px;

    @media (${breakpoints.mobile}px) {
      width: 100%;
  }
`;

export const PDescricao = styled.p`
      color: ${props => props.theme.COLORS.purple400};
      font-size: ${props => props.theme.FONTSIZE.m}px;

      @media (${breakpoints.tablet}px) {
      width: 100%;
  }
      
      @media (${breakpoints.mobile}px) {
      width: 100%;
  }
`;

export const DivInputs1 = styled.div`
      display : flex ;
      flex-direction: row;
      gap: 12px;

    @media (${breakpoints.tablet}px) {
    
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
      padding-top: 40px;
      justify-content: center;

      @media (${breakpoints.mobile}px) {
      padding-top: 30px;
  }
`;