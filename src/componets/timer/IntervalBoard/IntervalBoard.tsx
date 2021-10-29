import React from "react"
import { useTypeSelector } from "../../../hook/useTypeSelector"
import styles  from "./intervalBoard.module.css"
import IntervalItem from "./intervalItem/IntervalItem"

const IntervalBoard:React.FC = () => {

    const { interval } = useTypeSelector(state=> state.timer)

    return (
        <div className={styles.interval}>
            <h2 className={styles.title}>Interval</h2>
            <ul className={styles.interval__board}>
            {interval.map((item, index )=> {
                return <IntervalItem key={item.id} date={new Date(item.value)}/>
            })}
            </ul>
            <div className={styles.arrow}>
                <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0V16.8" stroke="#DC52FF" stroke-opacity="0.8" stroke-width="4"/>
                    <path d="M9 21.6001V24.0001" stroke="#DC52FF" stroke-opacity="0.8" stroke-width="2"/>
                    <path d="M2.57147 18.24L15.4286 18.2403" stroke="#DC52FF" stroke-opacity="0.8" stroke-width="2"/>
                    <path d="M1.28574 17.76L16.7143 17.7603" stroke="#DC52FF" stroke-opacity="0.8" stroke-width="2"/>
                    <path d="M0 16.8001L18 16.8003" stroke="#DC52FF" stroke-opacity="0.8" stroke-width="2"/>
                    <path d="M3.21426 19.1999L14.7857 19.2002" stroke="#DC52FF" stroke-opacity="0.8" stroke-width="2"/>
                    <path d="M4.5 20.1601L13.5 20.1603" stroke="#DC52FF" stroke-opacity="0.8" stroke-width="2"/>
                    <path d="M5.14284 21.1199L12.8571 21.1201" stroke="#DC52FF" stroke-opacity="0.8" stroke-width="2"/>
                    <path d="M6.42853 22.08L11.5714 22.0802" stroke="#DC52FF" stroke-opacity="0.8" stroke-width="2"/>
                    <path d="M7.07147 22.5599L10.9286 22.56" stroke="#DC52FF" stroke-opacity="0.8" stroke-width="2"/>
                    <path d="M7.71426 23.04L10.2857 23.0401" stroke="#DC52FF" stroke-opacity="0.8" stroke-width="2"/>
                </svg>
            </div>
        </div>
    )
}

export default IntervalBoard