import React from 'react'
import styles from './slide1.module.css'
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { Badge } from 'lucide-react';


export default function index() {
  return (
    <div>
        <div className={styles.container}>
            <div className={styles.containerImg}>
                <img src="https://nhannn87dn.github.io/react-app/photos/cover14.jpg" alt="" />
                <div className={styles.btnToggle}>
                    <ChevronLeft/>
                    <ChevronRight/>
                </div>
                <div className={styles.btnSlide}>
                    <Badge/>
                    <Badge/>
                    <Badge/>
                    <Badge/>
                </div>
            </div>
            <div className={styles.containerCard}>
                <img src="https://nhannn87dn.github.io/react-app/photos/cover14.jpg" alt="" />
                <img src="https://nhannn87dn.github.io/react-app/photos/cover14.jpg" alt="" />
                <img src="https://nhannn87dn.github.io/react-app/photos/cover14.jpg" alt="" />
                <img src="https://nhannn87dn.github.io/react-app/photos/cover14.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}