import styled from 'styled-components';
import breakpoints from '../../breakPoints';

  export const DivContainer = styled.div`
    background-color: ${props => props.theme.COLORS.white};
    display: flex;
    width: 330px;
    max-width: 350px;
    border-radius: 18px;
    padding: 20px;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    gap: 15px;

  
    @media (${breakpoints.tablet}px) {
      width: 290px;
      padding: 15px;
    }
  
    @media (${breakpoints.mobile}px) {
      width: 367px;
      height: 166px;
      padding: 10px;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 22px;

    }
  `;
  
  export const H1Title = styled.h1`
    font-size: 1.5rem;
    font-family: var(--font-family-bold);
    color: ${props => props.theme.COLORS.purple700};
    /* margin-top: 15px; */
  
    @media (${breakpoints.tablet}px) {
      font-size: 1.2rem;
    }
  
    @media (${breakpoints.mobile}px)  {
      font-size: 1rem;
    }
  `;
  
  export const PService = styled.p`
    font-size: 1rem;
    color: ${props => props.theme.COLORS.purple400};
  
    @media (${breakpoints.tablet}px) {
      font-size: 0.9rem;
    }
  
    @media (${breakpoints.mobile}px)  {
      font-size: 0.8rem;
    }
  `;
  
  export const ImgImage = styled.img`
    width: 160px;
    height: 160px;
    border-radius: 50%;
    object-fit: cover;
    
  
    @media (${breakpoints.tablet}px) {
      width: 130px;
      height: 130px;
    }
  
    @media (${breakpoints.mobile}px)  {
      width: 100px;
      height: 100px;
    }
  `;

  export const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;

    @media (${breakpoints.mobile}px)  {
      align-items: flex-start;
    }
  `;

 export const DivGlobal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (${breakpoints.mobile}px)  {
      display: flex;
      flex-direction: column;   
      align-items: flex-start; }
  `;

export const HrLiinha = styled.hr`
    display: none;
    
      @media (${breakpoints.tablet}px) {
   
    }
  
    @media (${breakpoints.mobile}px) {
      display: block;
      width: 100px;
      border-top: 2px solid ${props => props.theme.COLORS.purple700};
    }
    `;
  
  export const DivBloco = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (${breakpoints.mobile}px)  {
      align-items: flex-start;
      gap: 1px;
    }
  `;
  
  export const DivIconText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;
  
    @media (${breakpoints.mobile}px)  {
      gap: 3px;
    }
  `;
  
  export const IIcon = styled.i`
    font-family: 'Material Symbols Outlined', sans-serif;
    font-weight: normal;
    font-style: normal;
    font-size: 20px;
    color: ${props => props.theme.COLORS.purple700};
  `;
  
  export const PText = styled.p`
    color: ${props => props.theme.COLORS.purple700};
    margin: 5px;
    font-size: 0.9rem;
  
    @media (${breakpoints.tablet}px) {
      font-size: 0.8rem;
    }
  
    @media (${breakpoints.mobile}px) {
      font-size: 0.7rem;
    }
  `;
  
/* Regras de mídia agrupadas no final */
// export const MediaStyles = styled.div`
// @media ${breakpoints.tablet} {
//   ${Container} {
//     width: 290px;
//     padding: 15px;
//   }
//   ${Title} {
//     font-size: 1.2rem;
//   }
//   ${Service} {
//     font-size: 0.9rem;
//   }
//   ${Image} {       
//     width: 130px;
//     height: 130px;
//   }
//   ${Text} {       
//     font-size: 0.8rem;
//   }
// }

// @media ${breakpoints.mobile} {
//   ${Container} {
//     width: 260px;
//   padding: 10px;
//   background-color: red;
//   }
//   ${Title} {
//     font-size: 1rem;
//   }
  
//   ${Service} {       
//     font-size: 0.8rem;
//   }
//   ${Image} {       
//     width: 100px;
//     height: 100px;
//   }
//   ${IconText} {       
//     gap: 3px;
//   }
//   ${Text} {       
//     font-size: 0.7rem;
//   }
// }`;