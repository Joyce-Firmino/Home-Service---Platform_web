
  // color: ${props => props.theme.COLORS.purple700};
  import styled from 'styled-components';

  export const Container = styled.div`
    background-color: ${props => props.theme.COLORS.white};
    width: 330px;
    max-width: 350px;
    border-radius: 20px;
    padding: 20px;
    box-sizing: border-box;
  
    @media (max-width: 768px) {
      width: 290px;
      padding: 15px;
    }
  
    @media (max-width: 431px) {
      width: 260px;
      padding: 10px;
    }
  `;
  
  export const SubContainer = styled.div`
    margin-top: 2vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    text-align: center;
  `;
  
  export const Title = styled.h1`
    font-size: 1.5rem;
    font-family: var(--font-family-bold);
    color: ${props => props.theme.COLORS.purple700};
    margin-top: 15px;
  
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  
    @media (max-width: 431px) {
      font-size: 1rem;
    }
  `;
  
  export const Service = styled.p`
    font-size: 1rem;
    color: ${props => props.theme.COLORS.purple400};
  
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  
    @media (max-width: 431px) {
      font-size: 0.8rem;
    }
  `;
  
  export const Image = styled.img`
    width: 160px;
    height: 160px;
    border-radius: 50%;
    object-fit: cover;
  
    @media (max-width: 768px) {
      width: 130px;
      height: 130px;
    }
  
    @media (max-width: 431px) {
      width: 100px;
      height: 100px;
    }
  `;
  
  export const Bloco = styled.div`
    margin-top: 15px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;
  
  export const IconText = styled.div`
    display: flex;
    justify-content: center;
    gap: 5px;
    flex-wrap: wrap;
  
    @media (max-width: 431px) {
      gap: 3px;
    }
  `;
  
  export const Icon = styled.i`
    font-family: 'Material Symbols Outlined', sans-serif;
    font-weight: normal;
    font-style: normal;
    font-size: 20px;
    color: ${props => props.theme.COLORS.purple700};
  `;
  
  export const Text = styled.p`
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