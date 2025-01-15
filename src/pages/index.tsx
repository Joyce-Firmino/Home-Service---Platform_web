import { ButtonG } from '../componentes/ButtonG';
import { ButtonM } from '../componentes/ButtonM';
import { ButtonP } from '../componentes/ButtonP';
import { CardPrestador } from '../componentes/CardPrestador';
import { ModalConfirm } from '../componentes/Modal';
import styles from './Home.module.css';



export function Home() {

  function clickado() {
    alert("Clicado!");

  }
  return (
    <div className={styles.container}>

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
      <div className={styles.prestador}>
        <CardPrestador
          city='São José de Piranhas - PB'
          email='danilo@gmail.com'
          prestador='Danilo James'
          servico='Pedreiro'
          telefone='(83) 99632-7456'
          uriFoto='../../assets/pedreiro.webp'
          key={5}
        />
        <CardPrestador
          city='São José de Piranhas - PB'
          email='danilo@gmail.com'
          prestador='Danilo James'
          servico='Pedreiro'
          telefone='(83) 99632-7456'
          uriFoto='../../assets/pedreiro.webp'
          key={5}
        />
        <CardPrestador
          city='São José de Piranhas - PB'
          email='danilo@gmail.com'
          prestador='Danilo James'
          servico='Pedreiro'
          telefone='(83) 99632-7456'
          uriFoto='../../assets/pedreiro.webp'
          key={5}
        />
      </div>


      <ModalConfirm
        icone="check_circle"
        menssagem="Sucesso!"
        titulo="Cadastro realizado"
        key={1}
      />


    </div>
  )
}
