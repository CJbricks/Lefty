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
                    <h2 class={styles.displaytext}>PRINTED MEDIA</h2>
                        <Image 
                            class={styles.box}
                            src="/images/DirImages/cop.jpg"
                            width={350}
                            height={400}
                            alt="Printed-Media-Icon"
                        />
                    </Link>
                </div>
                <div class={styles.containers}>
                <Link href="/Digital">
                    <h2 class={styles.displaytext}>DIGITAL DESIGN</h2>
                        <Image 
                            class={styles.box}
                            src="/images/DirImages/digitalsplash.jpg"
                            width={350}
                            height={400}
                            alt="digital-Media-Icon"
                        />
                </Link>
                </div>
                <div class={styles.containers}>
                <Link href="/Web">
                    <h2 class={styles.displaytext}>RECENT WEB PROJECTS</h2>
                        <Image 
                            class={styles.box}
                            src="/images/digitalfold/crowns copy 2.jpg"
                            width={350}
                            height={400}
                            alt="Web-Media-Icon"
                        />
                </Link>
                </div>

                <div class={styles.containers}>
                    <Link href="/Branding/Brand">
                    <h2 class={styles.displaytext}>BRANDS & MERCHANDISING</h2>
                        <Image 
                            class={styles.box}
                            src="/images/Branding/rbcoffee.jpg"
                            width={350}
                            height={400}
                            alt="Branded-Media-Icon"
                        />
                    </Link>
                </div>
                <div class={styles.containers}>
                <Link href="/Digital">
                    <h2 class={styles.displaytext}>INSTALLATION</h2>
                        <Image 
                            class={styles.box}
                            src="/images/DirImages/nye.jpg"
                            width={350}
                            height={400}
                            alt="Installation-Media-Icon"
                        />
                </Link>
                </div>
                <div class={styles.containers}>
                <Link href="/Digital">
                    <h2 class={styles.displaytext}>AI GENERATED IMAGES</h2>
                        <Image 
                            class={styles.box}
                            src="/images/DirImages/ocguy.jpg"
                            width={350}
                            height={400}
                            alt="AI-Media-Icon"
                        />
                </Link>
                </div>
            </div>
            

            <Foot />   
        </>
    )
}