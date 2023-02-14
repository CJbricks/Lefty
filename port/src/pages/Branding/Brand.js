import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import BrandStatement from '../../pages/Branding/BrandStatement.js';
import PageHeader from '../../../src/pages/PageHeader.js';
import Floral from '../../../src/pages/Branding/Floral.js';
import Sleep from '../../../src/pages/Branding/Sleep.js';

export default function Brand() {
    return (
        <>
        <PageHeader />
            <BrandStatement />
            <Floral />
            <Sleep />
        <Link href="/Directory"><h4 class={styles.backbutton}>BACK</h4></Link>
        </>
    )
}
