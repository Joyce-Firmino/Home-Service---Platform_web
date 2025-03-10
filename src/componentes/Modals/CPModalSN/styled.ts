import styled from 'styled-components';
import breakpoints from '../../../breakPoints';



export const DivContainer = styled.div`
  background-color: ${props => props.theme.COLORS.white};
  width: 450px;
  max-width: 504px;
  height: auto;
  border-radius: 20px;

  @media (${breakpoints.tablet}px){
    padding: 1rem;
    max-width: 380px;
  }

  @media (${breakpoints.mobile}px) {
    padding: 0.8rem;
    width: 250px;
  }
`;

export const DivSubcontainer = styled.div`
  margin-top: 3vh;
  background-color: ${props => props.theme.COLORS.white};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  border-radius: 20px;

  @media (${breakpoints.tablet}px) {
    margin-top: 2vh;
  }

  @media (${breakpoints.mobile}px)  {
    margin-top: 2vh;
    height: 9%;
  }
`;

export const IIcon = styled.i`
  font-family: 'Material Symbols Outlined', sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 8vw;
  display: inline-block;
  vertical-align: middle;
  color: ${props => props.theme.COLORS.purple700};

  @media (${breakpoints.tablet}px) {
    font-size: 8vw;
  }

  @media (${breakpoints.mobile}px)  {
    font-size: 10vw;
  }
`;

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;
  max-width: 100%;
`;

export const PTitulo = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.COLORS.purple700};

  @media (${breakpoints.tablet}px) {
    font-size: 1.2rem;
  }

  @media (${breakpoints.mobile}px)  {
    font-size: 1rem;
  }
`;

export const PMsg = styled.p`
  color: ${props => props.theme.COLORS.purple700};
  font-size: 1.2rem;
  max-width: 400px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  text-align: center;

  @media (${breakpoints.tablet}px) {
    font-size: 1rem;
  }

  @media (${breakpoints.mobile}px)  {
    font-size: 0.9rem;
    max-width: 100%;
  }
`;

export const DivButtonContainer = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: row;
  gap: 26px;
  

  @media (${breakpoints.tablet}px) {
    margin-top: 3%;
    margin-bottom: 3%;
  }

  @media (${breakpoints.mobile}px)  {
    margin-top: 3%;
    margin-bottom: 3%;
    gap: 5px;
    

  }
`;