import viola from '../pages/violao.jpg'
import styles from './Home.module.css'

function Home() {
    return(
        <div>
            <section className={styles.imagem}>
                <section className={styles.fundo}>
                    <div className={styles.tamanho}>
                        <h3 className={styles.titleHome}>
                            Qualidade e História
                        </h3>
                        <p>
                            Nossos instrumentos são produzidos com carinho e dedicação, buscando trazer toda a nossa história como bagagem mas mantendo a modernidade das novas tecnologias
                        </p>
                    </div>
                </section>                
            </section>
        </div>
    )
}

export default Home