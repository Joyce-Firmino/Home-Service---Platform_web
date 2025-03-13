  import styled from 'styled-components';
  import breakpoints from '../../../breakPoints';


  export const DivContainer = styled.button`
    background-color: ${props => props.theme.COLORS.purple500};
    width: 174px;
    height: 121px;
    border-radius: 18px;
    padding:  0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    border: 0px;
    cursor: pointer;

    @media (${breakpoints.tablet}px) {
      width: 135px;
      padding: 15px;
    }
  
    @media (${breakpoints.mobile}px) {
      width: 85px;
      height: 97px;
      flex-direction: column;
      gap: 5px;
    }
  `;

export const ImgImage = styled.img`
width: 40px;
height: 40px;

@media (${breakpoints.tablet}px) {

}

@media (${breakpoints.mobile}px) {
  width: 37px;
  height: 37px;
}
`;
  
  export const PService = styled.p`
    font-size: ${props => props.theme.FONTSIZE.p}px;
    color: ${props => props.theme.COLORS.white};
    font-weight: bold;

  
    @media (${breakpoints.tablet}px) {
      font-size: 0.9rem;
    }
  
    @media (${breakpoints.mobile}px) {
      font-size: 0.8rem;
    }
  `;
  
