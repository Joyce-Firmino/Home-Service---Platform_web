import { styled } from "styled-components";
import breakpoints from "../../breakPoints";


export const DivContainer = styled.div` 
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.COLORS.purple200};
    height: 100%;
    flex-direction: row;

    @media (${breakpoints.tablet}px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

    @media (${breakpoints.mobile}px) {
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 0;
    padding: 65px 0;

  }
`;

export const DivImagem = styled.div`
`;

export const DivGlobal = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 0;
    width: 57%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const DivSubGlobal = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;


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
    padding: 0 12px 15px 0px;
   


    @media (${breakpoints.tablet}px) {
      width: 100%;
      padding: 0 12px 15px 12px;
  }

    @media (${breakpoints.mobile}px) {
      width: 100%;
      
  }
`;

export const LabelError = styled.label`
  font-size: 14px;
  color: red;
  margin-top: 5px;
`;

export const DivInfo = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 25px;
      

      @media (${breakpoints.mobile}px) {
      width: 100%;      
    }
`;

export const DivDPessoais = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;

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
    gap: 12px;
    width: 100%;

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
      gap: 18px;

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
      padding-top: 30px;
      justify-content: center;

      @media (${breakpoints.mobile}px) {
      padding-top: 30px;
  }
`;

export const DivInput = styled.div`
      display: flex;
      flex-direction: column;
`;