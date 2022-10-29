
import styles from './Cadastre.module.css'


function Cadastre() {
    return(
        <body>
            <h2 className={styles.titleCadastre} >Cadastro de usuário</h2>
            <div className={styles.form_wrapper}>
            <div className={styles.form_container}>

                <div className={styles.title_container}>
                
                </div>

                <div className={styles.row + ' ' + styles.clearfix}></div>


                    <div className={styles.input_field}> <span><i aria-hidden="true"></i></span>
                        <input type="email" name="email" placeholder="Email" required />
                    </div>

                    <div className={styles.input_field}> <span><i aria-hidden="true" className={styles.fa}></i></span>
                        <input type="password" name="password" placeholder="Senha" required />
                    </div>

                    <div className={styles.input_field}> <span><i aria-hidden="true" className={styles.fa}></i></span>
                        <input type="password" name="password" placeholder="Digite novamente sua senha" required />
                    </div>

                    <div className={styles.row + ' ' + styles.clearfix}>

                        <div className={styles.col_half}>
                        <div className={styles.input_field}> <span><i aria-hidden="true" className={styles.fa}></i></span>
                            <input type="text" name="name" placeholder="Nome" />
                        </div>
                        </div>

                        <div className={styles.col_half}>

                            <div className={styles.input_field}> <span><i aria-hidden="true" className={styles.fa}></i></span>
                                <input type="text" name="name" placeholder="Sobrenome" required />
                            </div>

                        </div>

                    </div>

                    <div className={styles.input_field + ' ' + styles.radio_option}>
                        <input type="radio" name="radiogroup1" id="rd1" />
                        <label for="rd1">Masculino</label>
                        <input type="radio" name="radiogroup1" id="rd2" />
                        <label for="rd2">Feminino</label>
                    </div>

                    <div className={styles.input_field + ' ' + styles.select_option + ' ' + styles.select_option_pais}>
                            <select> 
                            <option>Selecione seu país</option>
                            <option>Brasil</option>
                            <option>EUA</option>
                            <option>Reino Unido</option>
                            <option>Canadá</option>
                            <option>Máxico</option>
                            <option>Colômbia</option>
                            <option>Ecuador</option>
                            <option>Chile</option>
                            <option>Outro</option>
                            </select>
                            <div className={styles.select_arrow}></div>
                    </div>

                    <div className={styles.idade} />
                        <div className={styles.row + ' ' + styles.clearfix} />

                            <div className={""} />

                                <div><span><i aria-hidden="true"></i></span>
                                <p>Ano de Nascimento</p>
                                <input className={styles.age} type="date" name="date" placeholder="Digite sua idade" required />
                                </div>

                                <div>
                                <div className={styles.row + ' ' + styles.clearfix}>
                                <div className={""}>
                                <form>
                                    <div> <span><i aria-hidden="true" ></i></span>
                
                                    <input className={styles.telefone + ' ' + styles.input_field} type="tel" name="telefone" placeholder="Digite seu telefone" required />
                            </div>
                        
                        <div className={styles.input_field + ' ' + styles.checkbox_option}>
                            <input type="checkbox" id="cb1" />
                            <label for="cb1">Eu concordo com os termos e condições</label>
                        </div>
                        <div className={styles.input_field + ' ' + styles.checkbox_option}>
                            <input type="checkbox" id="cb2" />
                            <label for="cb2">Quero utilizar o processamento de meus dados para causas de marketing</label>
                        </div>
                    <input className={styles.button} type="submit" value="Registrar" />
                    </form>
                </div>
                </div>
            </div>
            </div>
            </div>
        </body>
    )
}

export default Cadastre