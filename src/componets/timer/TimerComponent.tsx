import React from "react"
import { useTypeSelector } from "../../hook/useTypeSelector"
import { useAction } from '../../hook/useAction';
import s from "./timer.module.css"
import Button from "../button/Button";
import IntervalBoard from "./IntervalBoard/IntervalBoard";
import ClockFaceItem from "../clock/clockFace/ClockFaceItem";
let count = 0;

const Timer:React.FC = () => {
    const { result, start, pause } = useTypeSelector(state => state.timer)
    const { nowDateTime, startDateTime, startTimerFlag, slicerTimer, startPause, pauseTimer, } = useAction()
    let resultDate = new Date(result) 

    React.useEffect(()=>{
        // START if 
        if (( start && !pause ) || !pause) {    
            setTimeout(() =>{
                const dateNow = new Date().getTime()
                return nowDateTime(dateNow)
            }, 100)
        }
    })

    if ( start && (result.toString().length < 13) && (result > 0)) {
        count++;
        return(
            <div className={s.timer}>
                <div className={s.info}>
                    <ClockFaceItem time={resultDate.getUTCHours()} style={s.item}/>
                    <ClockFaceItem time={resultDate.getUTCMinutes()} style={s.item}/>
                    <ClockFaceItem time={resultDate.getUTCSeconds()} style={s.item}/>
                    <ClockFaceItem time={+resultDate.getUTCMilliseconds().toString().split('').splice(0,2).join('')} style={s.item}/>
                </div>
                <div className={s.table}>
                    <Button label={'clear'} onClick={()=>{
                        pauseTimer(false)
                        startTimerFlag(!start)
                        startDateTime(0)
                        nowDateTime(0)
                    }}/>
                    <Button label={pause ? 'restart' : 'pause'} onClick={()=>{
                        if ( pause ) {
                            return startPause(false, new Date().getTime() - result)
                        }
                        pauseTimer(true)
                    }}/>
                    <Button label={'inter'} onClick={()=>{
                        if (start && !pause) {
                            slicerTimer({id:result, value:result})
                        }
                    }}/>
                </div>
                <IntervalBoard/>
            </div> 
        )
    }
    
    return(
        <div className={s.timer}>
            <div className={s.info}>
                <ClockFaceItem time={0} style={s.item}/>
                <ClockFaceItem time={0} style={s.item}/>
                <ClockFaceItem time={0} style={s.item}/>
                <ClockFaceItem time={0} style={s.item}/>
            </div>
            <div className={s.table}>
                <Button label={'start'} onClick={()=> {
                        const startTime = new Date().getTime()
                        startTimerFlag(!start)
                        nowDateTime(startTime)
                        return startDateTime(startTime)
                    }}
                />
            </div>
        </div>
    )

}

export default Timer