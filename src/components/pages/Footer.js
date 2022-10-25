import styles from '../pages/Footer.module.css'

function Footer() {

    return(
        <footer >
            <ul className={styles.rodape}>
                <li className={styles.definindoLi}>
                    <h3  className={styles.elementos} >Noticias</h3>
                    <ul className={styles.removeMargin} >
                        <li>Música</li>
                        <li>Instrumentos</li>
                        <li>Artistas</li>
                    </ul>
                </li>
                <li className={styles.definindoLi}>
                    <h3 className={styles.elementos}>Parceiros</h3>
                    <ul className={styles.removeMargin} >
                        <li>Timbres</li>
                        <li>Cordas V8</li>
                        <li>Pestana Sound</li>
                    </ul>
                </li>
                <li className={styles.definindoLi}> 
                    <h3 className={styles.elementos}>Tutoriais</h3>
                    <ul className={styles.removeMargin} >
                        <li>Acordes</li>
                        <li>Dedilhados</li>
                        <li>Ritmos</li>
                    </ul>
                </li>
            </ul>
            <p className={styles.paragrafo}>All Rights &#174; Reserved 2022 </p>
        </footer>
    )
}

export default Footer