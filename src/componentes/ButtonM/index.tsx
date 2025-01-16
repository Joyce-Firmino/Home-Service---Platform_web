import { ButtonMStyled, ContainerStyled, TitleButtonStyled } from './styled';

interface CustomButtonProps {
  title: string;
  onClick: () => void;
  color: string;
  textColor: string;
  borderColor?: string;
  borderWidth?: number;
}

export function ButtonM({title,onClick,color, textColor,borderColor = "transparent",borderWidth = 0,}: CustomButtonProps) {
  return (
    <ContainerStyled>
      <ButtonMStyled color={color} textColor={textColor} borderColor={borderColor} borderWidth={borderWidth} onClick={onClick}>
        <TitleButtonStyled>{title}</TitleButtonStyled>
      </ButtonMStyled>
    </ContainerStyled>
  );
}
