
  // color: ${props => props.theme.COLORS.purple700};
  import styled from 'styled-components';
  import breakpoints from '../../../breakPoints';


  export const DivContainer = styled.div`
    background-color: ${props => props.theme.COLORS.white};
    width: 394px;
    height: 381px;
    border-radius: 18px;
    padding:  0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

  
    @media (${breakpoints.tablet}px) {
      width: 290px;
      padding: 15px;
    }
  
    @media (${breakpoints.mobile}px) {
      width: 367px;
      height: 166px;
      padding: 0;
      flex-direction: row;
      gap: 22px;
    }
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
  
  `

  
  export const DivImagem = styled.div`
    background-color: ${props => props.theme.COLORS.purple700};
    width: 100%;
    padding: 39px 145px;
    border-radius: 18px 18px 0  0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (${breakpoints.tablet}px) {

    }
  
    @media (${breakpoints.mobile}px) {
      height: 100%;
      width: 163px;
      border-radius: 18px 0 0 18px;
      align-items: center;
      justify-content: center;
      padding: 0;
      }

  `;

  export const DivInferior = styled.div`
    display: flex;
    flex-direction: column;
    width: 294px;
    height: 169px;
    align-items: flex-start;
    justify-content: center;

    
    
    @media (${breakpoints.tablet}px) {
      
    }
    @media (${breakpoints.mobile}px) {
      width: 196px;
      height: 135px;
      gap: 10px;
      align-items: flex-start;
      justify-content: space-between;


   }


  `

export const DivTextos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
`

  export const H1Title = styled.h1`
    font-size: 1.5rem;
    font-family: var(--font-family-bold);
    color: ${props => props.theme.COLORS.purple700};
    margin-top: 15px;
  
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  
    @media (max-width: 431px) {
      font-size: 1rem;
      margin-top: 0px;
    }
  `;
  
  export const PService = styled.p`
    font-size: 1rem;
    color: ${props => props.theme.COLORS.purple400};
  
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  
    @media (max-width: 431px) {
      font-size: 0.8rem;
    }
  `;
  
  export const ImgImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
  
    @media (max-width: 768px) {
      width: 130px;
      height: 130px;
    }
  
    @media (max-width: 431px) {
      width: 80px;
      height: 80px;
    }
  `;
  
  export const DivBloco = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 22px;

    @media (max-width: 431px) {
      margin-top: 0;

    }
  `;
  
  export const DivIconText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;
  
    @media (max-width: 431px) {
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
  
    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  
    @media (max-width: 431px) {
      font-size: 0.7rem;
    }
  `;