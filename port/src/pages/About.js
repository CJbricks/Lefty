import React from 'react';
import Link from 'next/link';
import PageHeader from '../../src/pages/PageHeader.js';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';


export default function About() {
    return (
       <>
       <PageHeader />
       <Link href="/Directory" > <h4 class={styles.backbutton}>Back</h4></Link>
       </>
    )
}
