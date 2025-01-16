import React from 'react';
import { ButtonG } from '../componentes/ButtonG';
import { ButtonM } from '../componentes/ButtonM';
import { ButtonP } from '../componentes/ButtonP';
import { CardPrestador } from '../componentes/CardPrestador';
import { ModalConfirm } from '../componentes/Modal';
import { Container, Prestador } from './styled';

export function Home() {
  function clickado() {
    alert('Clicado!');
  }

  return (
    <Container>
      <ButtonP
        title="Button P"
        onClick={clickado}
        color="blue"
        textColor="white"
        borderColor="black"
        borderWidth={2}
      />
      <ButtonM
        title="Button M"
        onClick={clickado}
        color="black"
        textColor="white"
        borderColor="black"
        borderWidth={2}
      />
      <ButtonG
        title="Button G"
        onClick={clickado}
        color="red"
        textColor="white"
        borderColor="black"
        borderWidth={2}
      />
      <Prestador>
        <CardPrestador
          city="São José de Piranhas - PB"
          email="danilo@gmail.com"
          prestador="Danilo James"
          servico="Pedreiro"
          telefone="(83) 99632-7456"
          uriFoto="../../assets/pedreiro.webp"
          key={5}
        />
        <CardPrestador
          city="São José de Piranhas - PB"
          email="danilo@gmail.com"
          prestador="Danilo James"
          servico="Pedreiro"
          telefone="(83) 99632-7456"
          uriFoto="../../assets/pedreiro.webp"
          key={5}
        />
        <CardPrestador
          city="São José de Piranhas - PB"
          email="danilo@gmail.com"
          prestador="Danilo James"
          servico="Pedreiro"
          telefone="(83) 99632-7456"
          uriFoto="../../assets/pedreiro.webp"
          key={5}
        />
      </Prestador>
      <ModalConfirm
        icone="check_circle"
        menssagem="Sucesso!"
        titulo="Cadastro realizado"
        key={1}
      />
    </Container>
  );
}
