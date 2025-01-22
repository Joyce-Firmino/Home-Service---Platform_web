import { Button, DivContainer, SpanTitleButton } from './styled';

interface CustomButtonProps {
  title: string;
  onClick: () => void;
  variantType: "primario" | "secundario";
}

export function CPButtonG({ title, onClick, variantType }: CustomButtonProps) {
  return (
    <DivContainer>
      <Button variantType={variantType} onClick={onClick}>
        <SpanTitleButton>{title}</SpanTitleButton>
      </Button>
    </DivContainer>
  );
}
