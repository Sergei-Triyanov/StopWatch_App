import styles from "./inetrvaItem.module.css"
import { Item, IItemInterval, } from "../type"

const IntervalItem = ({ date }:IItemInterval) => {

    const intervalValue:Item = {
        ms : date.getUTCMilliseconds() >= 10 ? date.getUTCMilliseconds().toString().split('').splice(0, 2).join('') : `0${date.getUTCMilliseconds().toString().split('').splice(0, 2).join('')}`,
        s : date.getUTCSeconds() >= 10 ? date.getUTCSeconds().toString() : `0${date.getUTCSeconds()}`,
        m : date.getUTCMinutes() >= 10 ? date.getUTCMinutes().toString() : `0${date.getUTCMinutes()}`,
        h : date.getUTCHours() >= 10 ? date.getUTCHours().toString() : `0${date.getUTCHours()}`,
    }

    return(
        <li className={styles.item}>{`${intervalValue.h}:${intervalValue.m}:${intervalValue.s}:${intervalValue.ms}`}</li>
    )
}

export default IntervalItem