
import { CPButtonG } from '../../componentes/Buttons/CPButtonG';
import { CPButtonM } from '../../componentes/Buttons/CPButtonM';
import { CPButtonP } from '../../componentes/Buttons/CPButtonP';
import { CPCardAnuncioCategory } from '../../componentes/Cards/CPCardAnuncioCategoryZ';
import { CPCardCategory } from '../../componentes/Cards/CPCardAnuncioCategoryZ copy';
import { CPCardPrestador } from '../../componentes/Cards/CPCardPrestador';
import { CPInput01 } from '../../componentes/Inputs/CPInput01';
import { CPInput02 } from '../../componentes/Inputs/CPInput02';
import { CPInput03 } from '../../componentes/Inputs/CPInput03';
import { CPModalConfirm } from '../../componentes/Modals/CPModalConfirmacao';
import { CPModalSN } from '../../componentes/Modals/CPModalSN';
import { CPHeader1 } from '../../componentes/Others/CPHeader';
import { DivContainer, DivPrestador } from './styled';

export function Home() {
  function clickado() {
    alert('Clicado!');
  }

  return (
    <DivContainer>
      
      <CPButtonP
        title="Button P"
        onClick={clickado}
        color="blue"
        textColor="white"
        borderColor="black"
        borderWidth={2}
      />
      <CPButtonM
        title="Button M"
        onClick={clickado}
        color="black"
        textColor="white"
        borderColor="black"
        borderWidth={2}
      />
      <CPButtonG
        title="Button G"
        onClick={clickado}
        color="red"
        textColor="white"
        borderColor="black"
        borderWidth={2}
      />
      <DivPrestador>
        <CPCardPrestador
          city="São José de Piranhas - PB"
          email="danilo@gmail.com"
          prestador="Danilo James"
          servico="Pedreiro"
          telefone="(83) 99632-7456"
          uriFoto="../../assets/pedreiro.webp"
          key={5}
        />
        <CPCardPrestador
          city="São José de Piranhas - PB"
          email="danilo@gmail.com"
          prestador="Danilo James"
          servico="Pedreiro"
          telefone="(83) 99632-7456"
          uriFoto="../../assets/pedreiro.webp"
          key={5}
        />
        <CPCardPrestador
          city="São José de Piranhas - PB"
          email="danilo@gmail.com"
          prestador="Danilo James"
          servico="Pedreiro"
          telefone="(83) 99632-7456"
          uriFoto="../../assets/pedreiro.webp"
          key={5}
        />

        <CPCardAnuncioCategory
          city="São José de Piranhas - PB"
          email="danilo@gmail.com"
          prestador="Danilo James"
          servico="Pedreiro"
          telefone="(83) 99632-7456"
          uriFoto="../../assets/pedreiro.webp"
          key={5}
        />

      </DivPrestador>
      <CPModalConfirm
        icone="check_circle"
        menssagem="Sucesso!"
        titulo="Cadastro realizado"
        variant= "sucesso"
        key={1}
      />

      <CPModalSN
      icone='logout'
      titulo='Sair'
      menssagem='Deseja realmente sair?'
      />
      
      <CPInput01
        icone='info'
        placeholder='digite'
        titulo='Titulo'
        variantSize='grande'>
      </CPInput01>

      <CPInput01
        icone='info'
        placeholder='digite'
        titulo='Titulo'
        variantSize='pequeno'>
      </CPInput01>

      <CPInput02
        icone='info'
        placeholder='digite'
        titulo='Titulo'
        variantSize='pequeno'>
      </CPInput02>

      <CPInput02
        icone='info'
        placeholder='digite'
        titulo='Titulo'
        variantSize='grande'>
      </CPInput02>

      <CPInput03
        placeholder='digite'
        titulo='Titulo'
        variantSize='pequeno'>
      </CPInput03>

      <CPInput03
        placeholder='digite'
        titulo='Titulo'
        variantSize='pequeno'>
      </CPInput03>

      <CPCardCategory uriFoto='' categoria='Cuidador'>

      </CPCardCategory>

      
    </DivContainer>
  );

  
}