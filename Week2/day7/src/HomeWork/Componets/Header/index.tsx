import styles from './Header.module.css'
import { Search,Bell  } from 'lucide-react'

export default function Header() {
  return (
    <div>
        <div className={styles.header}>
            <div className={styles.header_left}>
                <Search/><input type="text" placeholder='Search...' />
            </div>
            <div className={styles.header_right}>
                <Bell/>
                <div className={styles.avatar}></div>
                <p>Emma Kwan</p>
            </div>
        </div>
    </div>
  )
}