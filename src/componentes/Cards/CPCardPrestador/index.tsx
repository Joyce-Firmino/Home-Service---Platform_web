import foto from '../../../assets/pedreiro.webp';
import { DivBloco, ImgImage, DivContainer, IIcon, DivIconText, PService, DivInfo, DivGlobal, H1Title, PText, HrLiinha } from './styled';

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
      <ImgImage src={foto} alt="Foto perfil" />
      <DivGlobal>
        <DivInfo>
          <H1Title>{prestador}</H1Title>
          <PService>{servico}</PService>
        </DivInfo>
        <HrLiinha>
        </HrLiinha>
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
      </DivGlobal>
    </DivContainer>
  );
}
