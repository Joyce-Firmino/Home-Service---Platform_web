import styles from './CardPrestador.module.css'
import foto from '../../assets/pedreiro.webp';

interface CustomCardProps {
    uriFoto: string;
    prestador: string;
    servico: string;
    city: string;
    telefone: string;
    email: string
}

export function CardPrestador({ prestador, servico, city, telefone, email }: CustomCardProps) {
    return (
        <div className={styles.container}>
            <div className={styles.subcontainer}>
                <img style={{ width: 150, height: 160, borderRadius: 1000 }} src={foto} alt="React Logo" />
                <h1 className={styles.title}>{prestador}</h1>
                <p className={styles.service}>{servico}</p>
                <div className={styles.bloco}>
                    <div className={styles.iconText}>
                        <i className={styles.icon}>location_on</i>
                        <p className={styles.text}>{city}</p>
                    </div>
                    <div className={styles.iconText}>
                        <i className={styles.icon}>call</i>
                        <p className={styles.text}>{telefone}</p>
                    </div>
                    <div className={styles.iconText}>
                        <i className={styles.icon}>mail</i>
                        <p className={styles.text}>{email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}