import { ButtonHTMLAttributes } from "react";
import { Button, DivContainer, SpanTitleButton } from "./styled";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick?: () => void; // Torne o onClick opcional
  variantType: "primario" | "secundario";
  type: "submit" | "button";
}

export function CPButtonG({
  title,
  onClick,
  variantType,
  type,
}: CustomButtonProps) {
  return (
    <DivContainer>
      <Button variantType={variantType} onClick={onClick} type={type}>
        {" "}
        {/* Defina o type aqui */}
        <SpanTitleButton>{title}</SpanTitleButton>
      </Button>
    </DivContainer>
  );
}
