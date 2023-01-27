import React from 'react';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Foot from '/src/pages/Foot.js';

export default function Directory() {

    const igHandle = 
    <a href="https://www.instagram.com/oreo.blizman/" target="_blank" rel="noopener noreferrer">
      <Image 
      className= "icon-ig"
      src='/images/iglogo.png'
      alt="icon-ig"
      height={35}
      width={35}
      />
    </a>



const gitHandle = 
  <a href="https://www.github.com/CJbricks" target="_blank" rel="noopener noreferrer">
    <Image
    className= "git-icon"
    src="/images/gitlogo.png"
    alt="git-icon"
    height={35}
    width={35}
    />
  </a>;

    return (
        <>
            <div class={styles.containers}>
                <Link href="/Print">
                <h2 class={styles.displaytext}>PRINTED MEDIA</h2>
                    <Image 
                        class={styles.box}
                        src="/images/cop.jpg"
                        width={350}
                        height={400}
                    />
                </Link>
            </div>
            <div class={styles.containers}>
            <Link href="/Digital">
                <h2 class={styles.displaytext}>DIGITAL DESIGN</h2>
                    <Image 
                        class={styles.box}
                        src="/images/digitalsplash.jpg"
                        width={350}
                        height={400}
                    />
            </Link>
            </div>
            <div class={styles.containers}>
            <Link href="/Digital">
                <h2 class={styles.displaytext}>WEB PROJECTS</h2>
                    <Image 
                        class={styles.box}
                        src="/images/ocguy.jpg"
                        width={350}
                        height={400}
                    />
            </Link>
            </div>
                <Foot
                ighandle={igHandle}
                github={gitHandle}
                />
        </>
    )
}