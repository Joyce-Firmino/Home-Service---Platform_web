import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";
import { CPButtonG } from "../../Buttons/CPButtonG";
import { DivContainer, DivSubcontainer, IIcon, DivText, PTitulo, PMsg, DivButtonContainer, DivSombra } from './styled';

type CustomModalProps = {
  icone: string;
  titulo: string;
  menssagem: string;
  variant: "sucesso" | "erro";
  onClose: () => void; // Nova props para fechar o modal
};

export function CPModalConfirm({ icone, titulo, menssagem, variant, onClose }: CustomModalProps) {
  const { setError } = useContext(AuthContext);

  function clickado() {
    setError(false);
    onClose(); // Chama a função passada por props para fechar o modal
  }

  return (
    <DivSombra>
      <DivContainer>
        <DivSubcontainer>
          <IIcon variantComponent={variant}>{icone}</IIcon>
          <DivText>
            <PTitulo>{titulo}</PTitulo>
            <PMsg>{menssagem}</PMsg>
            <DivButtonContainer>
              <CPButtonG
                type="button"
                title='Confirmar'
                variantType='primario'
                onClick={clickado}
              />
            </DivButtonContainer>
          </DivText>
        </DivSubcontainer>
      </DivContainer>
    </DivSombra>
  );
}





// import { useContext } from "react";
// import { AuthContext } from "../../../context/authContext";
// import { CPButtonG } from "../../Buttons/CPButtonG";
// import { DivContainer, DivSubcontainer, IIcon, DivText, PTitulo, PMsg, DivButtonContainer, DivSombra } from './styled';

// type CustomModalProps = {
//   icone: string;
//   titulo: string;
//   menssagem: string;
//   variant: "sucesso" | "erro";
// };



// export function CPModalConfirm({ icone, titulo, menssagem, variant }: CustomModalProps) {
//   const { error, setError } = useContext(AuthContext);


//   function clickado() {
//     setError(false);
//   }


//   return (
//     <DivSombra>
//       <DivContainer>
//         <DivSubcontainer>
//           <IIcon variantComponent={variant}>{icone}</IIcon>
//           <DivText>
//             <PTitulo>{titulo}</PTitulo>
//             <PMsg>{menssagem}</PMsg>
//             <DivButtonContainer>
//               <CPButtonG title='Confirmar' variantType='primario' onClick={clickado}></CPButtonG>

//             </DivButtonContainer>
//           </DivText>
//         </DivSubcontainer>
//       </DivContainer>
//     </DivSombra>
//   );
// }
