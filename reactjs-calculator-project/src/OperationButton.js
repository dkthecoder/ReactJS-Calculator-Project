import { ACTIONS } from "./App"

export default function OperationButton({ dispatch, operation }){
    return (
    <button class="btn btn-secondary fs-2"
    onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
    >
        {operation}
        </button>
    )
}