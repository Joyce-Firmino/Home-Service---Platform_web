import { ButtonG } from "../ButtonG";
import { ButtonP } from "../ButtonP";
import styles from './ModalConfirm.module.css'

interface CustomModalProps {
    icone: string;
    titulo: string;
    menssagem: string;
}

function clickado() {
    alert("Cilcado")
}

export function ModalConfirm({ icone, titulo, menssagem }: CustomModalProps) {
    const retorno = {
        icone,
        titulo,
        menssagem
    }
    return (
        <div className={styles.container}>
            <div className={styles.subcontainer}>
                <i className={styles.icon}>{icone}</i>
                <div className={styles.text}>
                    <p className={styles.titulo}>{titulo}</p>
                    <p className={styles.msg}>{menssagem}</p>
                    <div className= {styles.button}>
                        <ButtonG
                            color="#564caf"
                            onClick={clickado}
                            textColor="#fff"
                            title="Continuar"
                            key={2}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


