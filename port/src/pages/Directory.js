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
            <div class={styles.walls}>
                <div class={styles.containers}>
                    <Link href="/Print">
                    <h2 class={styles.displaytext}>PRINT</h2>
                     <div class={styles.scalebox}>
                            <Image 
                                class={styles.box}
                                src="/images/DirImages/cop.jpg"
                                width={450}
                                height={500}
                                alt="Printed-Media-Icon"
                            />
                        </div>
                    </Link>
                </div>
                <div class={styles.containers}>
                <Link href="/Digital">
                    <h2 class={styles.displaytext}>DIGITAL</h2>
                        <div class={styles.scalebox}>
                            <Image 
                                class={styles.box}
                                src="/images/DirImages/digitalsplash.jpg"
                                width={450}
                                height={500}
                                alt="digital-Media-Icon"
                            />
                        </div>
                </Link>
                </div>
                <div class={styles.containers}>
                <Link href="/Web">
                    <h2 class={styles.displaytext}>WEB PROJECTS</h2>
                            <div class={styles.scalebox}>
                                <Image 
                                    class={styles.box}
                                    src="/images/digitalfold/crowns copy 2.jpg"
                                    width={450}
                                    height={500}
                                    alt="Web-Media-Icon"
                                />
                            </div>
                </Link>
                </div>

                <div class={styles.containers}>
                    <Link href="/Branding/Brand">
                    <h2 class={styles.displaytext}>BRAND DESIGN</h2>
                        <Image 
                            class={styles.box}
                            src="/images/Branding/rbcoffee.jpg"
                            width={450}
                            height={500}
                            alt="Branded-Media-Icon"
                        />
                    </Link>
                </div>
                <div class={styles.containers}>
                <Link href="/Digital">
                    <h2 class={styles.displaytext}>FINE ART</h2>
                        <Image 
                            class={styles.box}
                            src="/images/DirImages/nye.jpg"
                            width={450}
                            height={500}
                            alt="Installation-Media-Icon"
                        />
                </Link>
                </div>
               
            </div>
            

            <Foot />   
        </>
    )
}