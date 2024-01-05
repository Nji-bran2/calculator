import { LOAD_ANS, LOAD_BACKSPACE,LOAD_BUTTONS,LOAD_CLEAR } from "./calculator.actionTypes";

// create a key and a store
export const CALCULATOR_KEY = 'calculatoStore'

let initialState = {
    number:'',
    ans: ''
}

export const calculatorReducer = (state = initialState, action) =>{
    let {type, payload } = action

 switch(type){
    case LOAD_BUTTONS:
   return {
       ...state,
       ...payload,
       number:state.number.concat(action.payload)
    }

    case LOAD_ANS:
       try {
         return{
            ...state,
            ...payload,
            // eslint-disable-next-line no-eval
            ans:eval(state.number).toString()

         }
       } catch (error) {
        return{
            ...state,
            ...payload,
            ans:"Error"
         }
       }
       case LOAD_CLEAR:
        return {
            ...state,
            ...payload,
            number:'',
            ans: '',
         }

         case LOAD_BACKSPACE:
            return {
                ...state,
                ...payload,
                number:(state.number).slice(0, -1),
                ans: '',
             }

             default:
             return state;

}

}