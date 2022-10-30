import styles from './Contato.module.css'


function Contato() {
    return(
        <div>
            <h1 className={styles.titleContato}>Contato</h1>
            <div className={styles.centerBox}>
                <ul className={styles.boxContatos}>
                    <li className={styles.contato1}>
                        Rua: Av. Rojão de Itapu, 732 
                        <br/>
                        Bairro: Jardim Bela Vista
                        <br/>
                        Cidade: Campinas - SP
                        <br/>
                        CEP: 13020-431
                        <br/>
                        Telefone: (19) 3272-1111
                    </li>
                    <li className={styles.contato2}>
                        Rua: Av. Tarciso Rosa Tibola, 52
                        <br/>
                        Bairro: Tiradentes 
                        <br/>
                        Cidade: Paulínia - SP
                        <br/>
                        CEP: 12052-333
                        <br/>
                        Telefone: (19) 3356-6742
                    </li>
                </ul>
            </div>
        </div>
        
    )
}

export default Contato