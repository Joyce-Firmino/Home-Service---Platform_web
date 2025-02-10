import { CPFooter } from "../../componentes/Others/CPFooter";
import { CPHeader1 } from "../../componentes/Others/CPHeader";
import { CPProfileG } from "../../componentes/Profiles/CPProfileG";
import { DivBloco, DivContainer, DivFoto, DivInfo, DivSubContainer, PAlterarFt } from "./styled";

export function Profile() {
    return (
        <DivContainer>
            <CPHeader1
                iniciais="JV"
                name="José Vieira"
                variantType="secundario"
            />
            <DivSubContainer>
                <DivBloco>
                    <DivFoto>
                        <CPProfileG
                            iniciais="JV"
                            variantType="primario" />
                        <PAlterarFt> Alterar foto</PAlterarFt>
                    </DivFoto>
                    <DivInfo></DivInfo>
                </DivBloco>
            </DivSubContainer>
            <CPFooter></CPFooter>
        </DivContainer>
    );
}