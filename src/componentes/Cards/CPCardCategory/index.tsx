import { ImgImage, DivContainer, PService } from './styled';
import foto from "../../../assets/cozinhar-comida-em-uma-cacarola-quente.png"

interface CustomCardProps {
  uriFoto: string;
  categoria: string;
}

export function CPCardCategory({ categoria }: CustomCardProps) {
  return (
    <DivContainer>
      <ImgImage src={foto} alt="Foto perfil" />
      <PService>{categoria}</PService>
    </DivContainer>
  );
}
