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
                    <a href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"><ImgLogo src={instagram} alt="Instagram" /></a>
                    <a href="https://web.facebook.com/campaign/landing.php?&campaign_id=1654787885&extra_1=s%7Cc%7C318628673247%7Ce%7Cfacebook%27%7C&placement&creative=318628673247&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1654787885%26adgroupid%3D62478117254%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D1031513%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gad_source=1&gclid=Cj0KCQiA4-y8BhC3ARIsAHmjC_HRBWqwc5A8dGXy8yUbUVYm65vkmuEfzIEnx3QWgR7PKtdOLwQqP0saAglFEALw_wcB&_rdc=1&_rdr#"
                        target="_blank"
                        rel="noopener noreferrer"><ImgLogo src={facebook} alt="Facebook" /></a>
                    <a href="https://www.youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"><ImgLogo src={youtube} alt="Youtube" /></a>
                </DivLogo>
                <PCopy>© 2025 - by Primos Peixe</PCopy>
            </DivRodape>
        </DivContainer>
    )
}