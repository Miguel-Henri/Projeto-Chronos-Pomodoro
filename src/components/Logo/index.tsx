import styles from './Styles.module.css';
import { TimerIcon } from 'lucide-react';



export function Logo(){//recebe como argumento props que é do tipo headingProps
    
    return(
        <div className={styles.logo}>
            <a href="#" className={styles.logoLink}>
                <TimerIcon/>
                <span>Chronos</span>
            </a>
        </div>
    );
    
}