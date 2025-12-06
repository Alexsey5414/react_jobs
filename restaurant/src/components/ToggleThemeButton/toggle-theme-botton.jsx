import React, { useContext } from "react"
import styles from './toggle-theme-botton.module.css';
import { ThemeContext } from "../context/theme-context";


const ToggleThemeButton = ()=>
{
         const {setTheme} = useContext(ThemeContext);
    return (
   
     <button className={styles.Button} onClick={()=>setTheme((theme)=>(theme ==='light'? 'dark': 'light'))}>
       Сменить тему
     </button>        


    );
}

export default ToggleThemeButton;