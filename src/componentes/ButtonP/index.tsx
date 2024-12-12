import styles from './ButtonP.module.css';

interface CustomButtonProps {
  title: string; // Texto do botão
  onClick: () => void; // Função chamada ao clicar
  color: string; // Cor de fundo do botão
  textColor: string; // Cor do texto do botão
  borderColor?: string; // Cor da borda do botão (opcional)
  borderWidth?: number; // Largura da borda do botão (opcional)
}

export function ButtonP({title,onClick,color,textColor,borderColor = "transparent",borderWidth = 0,}: CustomButtonProps) {
  const containerButtonStyle = {
    backgroundColor: color,
    borderColor: borderColor,
    borderWidth: `${borderWidth}px`,
  };

  const titleStyle = {
    color: textColor, // Aplicar cor vinda das props
  };

  return (
    <div className={styles.container}>
      <button 
        className={styles.button}
        style={containerButtonStyle}
        onClick={onClick}
      >
        <span className={styles.titleButton} style={titleStyle}>
          {title}
        </span>
      </button>
    </div>
  );
}
