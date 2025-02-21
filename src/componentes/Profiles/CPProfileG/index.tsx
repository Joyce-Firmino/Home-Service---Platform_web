import { useEffect, useState } from "react";
import { DivContainer, H1Title } from "./styled"; 

interface CustomProfileProps {
    name?: string;  // Permite que seja opcional
    variantType: "primario" | "secundario";
}

export function CPProfileG({ name = "", variantType }: CustomProfileProps) {
    const [letrasIniciais, setLetrasIniciais] = useState("");

    useEffect(() => {
        const iniciais = () => {
            if (name) {  // Verifica se name não é undefined
                const letras = name.split('');
                let ini = '';
                for (let i = 0; i < 2 && i < letras.length; i++) {
                    ini = ini + letras[i];
                }
                setLetrasIniciais(ini.toUpperCase());
            }
        };

        iniciais();
    }, [name]); // Adicionei 'name' como dependência para atualizar se mudar

    return (
        <DivContainer variantType={variantType}>
            <H1Title variantType={variantType}>
                {letrasIniciais}
            </H1Title>
        </DivContainer>
    );
}
