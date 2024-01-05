import { LOAD_ANS, LOAD_BACKSPACE,LOAD_BUTTONS,LOAD_CLEAR } from "./calculator.actionTypes";

export const loadButtons = (number) => {
    return{
        type:LOAD_BUTTONS,
        payLoad:number
    }
}

export const loadAns = (number) => {
    return{
        type:LOAD_ANS,
        payLoad:number
    }
}

export const loadClear = (number) => {
    return{
        type:LOAD_CLEAR,
        payLoad:number
    }
}

export const loadBackspace = (number) => {
    return{
        type:LOAD_BACKSPACE,
        payLoad:number
    }
}