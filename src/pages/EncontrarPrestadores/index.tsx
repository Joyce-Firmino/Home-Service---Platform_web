import { useContext } from "react";
import { CPCardPrestador } from "../../componentes/Cards/CPCardPrestador";
import { CPFooter } from "../../componentes/Others/CPFooter";
import { CPHeader1 } from "../../componentes/Others/CPHeader";
import { DivCards, DivContainer, DivMedia, DivSubcontainer, DivTitulo, H1Titulo, PDescricao } from "./styled";
import { AuthContext } from "../../context/authContext";




export function EncontrarPrestador() {
    const context = useContext(AuthContext)

console.log(context.authData?.token);
    return (
        <DivContainer>
            <DivSubcontainer>
                <CPHeader1 iniciais="JV" name="José Vieira" variantType="secundario"></CPHeader1>
                <DivTitulo>
                    <H1Titulo>Encontrar Prestadores</H1Titulo>
                    <PDescricao>Encontre abaixo todos os profissionais que você procura</PDescricao>
                </DivTitulo>
            </DivSubcontainer>
            <DivMedia>
                <DivCards>
                    <CPCardPrestador
                        city="São José de Piranhas - PB"
                        email="jose@gmail.com"
                        prestador="José Vieira"
                        servico="Fisioterapeuta"
                        telefone="(83) 99324-7454"
                        uriFoto="fjghjfk"
                    />
                    <CPCardPrestador
                        city="São José de Piranhas - PB"
                        email="jose@gmail.com"
                        prestador="José Vieira"
                        servico="Fisioterapeuta"
                        telefone="(83) 99324-7454"
                        uriFoto="fjghjfk"
                    />
                    <CPCardPrestador
                        city="São José de Piranhas - PB"
                        email="jose@gmail.com"
                        prestador="José Vieira"
                        servico="Fisioterapeuta"
                        telefone="(83) 99324-7454"
                        uriFoto="fjghjfk"
                    />
                    <CPCardPrestador
                        city="São José de Piranhas - PB"
                        email="jose@gmail.com"
                        prestador="José Vieira"
                        servico="Fisioterapeuta"
                        telefone="(83) 99324-7454"
                        uriFoto="fjghjfk"
                    />
                    <CPCardPrestador
                        city="São José de Piranhas - PB"
                        email="jose@gmail.com"
                        prestador="José Vieira"
                        servico="Fisioterapeuta"
                        telefone="(83) 99324-7454"
                        uriFoto="fjghjfk"
                    />
                    <CPCardPrestador
                        city="São José de Piranhas - PB"
                        email="jose@gmail.com"
                        prestador="José Vieira"
                        servico="Fisioterapeuta"
                        telefone="(83) 99324-7454"
                        uriFoto="fjghjfk"
                    />
                </DivCards>
                <CPFooter></CPFooter>
            </DivMedia>
        </DivContainer>
    );

}