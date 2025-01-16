import foto from '../../assets/cozinhar-comida-em-uma-cacarola-quenteBranca.png';
import { DivBloco, ImgImage, DivContainer, IIcon, DivIconText, PService, DivImagem, H1Title, PText, DivInferior, DivTextos, HrLiinha } from './styled';

interface CustomCardProps {
  uriFoto: string;
  prestador: string;
  servico: string;
  city: string;
  telefone: string;
  email: string;
}

export function CPCardAnuncioCategory({ prestador, servico, city, telefone, email }: CustomCardProps) {
  return (
    <DivContainer>
      <DivImagem>
        <ImgImage src={foto} alt="Foto perfil" />
      </DivImagem>
      <DivInferior>
        <DivTextos>
          <H1Title>{prestador}</H1Title>
          <PService>{servico}</PService>
        </DivTextos>
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
            <IIcon>payments</IIcon>
            <PText>{email}</PText>
          </DivIconText>
        </DivBloco>
      </DivInferior>
    </DivContainer>
  );
}
