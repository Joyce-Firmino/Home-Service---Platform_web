import { DivContainer, H1Title } from "./styled"; 

interface CustomProfileProps {
    iniciais: string;
    variantType: "primario" | "secundario" ;
}

export function CPProfileP({ iniciais, variantType }: CustomProfileProps) {
    return (
        <DivContainer variantType={variantType}>
            <H1Title variantType={variantType}>
                {iniciais}
            </H1Title>
        </DivContainer>
    )
}
