import { ImgImage, DivContainer, PService } from './styled';

interface CustomCardProps {
  uriFoto: string;
  categoria: string;
}

export function CPCardCategory({ categoria, uriFoto }: CustomCardProps) {
  return (
    <DivContainer>
      <ImgImage src={uriFoto} alt="Foto perfil" />
      <PService>{categoria}</PService>
    </DivContainer>
  );
}
