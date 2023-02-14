import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';


export default function BrandStatement() {
    return (
        <div>
             <div class={styles.printboxcover}>
                <p class={styles.text}>
                    Custom Branding On Demand
                    <br />
                    <br />

                    Lefty Design aims to bring quality hand crafted merchandising and design to 
                    local companies looking for a creative direction. Our team of artists will work to understand
                    your branding needs no matter the creative assets you have or have not already acquired.
                    <br />
                    Our Merchandising team can support the acquisitiona and ideation of design from scratch to physical product, work with a 
                    previous design or assest, and even collabrate with other artists and designers to achieve your vision. 

                    <br />
                    <br />
                    As a digital first platform we prioritize a search engine optimized web prescence with all our account and clients. 
                    We will take your idea from just words and images in a deck to a fully deployed website along with physical merchandising and an 
                    entire line of aesthetic assets to work with.

                    <br />
                    <br />
                    Clean - Functional - Original
                    <br />
                    <br />
                    This is how to stand out in a saturated market. By producing goods and shipping an original style with unique messaging.
                    <br />
                    We produce everything from designs, merchandise, websites, decals, promotional printing materials, etc.
                   
                </p>
                <div class={styles.doglogo}>
                    <Image 
                    src='/images/Branding/van.jpg'
                    class={styles.doglogo}
                    height={450}
                    width={670}
                    alt="Issue-01-cover" />
                </div>
                
            </div>
        </div>
    )
}
