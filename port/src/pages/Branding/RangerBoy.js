import React from 'react';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import rangerLogo from '../../../public/images/Branding/rb2.jpg';
import rangerSecondLogo from '../../../public/images/Branding/rb1.jpg';
import rbShirt from '../../../public/images/Branding/temprb.jpg';

export default function RangerBoy() {

    const imageArrRanger = [rangerLogo, rangerSecondLogo, rbShirt];

    const [ count, setCount] = useState(0);

    return (
        <div class={styles.brandbox}>
            <p class={styles.text}>
            Ranger Boy Coffee is a locally owned and operated third wave coffee shop located in the heart of Denver, Colorado. Founded in honor of a beloved bird dog named Ranger, the cafe is dedicated to providing exceptional coffee and creating a community-oriented gathering space for coffee enthusiasts.
            <br />
            The owners, two longtime friends and coffee aficionados, began their journey in the coffee industry as baristas, and have since gained extensive knowledge and expertise in specialty coffee. With their passion for quality coffee, they decided to open Ranger Boy Coffee, with the mission to offer customers a unique coffee experience.
            <br />
            <br />
            Ranger Boy Coffee sources their coffee beans from various regions across the world and roast them in-house to perfection, creating a range of blends and single-origin coffees that are full of flavor and aroma. Their brewing methods are carefully crafted to ensure that each cup is brewed to perfection, with options including pour-over, espresso, and cold brew.
            <br />
            <br />
            The cafe is designed with a rustic and cozy atmosphere, featuring natural wood accents, handcrafted furniture, and custom artwork by local artists. The space also includes a small retail area, where customers can purchase freshly roasted coffee beans, coffee-making equipment, and merchandise.
            <br />
            <br />
            In addition to serving delicious coffee, Ranger Boy Coffee is committed to giving back to the community. They partner with local non-profit organizations to donate a portion of their profits and participate in community events to help support local causes.
            <br />
            <br />
            Whether you're a coffee connoisseur or just looking for a cozy spot to enjoy a cup of joe, Ranger Boy Coffee welcomes you to come and experience their passion for coffee and community.
            <br />
            <br />
            Visit Ranger Boy Coffee's site <Link href="/Directory">HERE</Link>
            </p>
            
            <div onClick={()=>{count === imageArrRanger.length - 1 ? setCount(0) : setCount(count + 1)}}>
                    <Image 
                    src={imageArrRanger[count]}
                    class={styles.issue}
                    height={600}
                    width={500}
                    alt="Ranger-Boy-Coffee-Branding" />
                    
            </div>
        </div>
    )
}
