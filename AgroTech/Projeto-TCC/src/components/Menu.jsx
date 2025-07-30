import styles from "./Menu.module.css";

export default function Menu() {
  return (
   <div className={styles.container}>
    <div className={styles.conteudo}>
      <div className={styles.conteudo}>
        <div className={styles.c1}>
          Categorias
          <div className={styles.drop}>
            <div>
              a
            </div>
            <div>
              a
            </div>
          </div>
        </div>
        <div className={styles.c2}>
            Contato
        </div>
        <div className={styles.c3}>
        Vender
        </div>
      </div>
    </div>
   </div>
  );
}
