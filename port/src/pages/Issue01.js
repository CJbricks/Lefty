import React from 'react'
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { useState } from 'react';
import nextPage from '../../public/images/nextpage.jpg';
import leftyPage from '../../public/images/lefty.jpg';

export default function Issue01() {

    const imageArray = [leftyPage, nextPage]

    const [count, setCount] = useState(0)
  

    return (
        <div class={styles.printbox}>
                <p class={styles.text}>
                    Issue No. 01: "Lefty"
                    <br />
                    20 Pages of Trac pad illustration
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
                    Controversial Youtube Algo
                    <br />
                    Digging in the trash
                    <br />
                    XXXX
                    <br />
                    Wave Racer
                    <br />
                    What books are for
                    <br />
                    <br />
                    <br />
                    Available in Bigcartel store
                    <br />
                    Limited to 50 printed paperback issues
                
                </p>
                <div onClick={()=>{ count === imageArray.length - 1 ? setCount(0) : setCount(count + 1)}}>
                    <Image 
                    src={imageArray[count]}
                    class={styles.issue}
                    height={600}
                    width={850}
                    alt="Issue-01-cover" />
                </div>
                
            </div>
    )
}
