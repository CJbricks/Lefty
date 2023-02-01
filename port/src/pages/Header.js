import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';


export default function Header() {
    return (
        <>
            <div class={styles.header}>
                <Image 
                src='/images/dirghost.png'
                width={950}
                height={900} 
                class={styles.headimage}
                />
            </div>
            <div class={styles.block}>
            <Link href="https://bigcartel.com" target="_blank"><h4 class={styles.headstore}>STORE</h4></Link>
            <Link href="https://bigcartel.com" target="_blank"><h4 class={styles.headstore}>CONTACT</h4></Link>
            </div>
        </>
    )
}
