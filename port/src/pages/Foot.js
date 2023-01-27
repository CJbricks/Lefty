import React from 'react'
import styles from '@/styles/Home.module.css';



export default function Foot(props) {
   
    return (
        <div class="styles.footbox"> 
            <div class="styles.iconbox">
                {props.ighandle}
                {props.github} 
            </div>
        </div>
    )
}