import styles from './Styles.module.css';



export function CountDown(){//recebe como argumento props que é do tipo headingProps
    
    return(
        <div className={styles.container}>
          00:00
        </div>
    );
    
}