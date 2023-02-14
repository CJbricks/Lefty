import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Vogelisms from '/src/pages/Vogelisms.js';
import StatSheet from '/src/pages/StatSheet.js';
import PageHeader from '/src/pages/PageHeader.js';

export default function Web() {
    return (
        <div>
        <PageHeader />
           <Vogelisms />
           <StatSheet />
           <Link href="/Directory"><h4 class={styles.backbutton}>BACK</h4></Link>
        </div>
    )
}
