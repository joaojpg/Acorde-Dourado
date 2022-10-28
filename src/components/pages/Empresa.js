import styles from './Empresa.module.css'


function Empresa() {
    return(
        <div>
            <section className={styles.imagem}>
                <section className={styles.fundo}>
                    <h3 className={styles.boxTitle}>
                        Nossa Empresa
                    </h3>
                    <p className={styles.boxText}>
                        A Acorde Dourado nasceu em 1925 quando Joseph Anderson, aos 15 anos na época, se interessou pelos instrumentos musicais rústicos que existiam naquele tempo. Seu pai tinha uma loja de produtos caseiros localizada no centro de Campinas e Joseph sempre ajudava seu pai com as vendas. 
                    </p>
                    <p className={styles.boxText}>
                        Olhando pra isso, e tambem para seu amor pelos instrumentos musicais, ele tomou a iniciativa de abrir um negócio próprio no qual os principais produtos seriam instrumentos caseiros. 
                    </p>
                    <p className={styles.boxText}>
                        Desde então a empresa Acorde Dourado cresceu sem freios e hoje é uma das lojas mais consideradas no mercado de instrumentos musicais rusticos
                    </p>
                </section>                
            </section>
        </div>
    )
}

export default Empresa