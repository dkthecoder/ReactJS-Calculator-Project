import { ACTIONS } from "./App"

export default function DigitButton({ dispatch, digit }){
    return (
    <button class="btn btn-light fs-3" 
    onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
        {digit}
        </button>
    )
}