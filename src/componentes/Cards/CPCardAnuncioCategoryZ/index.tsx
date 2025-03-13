import { useEffect, useState } from 'react';
import { DivBloco, ImgImage, DivContainer, IIcon, DivIconText, PService, DivImagem, H1Title, PText, DivInferior, DivTextos, HrLiinha } from './styled';

interface CustomCardProps {
  uriFoto: string;
  prestador: string;
  servico: string;
  city: Promise<string>;
  telefone: string;
  email: string;
}

export function CPCardAnuncioCategory({ prestador, servico, city, telefone, email, uriFoto }: CustomCardProps) {
    const [cidade, setCidade] = useState<string>("Carregando...");
  
    useEffect(() => {
      city.then(setCidade).catch(() => setCidade("Erro ao carregar"));
    }, [city]);
  
  
  return (
    <DivContainer>
      <DivImagem>
        <ImgImage src={uriFoto} alt="Foto perfil" />
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
            <PText>{cidade}</PText>
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
