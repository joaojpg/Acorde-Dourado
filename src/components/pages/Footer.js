import styles from '../pages/Footer.module.css'

function Footer() {

    return(
        <footer >
            <ul className={styles.rodape}>
                <li className={styles.definindoLi}>
                    <h3  className={styles.elementos} >Noticias</h3>
                    <ul className={styles.removeMargin} >
                        <li><a href="#1">Música</a></li>
                        <li><a href="#2">Instrumentos</a></li>
                        <li><a href="#3">Artistas</a></li>
                    </ul>
                </li>
                <li className={styles.definindoLi}>
                    <h3 className={styles.elementos}>Parceiros</h3>
                    <ul className={styles.removeMargin} >
                        <li><a href="#4">Timbres</a></li>
                        <li><a href="#5">Cordas V8</a></li>
                        <li><a href="#6">Pestana Sound</a></li>
                    </ul>
                </li>
                <li className={styles.definindoLi}> 
                    <h3 className={styles.elementos}>Tutoriais</h3>
                    <ul className={styles.removeMargin} >
                        <li><a href="#7">Acordes</a></li>
                        <li><a href="#8">Dedilhados</a></li>
                        <li><a href="#9">Ritmos</a></li>
                    </ul>
                </li>
            </ul>
            <p className={styles.paragrafo}>All Rights &#174; Reserved 2022 </p>
        </footer>
    )
}

export default Footer