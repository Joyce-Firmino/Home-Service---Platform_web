import { DivBloco, DivContainer, DivLogo, ImgLogo, DivCategorias, PCategoria, HrLiinha, DivRodape, PCopy } from "./styled";
import instagram from "../../../assets/instagram.svg"
import facebook from "../../../assets/facebook.svg"
import youtube from "../../../assets/youtube.svg"

interface CustomHeaderProps {
    uriFoto: string;
}

export function CPFooter() {
    return (
        <DivContainer>
            <DivBloco>
                <HrLiinha />
                <DivCategorias>
                    <PCategoria> Ajuda </PCategoria>
                    <PCategoria> Política de Privacidade </PCategoria>
                    <PCategoria> Quem Somos </PCategoria>
                    <PCategoria> Termos de Uso </PCategoria>
                </DivCategorias>
                <HrLiinha />
            </DivBloco>
            <DivRodape>
                <DivLogo>
                    <ImgLogo src={instagram} alt="Instagram" />
                    <ImgLogo src={facebook} alt="Facebook" />
                    <ImgLogo src={youtube} alt="Youtube" />
                </DivLogo>
                <PCopy>© 2025 - by Primos Peixe</PCopy>
            </DivRodape>
        </DivContainer>
    )
}