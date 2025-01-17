
  // color: ${props => props.theme.COLORS.purple700};
  import styled from 'styled-components';
  import breakpoints from '../../../breakPoints';


  export const DivContainer = styled.div`
    background-color: ${props => props.theme.COLORS.white};
    width: 174px;
    height: 121px;
    border-radius: 18px;
    padding:  0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    border: 2px solid ${props => props.theme.COLORS.purple700};

  
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
  
  export const PService = styled.p`
    font-size: 1rem;
    color: ${props => props.theme.COLORS.purple700};
    font-weight: bold;

  
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  
    @media (max-width: 431px) {
      font-size: 0.8rem;
    }
  `;
  
