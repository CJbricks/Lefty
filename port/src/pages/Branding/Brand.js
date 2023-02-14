import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import BrandStatement from '../../pages/Branding/BrandStatement.js';
import PageHeader from '../../../src/pages/PageHeader.js';
import Floral from '../../../src/pages/Branding/Floral.js';
import Sleep from '../../../src/pages/Branding/Sleep.js';
import RangerBoy from '../../../src/pages/Branding/RangerBoy.js';

export default function Brand() {
    return (
        <>
        <PageHeader />
            <BrandStatement />
            <Floral />
            <Sleep />
            <RangerBoy />
        <Link href="/Directory"><h4 class={styles.backbutton}>BACK</h4></Link>
        </>
    )
}
