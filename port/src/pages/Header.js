import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import PageHeader from './PageHeader.js'


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

            <PageHeader />
        </>
    )
}
