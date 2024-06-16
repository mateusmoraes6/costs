import {Link} from 'react-router-dom';

import Container from './Container';

import styles from './Navbar.module.css';
import logo from '../../img/costs_logo.png'

export default function Navbar() {
    return (
        <nav>
            <div className={styles.navbar}>
                <Container>
                    <Link>
                        <img src={logo} alt="Costs" />
                    </Link>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/projects">Projetos</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/company">Empresa</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/contact">Contato</Link>
                        </li>
                    </ul>
                </Container>
            </div>
        </nav>
    );
}