import React from 'react';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import logo from '../../../public/images/Branding/sleeplogo.jpg';
import cop from '../../../public/images/Branding/sscop.jpg';
import shirt from '../../../public/images/Branding/bluepagetwo.jpg';

export default function Sleep() {

    const imageArraySleep = [logo, shirt, cop]

    const [count, setCount] = useState(0);

    return (
        
            <div class={styles.brandbox}>
                <p class={styles.text}>
                    Super Sleep
                    <br />
                    <br />
                    Super Sleep is a hardcore/shoegaze band from Denver Co.
                    <br />
                    Super Sleep creates a unique cacophany of sound based in their Hardcore roots.
                    <br />
                    Unafaraid to explore the depth of their ambient, but aggressive sound 
                    SuperSleep aims to push their sound further by combinging their unique
                    sound with a strong aesthetic. 
                    <br />
                    <br />
                    Their influences include:
                    <br />
                    <br />
                    MBV, Catherine Wheel, slowdive, superheaven, Nothing, Quicksand,
                    <br />
                    Guitar music as whole, noise, feedback, and pure sweet sweet meoldy played over the sound of animals fighting.
                    <br />
                    <br />
                    Lefty works with Super Sleep to develop their merchandise and branding.
                    <br />
                    All images displayed by Super Sleep are property of SeeJayInc LLC.
                    <br />
                    <br />
                    <Link href="/Directory">Visit Super Sleep's site HERE.</Link>
                </p>
               
                <div onClick={()=>{count === imageArraySleep.length - 1 ? setCount(0) : setCount(count + 1)}}>
                    <Image 
                    src={imageArraySleep[count]}
                    class={styles.issue}
                    height={600}
                    width={500}
                    alt="Floral-Green-Branding" />
                </div>
                
            </div>
        
    )
}
