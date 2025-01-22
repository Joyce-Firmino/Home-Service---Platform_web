import styled from 'styled-components';

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.COLORS.purple200};
  ;
  width: 100%;
  height: 1080px;
  gap: 20px;

  @media (max-width: 500px) {
    width: 430px;
  }
`;

export const DivPrestador = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;