import React from 'react';
import styles from '@/styles/Home.module.css';


export default function Dropbox(props) {
    return (
        <div class={styles.textbox}>
                    <p class={styles.droptext}>{props.langOne}</p>
                    <p class={styles.droptext}>{props.langTwo}</p>
                    <p class={styles.droptext}>{props.langThree}</p>
                    <p class={styles.droptext}>{props.langFour}</p>
                    <p class={styles.droptext}>{props.langFive}</p> 
        </div>
    )
}
