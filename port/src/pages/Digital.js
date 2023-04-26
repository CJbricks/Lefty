import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import PageHeader from '../../src/pages/PageHeader.js';


export default function Digital() {

    const imageArr = [whistle, bleach, blvd, dryWall, frogDog, dad, crowns, 
    jumper, promise, nothingWorks, skatePark, internet, shed, 
    trashBoy, stand, uBoot, freedom, lasso];

    return (
        
             <div>
              <PageHeader />
               <Image 
               src="/images/digitalfold/whistle.jpg"
               width={380}
               height={500}
               alt="blackmetal-drawing"
               class={styles.digitalbox} />

               <Image 
               src="/images/digitalfold/bleesh.jpg"
               width={380}
               height={500}
               alt="blackmetal-drawing"
               class={styles.digitalbox} />

               <Image 
               src="/images/digitalfold/blvd.jpg"
               width={380}
               height={500}
               alt="blackmetal-drawing"
               class={styles.digitalbox} />

               <Image 
               src="/images/digitalfold/drywall copy.jpg"
               width={380}
               height={500}
               alt="blackmetal-drawing"
               class={styles.digitalbox} />

               <Image 
               src="/images/digitalfold/frogDog.jpg"
               width={380}
               height={500}
               alt="blackmetal-drawing"
               class={styles.digitalbox} />

               <Image 
               src="/images/digitalfold/dad.jpg"
               width={380}
               height={500}
               alt="blackmetal-drawing"
               class={styles.digitalbox} />

               <Image 
               src="/images/digitalfold/crowns copy 2.jpg"
               width={380}
               height={500}
               alt="blackmetal-drawing"
               class={styles.digitalbox} />

               <Image 
               src="/images/digitalfold/jumper.jpg"
               width={380}
               height={500}
               alt="blackmetal-drawing"
               class={styles.digitalbox} />

               <Image 
               src="/images/digitalfold/promise copy.jpg"
               width={380}
               height={500}
               alt="blackmetal-drawing"
               class={styles.digitalbox} />

               <Image 
               src="/images/digitalfold/nothingworks.jpg"
               width={380}
               height={500}
               alt="blackmetal-drawing"
               class={styles.digitalbox} />

               <Image 
               src="/images/digitalfold/skatepark.jpg"
               width={380}
               height={500}
               alt="blackmetal-drawing"
               class={styles.digitalbox} />

               <Image 
               src="/images/digitalfold/internet copy.jpg"
               width={380}
               height={500}
               alt="blackmetal-drawing"
               class={styles.digitalbox} />

               <Image 
               src="/images/digitalfold/shed copy.jpg"
               width={380}
               height={500}
               alt="blackmetal-drawing"
               class={styles.digitalbox} />

               <Image 
               src="/images/digitalfold/trashboy2.jpg"
               width={380}
               height={500}
               alt="blackmetal-drawing"
               class={styles.digitalbox} />

               <Image 
               src="/images/digitalfold/stand copy.jpg"
               width={380}
               height={500}
               alt="blackmetal-drawing"
               class={styles.digitalbox} />

              <Image 
               src="/images/digitalfold/uboot.jpg"
               width={380}
               height={500}
               alt="blackmetal-drawing"
               class={styles.digitalbox} />

               <Image 
               src="/images/digitalfold/freedom.jpg"
               width={380}
               height={500}
               alt="blackmetal-drawing"
               class={styles.digitalbox} />

               <Image 
               src="/images/digitalfold/lasso copy.jpg"
               width={380}
               height={500}
               alt="blackmetal-drawing"
               class={styles.digitalbox} />
                
               <Link href="/Directory"> <h4 class={styles.backbutton}>Back</h4></Link>
            </div>
        
    )
}
