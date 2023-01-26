import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Digital() {
    return (
        
             <div class={styles.splashtext}>
                <h3>Oooops nothing here.</h3>
                <br />
               <Link href="/Directory"> <h4>Back</h4></Link>
            </div>
        
    )
}
