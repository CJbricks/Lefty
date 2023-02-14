import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function PageHeader() {
    return (
        <div class={styles.block}>
                <Link href="/About"><h4 class={styles.headend}>ABOUT</h4></Link>
                <Link href="/About"><h4 class={styles.headstore}>CONTACT</h4></Link>
                <Link href="https://bigcartel.com" target="_blank"><h4 class={styles.headstore}>STORE</h4></Link>
        </div>
    )
}
