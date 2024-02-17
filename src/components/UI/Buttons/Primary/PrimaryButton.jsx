import styles from './PrimaryButton.module.scss'

import rocketIcon from './../RocketLaunchFilled.svg'

export const PrimaryButton = ({props}) => {
    return (
        <button className={styles.primary}>
            <img src={String(rocketIcon)} alt=""/>
            {props.text}
        </button>
    )
}
