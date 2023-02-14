import React from 'react';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import floralLogo from '../../../public/images/Branding/fglogo.jpg';
import plantWall from '../../../public/images/Branding/plantwall.jpg';

export default function Floral() {

    const imageArrayFloral = [plantWall, floralLogo ];
    const [count, setCount] = useState(1);

    return (
        <div class={styles.brandbox}>
                <p class={styles.text}>
                    Floral Green Plant Outfitters
                    <br />
                    <br />
                    Floral Green plant outiftters and plant care is a mobile plant 
                    outfitter and plant care company from Austin Tx. 
                    <br />
                    Floral Green will help design and deliver a space full of rich
                    green foliage to outfit your space!
                    <br />
                    From offices, coffee shops, and lobby installations let Floral Green 
                    help you fit your space to your needs by assessing your light availability and advising 
                    on which plants would thrive best in your space.
                    <br />
                    <br />
                    Need help keeping your current family of plants thriving?
                    <br />
                    Floral Green will send our trained group of passionate technicians out
                    to help trouble shoot your plant care as well as care for your plants. 
                    Whether on vacation or in need of a regularly scheduled maintenence Floral Green can help. 
                    <br />
                    <br />
                    <Link href="/Directory">Visit Floral Green's site HERE.</Link>
                </p>
               
                <div>
                    <Image 
                    src={imageArrayFloral[count]}
                    class={styles.issue}
                    height={600}
                    width={500}
                    alt="Floral-Green-Branding" />
                </div>
                
            </div>
    )
}
