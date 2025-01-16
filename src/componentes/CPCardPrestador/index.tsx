import foto from '../../assets/pedreiro.webp';
import { DivBloco, ImgImage, DivContainer, IIcon, DivIconText, PService, DivSubContainer, H1Title, PText } from './styled';

interface CustomCardProps {
  uriFoto: string;
  prestador: string;
  servico: string;
  city: string;
  telefone: string;
  email: string;
}

export function CPCardPrestador({ prestador, servico, city, telefone, email }: CustomCardProps) {
  return (
    <DivContainer>
      <DivSubContainer>
        <ImgImage src={foto} alt="Foto perfil" />
        <H1Title>{prestador}</H1Title>
        <PService>{servico}</PService>
        <DivBloco>
          <DivIconText>
            <IIcon>location_on</IIcon>
            <PText>{city}</PText>
          </DivIconText>
          <DivIconText>
            <IIcon>call</IIcon>
            <PText>{telefone}</PText>
          </DivIconText>
          <DivIconText>
            <IIcon>mail</IIcon>
            <PText>{email}</PText>
          </DivIconText>
        </DivBloco>
      </DivSubContainer>
    </DivContainer>
  );
}
