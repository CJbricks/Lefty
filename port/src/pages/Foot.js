import React from 'react'
import styles from '@/styles/Home.module.css';
import Image from 'next/image';



export default function Foot() {
   
    return (
        <div class={styles.footbox}> 
               <a href="https://www.instagram.com/oreo.blizman/" target="_blank" rel="noopener noreferrer">
                    <Image 
                    class={styles.iconig}
                    src='/images/iglogo.png'
                    alt="icon-ig"
                    height={35}
                    width={35}
                    />
                </a>
                <a href="https://www.github.com/CJbricks" target="_blank" rel="noopener noreferrer">
                    <Image
                    class= {styles.giticon}
                    src="/images/gitlogo.png"
                    alt="git-icon"
                    height={35}
                    width={35}
                    />
                </a>
        </div>
    )
}