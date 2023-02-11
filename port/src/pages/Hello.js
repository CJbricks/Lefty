import React from 'react';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


export default function Hello() {

   
    const [toggle, setToggle] = useState(true)

    return (
        <div class={styles.banner}>
        
        <Image 
        src="/images/leftycolors.png"
        width={500}
        height={275}
        class={styles.leftys}
        />

        <Link href="/Directory"><p className={styles.splashtext}>ENTER</p></Link>
        <div onClick={() => {setToggle(!toggle)}}>
            { toggle ? 
            <Image 
            src='/images/newsplash.jpg'
            width={950}
            height={900}
            class={styles.image}
            
            /> : 
             <Image
             src="/images/splashswitch.jpg"
             width={950}
             height={900}
             class={styles.image} />
        
            }
        </div>
           
      </div>
    )
}
