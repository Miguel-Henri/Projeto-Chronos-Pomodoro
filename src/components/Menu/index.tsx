import styles from './Styles.module.css';
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';



export function Menu(){//recebe como argumento props que é do tipo headingProps
    
    return(
        <nav className={styles.menu}>
            <a href="#" className={styles.menuLink}>
                <HouseIcon/>
            </a>
             <a href="#" className={styles.menuLink}>
                <HistoryIcon/>
            </a>
             <a href="#" className={styles.menuLink}>
                <SettingsIcon/>
            </a>
             <a href="#" className={styles.menuLink}>
                <SunIcon/>
            </a>
            
            
        </nav>
    );
    
}