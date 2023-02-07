import React from 'react';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import book from '../../public/images/sleep copy.jpg'

export default function PrintBook() {
    return (
        <div>
            <div class={styles.printbox}>
                <p class={styles.text}>
                   Lefty design print a bi monthly soft-cover bound book.
                   <br />
                   We offer a full collection of our catalog available on our big cartel store.
                   <br />
                    Each issue contains original work from artists and designers geared toward exploring fine art in a digital space.
                    <br />
                    Photoshop drawings, photography, digital mock up, abstract art, and illustration are all commonly explored
                    <br />
                    in each issue.
                    <br />
                    <br />
                    <br />
                    Left provides full design to print services for anyone looking to catalog or document any work or products.
                    <br />
                    We offer graphic design, book binding and printing, commercial artwork documentation,
                    <br />
                    commercial product photography, installation documentation, and more.
                    <br />
                    <br />
                    See our Contact page for a quote.
                </p>
                <div>
                    <Image 
                    src={book}
                    class={styles.book}
                    height={450}
                    width={370}
                    alt="Issue-01-cover" />
                </div>
                
            </div>
        </div>
    )
}
