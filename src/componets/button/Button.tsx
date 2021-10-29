import React from "react"
import styles from "./button.module.css"
import ButtonType from "./type"

const Button:React.FC<ButtonType> = ({label, onClick}) => {

    return (
        <button className={styles.button} onClick={()=>{
            if (onClick) {
                onClick()
            }
        }}>{label}</button>  
    )
}

export default Button;