import foto from "../../../assets/cozinhar-comida-em-uma-cacarola-quenteBranca.png";
import { CPButtonPP } from "../../Buttons/CPButtonPP";
import {
  DivBloco,
  ImgImage,
  DivContainer,
  IIcon,
  DivIconText,
  DivImagem,
  H1Title,
  PPrestador,
  PText,
  DivInferior,
  DivTextos,
  HrLiinha,
  DivGrupoBotao,
} from "./styled";

interface CustomCardProps {
  uriFoto: string;
  prestador: string;
  servico: string;
  descricao: string;
  pagamento: string;
}

export function CPCardAnuncio({
  prestador,
  servico,
  descricao,
  pagamento,
}: CustomCardProps) {
  return (
    <DivContainer>
      <DivImagem>
        <ImgImage src={foto} alt="Foto perfil" />
      </DivImagem>
      <DivInferior>
        <DivTextos>
          <H1Title>{servico}</H1Title>
          <PPrestador>{prestador}</PPrestador>
        </DivTextos>
        <HrLiinha></HrLiinha>
        <DivBloco>
          <DivIconText>
            <IIcon>description</IIcon>
            <PText>{descricao}</PText>
          </DivIconText>
          <DivIconText>
            <IIcon>payments</IIcon>
            <PText>{pagamento}</PText>
          </DivIconText>
        </DivBloco>
        <DivGrupoBotao>
          <CPButtonPP
            title="Editar"
            variantType="secundario"
            onClick={() => console.log("clique!")}
          ></CPButtonPP>
          <CPButtonPP
            title="Excluir"
            variantType="primario"
            onClick={() => console.log("clique!")}
          ></CPButtonPP>
        </DivGrupoBotao>
      </DivInferior>
    </DivContainer>
  );
}
