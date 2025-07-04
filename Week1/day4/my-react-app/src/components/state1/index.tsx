import React, { useState } from 'react'
import styles from './state1.module.css'

type ColorOption = {
    id: string;
    label: string;
};
const COLOR_OPTIONS: ColorOption[] = [
    { id: 'black', label: 'Đen' },
    { id: 'pink', label: 'Hồng' },
    { id: 'blue', label: 'Xanh' },
];

export default function ColorState() {
    const [selected, setSelected] = useState<string>('');
    return (
        <div className={styles.wrapper}>
            <span className={styles.label}>Màu:</span>

            {COLOR_OPTIONS.map((color) => (
                <button
                    key={color.id}
                    className={
                        selected === color.id
                            ? `${styles.btn} ${styles.active}`
                            : styles.btn
                    }
                    onClick={() => setSelected(color.id)}
                >
                    {color.label}
                </button>
            ))}
        </div>
    )
}