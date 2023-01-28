import React from 'react';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Foot from '/src/pages/Foot.js';
import Header from '/src/pages/Header.js'

export default function Directory() {

 
    return (
        <>
        <Header />
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
            <Link href="/Web">
                <h2 class={styles.displaytext}>WEB PROJECTS</h2>
                    <Image 
                        class={styles.box}
                        src="/images/ocguy.jpg"
                        width={350}
                        height={400}
                    />
            </Link>
            </div>

            <div class={styles.containers}>
                <Link href="/Print">
                <h2 class={styles.displaytext}>BRANDS & MERCHANDISING</h2>
                    <Image 
                        class={styles.box}
                        src="/images/rbcoffee.jpg"
                        width={350}
                        height={400}
                    />
                </Link>
            </div>
            <div class={styles.containers}>
            <Link href="/Digital">
                <h2 class={styles.displaytext}>INSTALLATION</h2>
                    <Image 
                        class={styles.box}
                        src="/images/green.jpg"
                        width={350}
                        height={400}
                    />
            </Link>
            </div>
            <div class={styles.containers}>
            <Link href="/Digital">
                <h2 class={styles.displaytext}>PHOTOGRAPHY</h2>
                    <Image 
                        class={styles.box}
                        src="/images/nye.jpg"
                        width={350}
                        height={400}
                    />
            </Link>
            </div>

            <Foot />   
        </>
    )
}