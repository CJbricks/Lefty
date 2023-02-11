import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { useState } from 'react';
import Dropbox from '../../src/pages/Dropbox.js';


export default function Vogelisms() {

    const [drop, setDrop] = useState(true);

    

    return (
        <>
            <div class={styles.webx}onClick={() => { setDrop(!drop) }}>
                <Image
                src="/images/webprojects/screenvog.png"
                class={styles.box}
                width={550}
                height={350}
                alt="vogelisms-web-screenshot" />
            
                { drop === true  && 
                <Dropbox 
                langOne="React"
                langTwo="Javascript"
                langThree="HTML"
                langFour="CSS"
                langFive="Animate.CSS"
                /> }

            </div>
        </>
    )
}
