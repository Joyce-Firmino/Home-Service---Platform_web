import { useNavigate } from "react-router";
import foto from "../../../assets/logoBranca.png";
import { CPProfileP } from "../../Profiles/CPProfileP";

import { DivBloco, DivContainer, DivLogo, ImgLogo, H1Title, DivCategorias, PCategoria, PWelcome, PCabecalho, HamburgerMenu, MobileMenu, CloseButton, Backdrop, CPProfileWrapper, DivMenu, IIcon, AClick } from "./styled";
import { useEffect, useState } from "react";
import { AiFillEdit, AiOutlineClose, AiOutlineHome, AiOutlineLogin, AiOutlineProfile } from "react-icons/ai"; // Ícone de fechar

interface CustomHeaderProps {
    name?: string;
    variantType: "primario" | "secundario";

}

export function CPHeader1({ name, variantType }: CustomHeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const clicado = () => {
        alert("Clicado")
    }


    const navigate = useNavigate();

    function navegarParaPaginaHome() {
        navigate(`/`);
    }
    function navegarParaPaginaPerfil() {
        navigate(`/perfil`);
    }
    function navegarParaPaginaCadastro() {
        navigate(`/cadastro`);
    }
    function navegarParaPaginaLogin() {
        navigate(`/login`);
    }


    return (
        <DivContainer>
            <DivBloco>
                <AClick onClick={navegarParaPaginaHome} href="">
                    <DivLogo>
                        <ImgLogo src={foto} alt="Logomarca" />
                        <H1Title>Home Service</H1Title>
                    </DivLogo>
                </AClick>

                {/* Categorias Desktop */}
                <DivCategorias variantType={variantType} >
                    {variantType === "primario" && (
                        <>
                            <AClick onClick={navegarParaPaginaCadastro} href="">
                                <PCategoria>Cadastro</PCategoria>
                            </AClick>
                            <AClick onClick={navegarParaPaginaLogin} href="">
                                <PCategoria>Fazer Login</PCategoria>
                            </AClick>
                        </>
                    )}
                    {variantType === "secundario" && (
                        <>
                            <AClick onClick={navegarParaPaginaPerfil} href="">
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
                        <AClick onClick={navegarParaPaginaHome} href="">
                            <IIcon>home</IIcon>
                            <PCategoria>Home</PCategoria>
                        </AClick>
                    </DivMenu>
                    {variantType === "primario" && (
                        <>
                            <DivMenu>
                                <AClick onClick={navegarParaPaginaCadastro} href="">
                                    <IIcon>person</IIcon>
                                    <PCategoria>Cadastro</PCategoria>
                                </AClick>
                            </DivMenu>
                            <DivMenu>
                                <AClick onClick={navegarParaPaginaLogin} href="">
                                    <IIcon>login</IIcon>
                                    <PCategoria>Fazer Login</PCategoria>
                                </AClick>
                            </DivMenu>
                        </>
                    )}
                    {variantType === "secundario" && (
                        <>
                            <PWelcome>
                                <AClick onClick={navegarParaPaginaPerfil} href="">
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









// /// esse e o codigo recente
// import foto from "../../../assets/logoBranca.png";
// import { CPProfile } from "../CPProfile";


// import { DivBloco, DivContainer, DivLogo, ImgLogo, H1Title, DivCategorias, PCategoria, PWelcome, PCabecalho, HamburgerMenu, MobileMenu, CloseButton } from "./styled";
// import { useState } from "react";
// import { AiOutlineClose } from "react-icons/ai"; // Ícone de fechar

// interface CustomHeaderProps {
//   name: string;
//   variantType: "primario" | "secundario";
//   iniciais: string;
// }

// export function CPHeader1({ name, variantType, iniciais }: CustomHeaderProps) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <DivContainer>
//       <DivBloco>
//         <DivLogo>
//           <ImgLogo src={foto} alt="Logomarca" />
//           <H1Title>Home Service</H1Title>
//         </DivLogo>

//         {/* Categorias Desktop */}
//         <DivCategorias>
//           <PCategoria>Home</PCategoria>
//           {variantType === "primario" && (
//             <>
//               <PCategoria>Cadastro</PCategoria>
//               <PCategoria>Fazer Login</PCategoria>
//             </>
//           )}
//           {variantType === "secundario" && (
//             <>
//               <PWelcome>
//                 <PCabecalho>Bem vindo</PCabecalho>
//                 <PCabecalho>{name}</PCabecalho>
//               </PWelcome>
//               <CPProfile variantType="secundario" iniciais={iniciais} />
//             </>
//           )}
//         </DivCategorias>

//         {/* Menu Hamburguer Mobile */}
//         <HamburgerMenu onClick={toggleMenu}>
//           <span />
//           <span />
//           <span />
//         </HamburgerMenu>
//       </DivBloco>

//       {/* Menu Mobile Aberto */}
//       {isMenuOpen && (
//         <MobileMenu>
//           <CloseButton onClick={toggleMenu}>
//             <AiOutlineClose size={24} />
//           </CloseButton>
//           <PCategoria>Home</PCategoria>
//           {variantType === "primario" && (
//             <>
//               <PCategoria>Cadastro</PCategoria>
//               <PCategoria>Fazer Login</PCategoria>
//             </>
//           )}
//           {variantType === "secundario" && (
//             <>
//               <PWelcome>
//                 <PCabecalho>Bem vindo</PCabecalho>
//                 <PCabecalho>{name}</PCabecalho>
//               </PWelcome>
//               <CPProfile variantType="secundario" iniciais={iniciais} />
//             </>
//           )}
//         </MobileMenu>
//       )}
//     </DivContainer>
//   );
// }

