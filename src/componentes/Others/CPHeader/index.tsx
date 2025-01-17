import { DivBloco, DivContainer, DivLogo, ImgLogo, H1Title, DivCategorias, PCategoria, PCadastro, PLogin } from "./styled";
import foto from "../../../assets/logo.png"

interface CustomHeaderProps {
    uriFoto: string;
}
export function CPHeader1() {
    return (
        <DivContainer>
            <DivBloco>
                <DivLogo>
                    <ImgLogo src={foto} alt="Logomarca" />
                    <H1Title> Home Service </H1Title>
                </DivLogo>
                <DivCategorias>
                    <PCategoria> Home </PCategoria>
                    <PCategoria> Cadastro </PCategoria>
                    <PCategoria> Fazer Login </PCategoria>
                </DivCategorias>
            </DivBloco>
        </DivContainer>
    )
}