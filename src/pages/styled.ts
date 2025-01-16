import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: bisque;
  width: 2000px;
  height: 2000px;
  gap: 20px;

  @media (max-width: 500px) {
    width: 430px;
  }
`;

export const Prestador = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;



//   /* Regras de mídia agrupadas no final */
//   export const MediaStyles = styled.div`
//   @media (max-width: 500px)  {
//     ${Container} {
//       width: 430px;
//       background-color: red;
//     }
//     ${Prestador} {
//       flex-direction: column;
//     }
//   }
  
// `;