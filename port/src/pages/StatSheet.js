import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { useState } from 'react';
import Dropbox from '../../src/pages/Dropbox.js';

export default function StatSheet() {

    const [display, setDisplay] = useState(true);

    return (
        
        <div class={styles.webx}onClick={() => { setDisplay(!display) }}>
               <Image
                src="/images/webprojects/screenstat.png"
                class={styles.box}
                width={550}
                height={350}
                alt="statsheet-web-screenshot" />
                
                { display && <Dropbox 
                langOne="Javascript"
                langTwo="HTML"
                langThree="CSS"
                langFour="Animate.CSS"
                langFive="Surge"
                /> }
        </div>
    )
}
