import {NavLink} from "react-router-dom";

import styles from './Header.module.scss'
import logo from './../../assets/logo.svg'
import {PrimaryButton} from "../UI/Buttons/Primary/PrimaryButton.jsx";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <NavLink to={'/'}>
                    <img className={styles.logo} src={String(logo)} alt="logo"/>
                </NavLink>


                <nav className={styles.nav}>
                    <NavLink to={'/marketplace'}>Marketplace</NavLink>
                    <NavLink to={'/top'}>Rankings</NavLink>
                    <NavLink to={'/connect'}>Connect a wallet</NavLink>
                    <PrimaryButton props={{text: 'Create'}}/>
                </nav>
            </div>
        </header>
    )
}
