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
                Introducing a unique and thriving screen printing merchandise company that specializes in producing high-quality, hand-made products for small local projects and DIY bands in the hardcore genre. This online-based company operates between Denver, CO, and Austin, TX, offering a range of screen printing services that cater to the needs of local communities.
                <br />
                <br />
                The company was founded by two long-time friends who share a passion for screen printing and the hardcore music scene. With a deep understanding of the industry's needs, they set out to create a company that could provide high-quality, customized merchandise for local projects and bands.
                <br />
                <br />
                Using the finest quality materials and techniques, the team at this screen printing merchandise company creates unique, hand-made products that stand out from the crowd. They specialize in producing t-shirts, sweatshirts, and accessories with custom designs, logos, and graphics that perfectly match their clients' needs and vision.
                <br />
                <br />
                In addition to offering screen printing services, this company also offers consultation and design services to help clients bring their ideas to life. With their expertise and experience, they can offer guidance on design concepts, color schemes, and production techniques to ensure that the end result is exactly what the client is looking for.
                <br />
                <br />
                The team is passionate about the hardcore music scene and is dedicated to supporting local bands and small local projects. They take pride in their ability to provide affordable and high-quality merchandise to these communities, helping them to spread their message and promote their causes.
                <br />
                <br />
                Whether you're a local project, a DIY band, or just looking for unique and high-quality screen printed merchandise, this company welcomes you to explore their services and join their community. With their dedication to quality and passion for the industry, they are committed to providing customers with an exceptional experience from start to finish.
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
                    alt="Super-Sleep-Branding" />
                    
                </div>
                
            </div>
        
    )
}
