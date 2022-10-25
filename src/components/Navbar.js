import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar(){
    return(
    <>
      <ul className={styles.list}>
          <li className={styles.item}>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/">Home</Link  >
          </li>
          <li className={styles.item}>
            <Link style={{ textDecoration: 'none', color: 'black' }}  to="/produtos">Produtos</Link>
          </li>
          <li className={styles.item}>
            <Link style={{ textDecoration: 'none', color: 'black' }}  to="/empresa">Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link style={{ textDecoration: 'none', color: 'black' }}  to="/contato">Contato</Link>
          </li>
          <li className={styles.item}>
            <Link style={{ textDecoration: 'none', color: 'black' }}  to="/cadastre">Cadastre-se</Link>
          </li>
      </ul>
    </>
    )

}

export default Navbar