import { ImgImage, DivContainer, PService } from './styled';

interface CustomCardProps {
  foto: string;
  categoria: string;
}

export function CPCardCategory({ foto, categoria }: CustomCardProps) {
  return (
    <DivContainer>

      <ImgImage src="../assets/pedreiro.webp" alt="Foto perfil" />
        <PService>{categoria}</PService>
    </DivContainer>
  );
}
