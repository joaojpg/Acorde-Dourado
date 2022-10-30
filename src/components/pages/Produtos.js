import styles from './Produtos.module.css'
import img1 from "./assets/Violao.png"
import img2 from "./assets/violino.png"
import img3 from "./assets/organ.png"

function Produtos(){

    return(
        <div className={styles.cards}>
        <ul className={styles.centralizarProd}>
            <li className={styles.li_card1}>
                <div className={styles.container1}>
                    <div className={styles.card1}>
                        <div className={styles.imagem1}>
                            <img src={img1} className={styles.Violao} alt="Violao.png" />
                        </div>
                        <div className={styles.texto1}>
                            <h2 className={styles.text_title1}>Violão 1935</h2>
                            <p className={styles.desc1}>O Violão modelo 1935 foi produzido de forma totalmente artesanal, buscando manter as caracteristicas do ano que foi modelado e desenvolvido.</p>
                        </div>
                        <div className={styles.button1}>
                        <button type="button" className={styles.btn1  + ' ' + styles.ajusteBtn}>Comprar</button>
                        </div>
                    </div>
                </div>
            </li>
            <li className={styles.li_card1}>
                <div className={styles.container1}>
                    <div className={styles.card1}>
                        <div className={styles.imagem1}>
                            <img src={img2} className={styles.Violao} alt="Violao" />
                        </div>
                        <div className={styles.texto1}>
                            <h2 className={styles.text_title1}>Violino 1910</h2>
                            <p className={styles.desc1}>Feito de madeira bahiana, das árvores da região, o violino modelo 1910 traz em sua essência o som característico da época, trazendo assim um som único e uniforme para os ouvidos de quem aprecia o bom e velho som rústico do violino.</p>
                        </div>
                        <div className={styles.button1}>
                        <button type="button" className={styles.btn1}>Comprar</button>
                        </div>
                    </div>
                </div>
            </li>
            <li className={styles.li_card1}>
                <div className={styles.container1}>
                    <div className={styles.card1}>
                        <div className={styles.imagem1}>
                            <img src={img3} className={styles.Violao} alt="Violao.png" />
                        </div>
                        <div className={styles.texto1}>
                            <h2 className={styles.text_title1}>Orgão 1888</h2>
                            <p className={styles.desc1}>Neste orgão, todas as madeiras foram trazidas do outro lado do mapa, buscando mostrar em sua essência a característica marcante de seu som. Produzido em 1888, é o orgão mais procurado no mundo atualmente.</p>
                        </div>
                        <div className={styles.button1}>
                        <button type="button" className={styles.btn1}>Comprar</button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    )


}

export default Produtos