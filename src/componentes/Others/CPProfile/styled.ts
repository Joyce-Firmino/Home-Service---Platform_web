import styled from 'styled-components';

interface CustomProfileProps {
    variantType: "primario" | "secundario";
}

export const DivContainer = styled.div<CustomProfileProps>`
  background-color: ${({ variantType, theme }) =>
    variantType === "primario" ? theme.COLORS.purple700 : theme.COLORS.white};
  width: 70px;
  height: 70px;
  border-radius: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const H1Title = styled.h1<CustomProfileProps>`
  color: ${({ variantType, theme }) =>
    variantType === "primario" ? theme.COLORS.white : theme.COLORS.purple700};
`;
