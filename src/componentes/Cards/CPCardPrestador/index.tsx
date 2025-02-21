import { useEffect, useState } from 'react';
import foto from '../../../assets/pedreiro.webp';
import { DivBloco, ImgImage, DivContainer, IIcon, DivIconText, PService, DivInfo, DivGlobal, H1Title, PText, HrLiinha } from './styled';
import { CPProfileG } from '../../Profiles/CPProfileG';
import { CPProfileM } from '../../Profiles/CPProfileM';

interface CustomCardProps {
  uriFoto: string;
  prestador: string;
  city: string;
  telefone: string;
  email: string;
  nome:string
}



export function CPCardPrestador({ prestador, city, telefone, email, nome }: CustomCardProps) {
  return (
    <DivContainer>
      <CPProfileM name={nome} variantType='primario'></CPProfileM>
      <DivGlobal>
        <DivInfo>
          <H1Title>{prestador}</H1Title>
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
