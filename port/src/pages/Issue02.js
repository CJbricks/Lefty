import React from 'react';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import coverPageBlue from '../../public/images/issues/blue.jpg';
import { useState } from 'react';
import nextPage from '../../public/images/issues/bluepagetwo.jpg';


export default function Issue02() {
    const pageArray = [coverPageBlue, nextPage]

    const [page, setPage] = useState(0);

    return (
        <div class={styles.printbox}>
             <p class={styles.text}>
                    Issue No. 02: "Blue"
                    <br />
                    25 Pages of Trac pad illustration
                    <br />
                    10 pages of Digital and Film photographs
                    <br />
                    Bound book soft cover
                    <br />
                    Images by Cody Christian 
                    <br />
                    <br />
                    <Link href="http://cjchristian.com" target="_blank"> Click here: Contact Artist for work.</Link>
                    <br />
                    <br />
                    Featured pieces in this issue:
                    <br />
                    ...Books
                    <br />
                    And so it goes
                    <br />
                    Nov York is my favorite writer
                    <br />
                    <br />
                    Prints and Book copies available in Bigcartel store
                    <br />
                    Limited to 50 printed paperback issues
                
                </p>
                <div onClick={()=>{ page === pageArray.length - 1 ? setPage(0) : setPage(page + 1) }}>
                    <Image 
                    src={pageArray[page]}
                    class={styles.issueprinted}
                    height={600}
                    width={850}
                    alt="Issue-02-cover" />
                </div>
        </div>
    )
}
