import styles from './HeroSection.module.scss'
import {PrimaryButton} from "../../../components/UI/Buttons/Primary/PrimaryButton.jsx";

import spaceWalking from './../../../assets/SpaceWalking.jpg'

export const HeroSection = () => {
    return (
        <div className={styles.heroSection}>
            <div className={styles.heroSection__text}>
                <h1>
                    Discover digital art & Collect NFTs
                </h1>
                <p>
                    NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT
                    artists.
                </p>

                <PrimaryButton props={{text: 'Explore Now'}}/>

                <div className={styles.heroSection__stats}>
                    <div>
                        <span>240k+</span>
                        Total Sale
                    </div>

                    <div>
                        <span>100k+</span>
                        Auctions
                    </div>

                    <div>
                        <span>240k+</span>
                        Artists
                    </div>
                </div>
            </div>

            <div className={styles.heroSection__highlightedNFT}>
                <img src={String(spaceWalking)} alt=""/>

                <h5>Space Walking</h5>

                {/*Добавить аватарку*/}
            </div>
        </div>
    )
}
