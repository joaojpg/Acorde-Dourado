import styles from './Produtos.module.css'
import img1 from './v1.jpg'
import img2 from './v2.jpg'
import img3 from './v3.jpg'

function Produtos(){

    return(
        <div>
            <h1 className={styles.titlePage}>Produtos</h1>
            <ul className={styles.Prod}>
                <li className={styles.boxProd}>
                    <div className={styles.title}>
                        <h1  className={styles.titleInst}>Banjo 1935</h1>
                    </div>
                    <div>
                        <img className={styles.imgSize} src={img1}/>
                    </div>
                    <div>
                        <h3 className={styles.spacePrice}>R$3.000</h3>
                    </div>
                    <div>
                        <button  className={styles.buy}><a href="">Comprar</a></button>
                    </div>
                </li>
                <li className={styles.boxProd}>
                    <div className={styles.title}>
                        <h1 className={styles.titleInst}>Violino 1986</h1>
                    </div>
                    <div>
                        <img className={styles.imgSize} src={img2}/>
                    </div>
                    <div>
                        <h3 className={styles.spacePrice}>R$6.000</h3>
                    </div>
                    <div>
                        <button  className={styles.buy}><a href="">Comprar</a></button>
                    </div>
                </li>
                <li className={styles.boxProd}>
                    <div className={styles.title}>
                        <h1  className={styles.titleInst}>Orgão 1850</h1>
                    </div>
                    <div>
                        <img className={styles.imgSize} src={img3}/>
                    </div>
                    <div>
                        <h3 className={styles.spacePrice}>R$15.000</h3>
                    </div>
                        <div>
                            <button  className={styles.buy}><a href="">Comprar</a></button>
                        </div>
                </li>
            </ul>
        </div>
    )


}

export default Produtos