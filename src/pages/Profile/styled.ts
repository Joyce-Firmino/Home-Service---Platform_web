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
    

    @media (${breakpoints.tablet}px) {
      width: 100%;
      height: 700px;
      
    }

    @media (${breakpoints.mobile}px) {
        width: 100%;
        height: 643px;
    }
`;



export const DivFoto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    
`;

export const PAlterarFt = styled.p`
    
`;

export const DivInfo = styled.div`

    
`;