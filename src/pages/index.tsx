import { CPButtonG } from '../componentes/CPButtonG';
import { CPButtonM } from '../componentes/CPButtonM';
import { CPButtonP } from '../componentes/CPButtonP';
import { CPCardAnuncioCategory } from '../componentes/CPCardAnuncioCategoryZ';
import { CPCardPrestador } from '../componentes/CPCardPrestador';
import { CPModalConfirm } from '../componentes/CPModal';
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
        key={1}
      />
    </DivContainer>
  );
}