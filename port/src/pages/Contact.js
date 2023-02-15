import React from 'react';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '../../src/pages/PageHeader.js';


export default function Contact() {
    return (
        <>
        <PageHeader />
        <div class={styles.form}>
            <p class={styles.formtext}>JOIN OUR EMAIL LIST OR REACH OUT FOR INFO!</p>
            <br />
            <br />
            <form action="/api/form" method="post">
                <label for="name-input">Full Name:</label>
                <input type="text" placeholder="Shohei Ohtani" id="fullname" name="fullname"></input>
                <br />
                <br />
                <label for="email-input">Email:</label>
                <input type="text" placeholder="example@gmail.com" id="email" name="email"></input>
                <br />
                <br />
                <label from="message"></label>
                <input type="text" placeholder="Write your message here." class={styles.messagebox} id="message-box" name="message-box"></input>
                <br />
                <br />
                <button type="submit" id="form-button" name="form-button">SUBMIT</button>
            </form>
            <Image 
            height={250}
            width={175}
            src="/images/chainicon.png" 
            />
        </div>
        <div>
            
        </div>

        <Link href="/Directory" > <h4 class={styles.backbutton}>Back</h4></Link>
        </>
    )
}
