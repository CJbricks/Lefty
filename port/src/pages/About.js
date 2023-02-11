import React from 'react';
import Link from 'next/link';
import PageHeader from '../../src/pages/PageHeader.js';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';


export default function About() {
    return (
       <>
       <PageHeader />
       <div class={styles.aboutboxes}>

        <div class={styles.aboutpage}>
            <h2>Core Values</h2>
            <br />
            <p>Our goal is to create quiality technical solutions to 
                <br />
                problems encountered by small business' and artists from our community for a realistic and fair price.
                <br />
                <br />
                Our mission is to provide products to our customers based around three core pillars:
                <br />
                <br />
                Honesty - 
                Skill - 
                Community

            </p>
            <br />
         </div>
        <div class={styles.aboutpage}>
            <h2>Our Story</h2>
            <br />
            <p>
            Lefty Design is a web design company based in Austin, Texas.
            <br />
            <br />
             Our team of experienced designers and developers is dedicated to delivering top-quality websites that help businesses achieve their online goals.
             <br />
              We believe that a well-designed website is more than just a pretty facade;
            <br />
            your website should be a powerful tool that helps you connect with your customers, 
              <br />
              build your brand, and grow your business.
              <br />
              <br />
               This is why we use a collaborative approach to design, working closely with our clients to understand their unique needs and create scalable custom solutions that deliver results.
              <br />
               Whether you need a simple brochure site or a complex e-commerce platform, Lefty Design has the skills and expertise to make it happen. Let us help you bring your vision to life online.
            </p>
            <br />
        </div>

        <div class={styles.aboutpage}>
            <h2>Contact</h2>
            <br />
            <Link href="http://github.com/CJbricks" target="_blank"><p>Github</p></Link>
            <br />
            <p>Email us for a quote or to request a style sheet breakdown
                <br />
                
                CJ.Christian.web@gmail.com
                <br />
                <br />
                Instagram: oreo.blizman
                <br />
                Twitter: @elonhuskyyy
                <br />
                <br />
                (See our contact page for quote form.)

            </p>
       </div>
       </div>
       <div class={styles.testcontainer}>
       <div class={styles.testimonial}>
            <p>"Lefty Web Design truly exceeded my expectations!
                <br />
                Their team of developers brought my website vision to life with their exceptional design skills and attention to detail.
                <br />
                The process was seamless and their responsiveness made the experience even more enjoyable. Not only does my website look stunning, but it also functions flawlessly and has helped drive more traffic to my business.
                <br />
                I highly recommend Lefty Web Design to anyone in need of a top-notch website that not only looks good, but also delivers results. 
                Thank you for all your hard work!"
                <br />
                <br />
                Ranger Boy Coffee
                <br />
                Denver CO.
                </p>
            </div>
                <div class={styles.doglogo}>
                <Image 
                src='/images/doglogo.png'
                height={250}
                width={200}
                alt="brittany-dog-logo"
                class={styles.doglogo}
                 />
                 </div>
            </div>

       
       <Link href="/Directory" > <h4 class={styles.backbutton}>Back</h4></Link>
       </>
    )
}
