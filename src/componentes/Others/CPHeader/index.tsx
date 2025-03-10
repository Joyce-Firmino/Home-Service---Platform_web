import { useNavigate } from "react-router-dom";
import foto from "../../../assets/logoBranca.png";
import { navegarParaPaginaCadastro, navegarParaPaginaHome, navegarParaPaginaLogin, navegarParaPaginaPerfil } from "../../../util/navigation";
import { CPProfileP } from "../../Profiles/CPProfileP";
import { DivBloco, DivContainer, DivLogo, ImgLogo, H1Title, DivCategorias, PCategoria, PWelcome, PCabecalho, HamburgerMenu, MobileMenu, CloseButton, Backdrop, CPProfileWrapper, DivMenu, IIcon, AClick } from "./styled";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface CustomHeaderProps {
    name?: string;
    variantType: "primario" | "secundario";

}

export function CPHeader1({ name, variantType }: CustomHeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <DivContainer>
            <DivBloco>
                <AClick onClick={() => navegarParaPaginaHome(navigate)} href="">
                    <DivLogo>
                        <ImgLogo src={foto} alt="Logomarca" />
                        <H1Title>Home Service</H1Title>
                    </DivLogo>
                </AClick>

                {/* Categorias Desktop */}
                <DivCategorias variantType={variantType} >
                    {variantType === "primario" && (
                        <>
                            <AClick onClick={() => navegarParaPaginaCadastro(navigate)} href="">
                                <PCategoria>Cadastro</PCategoria>
                            </AClick>
                            <AClick onClick={() => navegarParaPaginaLogin(navigate)} href="">
                                <PCategoria>Fazer Login</PCategoria>
                            </AClick>
                        </>
                    )}
                    {variantType === "secundario" && (
                        <>
                            <AClick onClick={() => navegarParaPaginaPerfil(navigate)} href="">
                                <PWelcome>
                                    <PCabecalho>Bem vindo (a) </PCabecalho>
                                    <PCabecalho>{name}</PCabecalho>
                                </PWelcome>
                                <CPProfileWrapper>
                                    <CPProfileP variantType="secundario" name={name} />
                                </CPProfileWrapper>
                            </AClick>
                        </>
                    )}
                </DivCategorias>

                {/* Menu Hamburguer Mobile */}
                <HamburgerMenu onClick={toggleMenu} variantType={variantType}>
                    <span />
                    <span />
                    <span />
                </HamburgerMenu>
            </DivBloco>

            {/* Fundo Preto Transparente */}
            {isMenuOpen && <Backdrop onClick={toggleMenu} />}

            {/* Menu Mobile Aberto */}
            {isMenuOpen && (
                <MobileMenu>
                    <CloseButton onClick={toggleMenu}>
                        <AiOutlineClose size={24} />
                    </CloseButton>
                    <DivMenu>
                        <AClick onClick={() => navegarParaPaginaHome(navigate)} href="">
                            <IIcon>home</IIcon>
                            <PCategoria>Home</PCategoria>
                        </AClick>
                    </DivMenu>
                    {variantType === "primario" && (
                        <>
                            <DivMenu>
                                <AClick onClick={() => navegarParaPaginaCadastro(navigate)} href="">
                                    <IIcon>person</IIcon>
                                    <PCategoria>Cadastro</PCategoria>
                                </AClick>
                            </DivMenu>
                            <DivMenu>
                                <AClick onClick={() => navegarParaPaginaLogin(navigate)} href="">
                                    <IIcon>login</IIcon>
                                    <PCategoria>Fazer Login</PCategoria>
                                </AClick>
                            </DivMenu>
                        </>
                    )}
                    {variantType === "secundario" && (
                        <>
                            <PWelcome>
                                <AClick onClick={() => navegarParaPaginaPerfil(navigate)} href="">
                                    <PCabecalho>Bem vindo</PCabecalho>
                                    <PCabecalho>{name}</PCabecalho>
                                </AClick>
                            </PWelcome>
                            <CPProfileP variantType="secundario" name={name} />
                        </>
                    )}
                </MobileMenu>
            )}
        </DivContainer>
    );
}