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
                Floral Green Plant Outfitters is an Austin-based plant delivery and care company that is dedicated to helping people create beautiful spaces with greenery. Founded with a DIY ethos in mind, the company strives to make it easy for anyone to bring life and beauty into their home or workspace.
                <br />
                <br />
                At Floral Green Plant Outfitters, the team is passionate about providing customers with high-quality plants that are easy to care for and look stunning. Their plant selection includes a range of popular and unique varieties, including the ever-popular philodendrons, marenthas, and calatheas.
                <br />
                <br />
                The company understands that not everyone has a green thumb or the time to care for plants, which is why they offer plant delivery and maintenance services. With their plant delivery service, customers can choose from a variety of plants and have them delivered directly to their doorstep, ready to display in their home or office. The maintenance service includes regular watering, pruning, and fertilization to keep plants healthy and thriving.
                <br />
                <br />
                Floral Green Plant Outfitters is committed to sustainability and eco-friendliness, using only natural and organic products for their plants and packaging. They also strive to minimize waste and use recycled materials whenever possible.
                <br />  
                In addition to providing plant delivery and care services, the company also offers workshops and classes for those who want to learn more about plants and plant care. These events are designed to be informative, fun, and interactive, and are led by experienced and knowledgeable plant experts.
                <br />
                <br />
                Whether you're a seasoned plant enthusiast or just starting out, Floral Green Plant Outfitters welcomes you to explore their collection of beautiful plants and discover the joy of greenery in your life.

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
