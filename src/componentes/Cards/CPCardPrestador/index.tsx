import { useEffect, useState } from 'react';
import { DivBloco, ImgImage, DivContainer, IIcon, DivIconText, PService, DivInfo, DivGlobal, H1Title, PText, HrLiinha } from './styled';
import { CPProfileM } from '../../Profiles/CPProfileM';

interface CustomCardProps {
  uriFoto: string;
  prestador: string;
  city: Promise<string>;
  telefone: string;
  email: string;
  nome: string;
}

export function CPCardPrestador({ prestador, city, telefone, email, nome }: CustomCardProps) {
  const [cidade, setCidade] = useState<string>("Carregando...");

  useEffect(() => {
    city.then(setCidade).catch(() => setCidade("Erro ao carregar"));
  }, [city]);

  return (
    <DivContainer>
      <CPProfileM name={nome} variantType="primario"></CPProfileM>
      <DivGlobal>
        <DivInfo>
          <H1Title>{prestador}</H1Title>
        </DivInfo>
        <HrLiinha />
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
            <IIcon>mail</IIcon>
            <PText>{email}</PText>
          </DivIconText>
        </DivBloco>
      </DivGlobal>
    </DivContainer>
  );
}
