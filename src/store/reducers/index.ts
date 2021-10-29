import { combineReducers } from "redux";
import { timerReducer } from "./timerReducer";

export const reducer = combineReducers({
    timer: timerReducer,
})

export type RootState = ReturnType<typeof reducer>