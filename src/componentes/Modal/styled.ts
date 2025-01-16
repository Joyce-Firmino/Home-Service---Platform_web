import styled from 'styled-components';

export const ContainerStyled = styled.div`
  background-color: ${props => props.theme.COLORS.white};
  width: 450px;
  max-width: 504px;
  height: auto;
  border-radius: 20px;

  @media (max-width: 768px) {
    padding: 1rem;
    max-width: 380px;
  }

  @media (max-width: 431px) {
    padding: 0.8rem;
    width: 250px;
  }
`;

export const SubcontainerStyled = styled.div`
  margin-top: 3vh;
  background-color: ${props => props.theme.COLORS.white};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  border-radius: 20px;

  @media (max-width: 768px) {
    margin-top: 2vh;
  }

  @media (max-width: 431px) {
    margin-top: 2vh;
    height: 9%;
  }
`;

export const IconStyled = styled.i`
  font-family: 'Material Symbols Outlined', sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 7vw;
  display: inline-block;
  vertical-align: middle;
  color: ${props => props.theme.COLORS.green100};

  @media (max-width: 768px) {
    font-size: 8vw;
  }

  @media (max-width: 431px) {
    font-size: 10vw;
  }
`;

export const TextStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  max-width: 100%;
`;

export const TituloStyled = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.COLORS.purple700};

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 431px) {
    font-size: 1rem;
  }
`;

export const MsgStyled = styled.p`
  color: ${props => props.theme.COLORS.purple700};
  font-size: 1.2rem;
  max-width: 400px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 431px) {
    font-size: 0.9rem;
    max-width: 100%;
  }
`;

export const ButtonContainerStyled = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;

  @media (max-width: 768px) {
    margin-top: 3%;
    margin-bottom: 3%;
  }

  @media (max-width: 431px) {
    margin-top: 3%;
    margin-bottom: 3%;
  }
`;



  /* Regras de mídia agrupadas no final */
  // export const MediaStyles = styled.div`
  // @media ${breakpoints.tablet} {
  //   ${ContainerStyled} {
  //     padding: 1rem;
  //     max-width: 380px;
  //   }
  //   ${SubcontainerStyled} {
  //     margin-top: 2vh;
  //   }
  //   ${IconStyled} {
  //     font-size: 8vw;
  //   }
  //   ${TituloStyled} {       
  //     font-size: 1.2rem;
  //   }
  //   ${MsgStyled} {       
  //     font-size: 1rem;
  //   }
  //   ${ButtonContainerStyled} {       
  //     margin-top: 3%;
  //     margin-bottom: 3%;
  //   }
  // }
  
  // @media ${breakpoints.mobile} {
  //   ${ContainerStyled} {
  //     padding: 0.8rem;
  //     width: 250px;
  //   }
  //   ${SubcontainerStyled} {
  //     margin-top: 2vh;
  //     height: 9%;
  //   }
    
  //   ${IconStyled} {       
  //     font-size: 10vw;
  //   }
  //   ${TituloStyled} {       
  //     font-size: 1rem;
  //   }
  //   ${MsgStyled} {       
  //     font-size: 0.9rem;
  //     max-width: 100%;
  //   }
  //   ${ButtonContainerStyled} {       
  //     margin-top: 3%;
  //     margin-bottom: 3%;
  //   }
  // }`;