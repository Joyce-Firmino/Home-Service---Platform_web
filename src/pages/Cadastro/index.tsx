import { CPButtonG } from "../../componentes/Buttons/CPButtonG";
import { CPInput01 } from "../../componentes/Inputs/CPInput01";
import { CPInput03 } from "../../componentes/Inputs/CPInput03";
import { CPImagemLogin } from "../../componentes/Others/CPImagemLogin";
import { DivButton, DivContainer, DivDPessoais, DivDProfissionais, DivGlobal, DivInfo, DivInputs1, DivSubGlobal, H1Titulo, PDescricao } from "./styled";

function clickado() {
    alert('Clicado!');
}

export function Cadastro() {
    return (
        <DivContainer>
            <CPImagemLogin></CPImagemLogin>
            <DivGlobal>
                <DivSubGlobal>
                    <H1Titulo>Cadastro</H1Titulo>
                    <DivInfo>
                        <DivDPessoais>
                            <PDescricao>Dados Pessoais</PDescricao>
                            <DivInputs1>
                                <CPInput03
                                    titulo='Nome'
                                    placeholder='Informe seu nome'
                                    variantSize='pequeno'
                                    onChange={clickado} />
                                <CPInput03
                                    titulo='Telefone'
                                    placeholder='Informe seu telefone'
                                    variantSize='pequeno'
                                    onChange={clickado} />
                            </DivInputs1>
                            <DivInputs1>
                                <CPInput03
                                    titulo='Email'
                                    placeholder='Informe seu email'
                                    variantSize='pequeno'
                                    onChange={clickado} />
                                <CPInput03
                                    titulo='Senha'
                                    placeholder='Informe sua senha'
                                    variantSize='pequeno'
                                    onChange={clickado} />
                            </DivInputs1>
                        </DivDPessoais>
                        <DivDProfissionais>
                            <PDescricao>Dados Profissionais</PDescricao>
                            <DivInputs1>
                                <CPInput03
                                    titulo='CNPJ'
                                    placeholder='Informe seu CNPJ'
                                    variantSize='pequeno'
                                    onChange={clickado} />
                                <CPInput03
                                    titulo='Horário de Disponibilidade'
                                    placeholder='Informe sua disponibilidade'
                                    variantSize='pequeno'
                                    onChange={clickado} />
                            </DivInputs1>
                        </DivDProfissionais>
                    </DivInfo>
                    <DivButton>
                        <CPButtonG
                            onClick={clickado}
                            title="Cadastrar"
                            variantType="primario"
                        />
                    </DivButton>

                </DivSubGlobal>

            </DivGlobal>

        </DivContainer>
    );
}