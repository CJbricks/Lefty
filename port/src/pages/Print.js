import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Issue01 from "/src/pages/Issue01.js";
import Issue02 from 'src/pages/Issue02.js';



export default function Print() {
    return (
        <>
            <Issue01 />
            <Issue02 />
            <Link href="/Directory" > <h4 class={styles.backbutton}>Back</h4></Link>
        </>
    )
}
