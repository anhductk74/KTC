import React from 'react'
import styles from './HoverHighlight.module.css'

export default function HoverHighlight() {
    const [label, setLabel] = React.useState('hover me')

    const handleHoverEnter = () => {
        setLabel('hover')
    }
    const handleHoverLeave = () => {
        setLabel('hover me!')
    }
  return (
    <div>
        <h1>Exercise 4: Hover Highlight</h1>
        <div onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave} className={styles.container}>
            {label}
        </div>
    </div>
  )
}