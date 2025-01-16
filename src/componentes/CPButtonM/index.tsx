import { Button, DivContainer, SpanTitleButton } from './styled';

interface CustomButtonProps {
  title: string;
  onClick: () => void;
  color: string;
  textColor: string;
  borderColor?: string;
  borderWidth?: number;
}

export function CPButtonM({title,onClick,color, textColor,borderColor = "transparent",borderWidth = 0,}: CustomButtonProps) {
  return (
    <DivContainer>
      <Button color={color} textColor={textColor} borderColor={borderColor} borderWidth={borderWidth} onClick={onClick}>
        <SpanTitleButton>{title}</SpanTitleButton>
      </Button>
    </DivContainer>
  );
}
