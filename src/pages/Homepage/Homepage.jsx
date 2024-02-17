import styles from './Homepage.module.scss'
import {HeroSection} from "./HeroSection/HeroSection.jsx";

export const Homepage = () => {
    return (
        <>
            <div className={styles.cont}>
                <HeroSection/>
            </div>
        </>
    )
}
