import styles from './Heading.module.css';

type HeadingProps={
    children: React.ReactNode;


};//espera uma propriedade chamada children que é do tipo String

export function Heading({children}:HeadingProps){//recebe como argumento props que é do tipo headingProps
    
    return(
      
        <h1 className={styles.heading}> {children}</h1>
        
    );
}