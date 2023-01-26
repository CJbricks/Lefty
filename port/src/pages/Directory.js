import React from 'react';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Directory() {
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
        </>
    )
}