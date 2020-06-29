import React, { FC } from 'react';
import styles from '../css/rune-container.module.css'

const RuneContainer: FC = ({children}) => (
    <div className={styles.runeContainer}>
        {children}
    </div>
)
export default RuneContainer;