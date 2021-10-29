import { IInitalState, timerAction, timerTypasAction } from "../../types/type"

const  initalState:IInitalState = {
    start: false,
    pause: false,
    startTime: 0,
    result: 0, 
    interval: [{id:0, value:0}],
}

export const timerReducer = (state = initalState, action:timerAction):IInitalState => {
    switch (action.type) {
        case timerTypasAction.START_TIMER:
            return {...state, startTime: action.payload, interval: [],}
        case timerTypasAction.SET_NOW_TIM:
            return{...state, result: action.payload - state.startTime}
        case timerTypasAction.START_FLAG:
            return {...state, start: action.payload,}
        case timerTypasAction.SLICER_TIMER: 
            return {...state, interval: [...state.interval, action.payload]} 
        case timerTypasAction.PAUSE_FUNC:
            return {...state, pause: action.payload}
        case timerTypasAction.START_PAUSE_FUNC:
            return {...state, startTime: action.payload, pause: action.pause}
        default:
            return state;
    }
}