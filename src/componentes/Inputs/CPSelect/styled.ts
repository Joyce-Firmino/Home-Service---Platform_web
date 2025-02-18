import styled from "styled-components";
import breakpoints from "../../../breakPoints";

type CustomInputProps = {
  variantComponent: string;
};

export const DivContainer = styled.div<CustomInputProps>`
  position: relative;
  height: 84px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin: 5px;

  ::placeholder {
    color: ${(props) => props.theme.COLORS.purple400}; /* Cor do placeholder */
    font-size: ${(props) => props.theme.FONTSIZE.pp}px;
  }

  width: ${(props) =>
    props.variantComponent === "pequeno" ? "345px" : "530px"};

  @media (${breakpoints.tablet}px) {
  }

  @media (${breakpoints.mobile}px) {
    width: 345px;
  }
`;

export const Select = styled.div<CustomInputProps>`
  outline: none; /* Remove o efeito de foco */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: 56px;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.COLORS.purple400};
  color: ${(props) => props.theme.COLORS.purple700};
  padding: 20px;

  width: ${(props) =>
    props.variantComponent === "pequeno" ? "345px" : "530px"};

  @media (${breakpoints.tablet}px) {
  }

  @media (${breakpoints.mobile}px) {
    width: 345px;
  }
`;

export const SelectDropdown = styled.div`
  display: flex;
  flex-direction: column;
  top: 90px;
  position: absolute;
  background-color: white;
  width: 100%;
  height: 140px;
  overflow: auto;
  border-radius: 0px 20px;
`;

export const SelectOption = styled.a`
  padding: 20px 14px;
  color: ${(props) => props.theme.COLORS.purple700};
`;

export const PTitulo = styled.p`
  font-weight: normal;
  font-style: normal;
  font-size: ${(props) => props.theme.FONTSIZE.pp}px;
  font-weight: bold;
  display: inline-block;
  vertical-align: middle;
  color: ${(props) => props.theme.COLORS.purple700};

  @media (${breakpoints.tablet}px) {
  }

  @media (${breakpoints.mobile}px) {
  }
`;

export const HiddenInput = styled.input<CustomInputProps>``;

export const MensagemErro = styled.span`
  align-self: start;
  font-size: 0.75rem;
  margin-left: 0.5rem;
  color: ${(props) => props.theme.COLORS.red100};
`;
