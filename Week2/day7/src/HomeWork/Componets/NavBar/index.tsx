import styles from './NavBar.module.css'
import { Users,Plus,Map,ChartColumn,Building2,UserCheck,History,Settings     } from 'lucide-react';
import { NavLink } from 'react-router';


export default function NavBar() {
    const navList = [
        {
            title: 'Patients',
            icon: <Users />,
            link: '/patients',
            isActive: true
        },
        {
            title: 'Overview',
            icon: <ChartColumn  />,
            link: '/overview',
        },
        {
            title: 'Map',
            icon: <Map />,
            link: '/map',
        },
        {
            title: 'Departments',
            icon: <Building2  />,
            link: '/departments',
        },
        {
            title: 'Doctors',
            icon: <UserCheck />,
            link: '/doctors',
        },
        {
            title: 'History',
            icon: <History />,
            link: '/history',
        },
        {
            title: 'Settings',
            icon: <Settings />,
            link: '/settings',
        },
    ]
  return (
    <div>
        <div className={styles.container}>
            <NavLink to="/">
                <div className={styles.navbar_header}>
                    <div className={styles.navbar_header_icon}><Plus /></div>
                    <div className={styles.navbar_header_title}>H-care</div>
                </div>
            </NavLink>
            <div className={styles.navbar_container}>
                {navList.map((item, index) => (
                    <NavLink to={item.link}
                        className={({ isActive }) => isActive ? styles.active + ' ' + styles.navbar : styles.navbar}>
                            <div className={styles.navbar_icon}>{item.icon}</div>
                            <div className={styles.navbar_title}>{item.title}</div>
                    </NavLink>
                ))}
                
            </div>
        </div>
    </div>
  )
}