export enum timerTypasAction {
    START_TIMER = 'START_TIMER',
    SET_NOW_TIM = 'SET_NOW_TIM',
    START_FLAG = 'START_FLAG',
    SLICER_TIMER = 'SLICER_TIMER',
    PAUSE_FUNC = 'PAUSE_FUNC',
    START_PAUSE_FUNC = 'START_PAUSE_FUNC'
}

export interface IInitalState {
    start: boolean,
    pause: boolean,
    startTime: number,
    result: number,
    interval: IIntervalState[],
}

export interface IIntervalState {
    id: number | string,
    value: number,
}

interface ISetNowTimer {
    type: timerTypasAction.SET_NOW_TIM,
    payload: number,
}

interface ISlicerTimer {
    type: timerTypasAction.SLICER_TIMER,
    payload: IIntervalState;
}

interface IStartTimer {
    type: timerTypasAction.START_TIMER,
    payload: number,
}

interface IPauseFunc {
    type: timerTypasAction.PAUSE_FUNC,
    payload: boolean,
} 

interface IStartPauseFunc {
    type: timerTypasAction.START_PAUSE_FUNC,
    pause: boolean,
    payload: number,
} 

interface ITimerRunFlag {
    type: timerTypasAction.START_FLAG,
    payload: boolean;
}

export type timerAction = ISetNowTimer | IStartTimer | ISlicerTimer | IPauseFunc | IStartPauseFunc | ITimerRunFlag