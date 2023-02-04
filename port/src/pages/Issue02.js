import React from 'react';
import styles from "@/styles/Home.module.css";
import Image from 'next/image';
import Link from 'next/link';

export default function Issue02() {
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
                <Image 
                src='/images/blue.jpg'
                class={styles.issue}
                height={600}
                width={850}
                alt="Issue-01-cover" />
        </div>
    )
}
