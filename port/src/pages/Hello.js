import React from 'react';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';

export default function Hello() {

    return (
        <div>
        <Image 
        src="/images/leftyletters.png"
        width={700}
        height={475}
        class={styles.leftys}
        />

         <p className={styles.splashtext}>ENTER</p>
        
            <Image 
            src="/images/bannerdistorted.jpg" 
            width={950}
            height={900}
            class={styles.image}
            
            /> 
         
      </div>
    )
}
