import styled from 'styled-components';
import breakpoints from '../../../breakPoints';

  export const  DivContainer = styled.div`
    background-color: ${props => props.theme.COLORS.white};
    display: flex;
    width: 330px;
    border-radius: 18px;
    padding: 20px;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding-top: 30px;

  
    @media (${breakpoints.tablet}px) {
      width: 290px;
      padding: 15px;
      padding-top: 30px;
    }
  
    @media (${breakpoints.mobile}px) {
      min-width: 367px;
      width: 80vw;
      height: 166px;
      padding: 10px;
      padding-left: 30px;
      flex-direction: row;
      justify-content: center;
      justify-content: flex-start;
      align-items: center;
      gap: 22px;

    }
  `;
  
  export const H1Title = styled.h1`
    font-size: 1.5rem;
    font-family: var(--font-family-bold);
    color: ${props => props.theme.COLORS.purple700};
    text-align: center;
    width: 100%;/* Ajuste conforme necessário */
    max-width: 60%;/* Defina um limite para evitar ocupar toda a tela */
    white-space: nowrap; /* Impede quebra de linha */
    overflow: hidden; /* Esconde o texto que ultrapassa o limite */
    text-overflow: ellipsis; /* Adiciona os "..." */
    

  
    @media (${breakpoints.tablet}px) {
      font-size: 1.2rem;
    }
  
    @media (${breakpoints.mobile}px)  {
      font-size: 1rem;
      text-align: start;
      
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
    width: 100%;

    @media (${breakpoints.mobile}px)  {
      align-items: flex-start;
    }
  `;

 export const DivGlobal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 90%;

    @media (${breakpoints.mobile}px)  {
      display: flex;
      width: 60%;
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
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;

    @media (${breakpoints.mobile}px)  {
      align-items: flex-start;
      gap: 1px;
      width: 100%;
    }
  `;
  
  export const DivIconText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 5px;
    flex-wrap: wrap;
  
    @media (${breakpoints.mobile}px)  {
      gap: 3px;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
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
    width: 100%;/* Ajuste conforme necessário */
    max-width: 60%;/* Defina um limite para evitar ocupar toda a tela */
    white-space: nowrap; /* Impede quebra de linha */
    overflow: hidden; /* Esconde o texto que ultrapassa o limite */
    text-overflow: ellipsis; /* Adiciona os "..." */
    

  
    @media (${breakpoints.tablet}px) {
      font-size: 0.8rem;
      max-width: 60%; /* Defina um limite para evitar ocupar toda a tela */
    }
  
    @media (${breakpoints.mobile}px) {
      font-size: 0.7rem;
      max-width: 60%; /* Defina um limite para evitar ocupar toda a tela */
    }
  `;