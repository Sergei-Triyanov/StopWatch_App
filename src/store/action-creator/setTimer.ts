import { IIntervalState, timerAction, timerTypasAction } from "../../types/type"

export const nowDateTime = (time:number):timerAction => {
    return {type: timerTypasAction.SET_NOW_TIM, payload: time}
}

export const startDateTime = (time:number):timerAction => {
    return {type: timerTypasAction.START_TIMER, payload: time}
}

export const startTimerFlag = (payload:boolean):timerAction => {
    return {type:timerTypasAction.START_FLAG, payload}
}

export const slicerTimer = (payload:IIntervalState):timerAction => {
    return {type: timerTypasAction.SLICER_TIMER, payload}
}

export const pauseTimer = (payload:boolean):timerAction => {
    return {type: timerTypasAction.PAUSE_FUNC, payload}
}

export const startPause = (pause:boolean, payload:number):timerAction  => {
    return {type: timerTypasAction.START_PAUSE_FUNC, pause, payload}
}