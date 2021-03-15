export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_PLUS = "MEMORY_PLUS"

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return({type: CHANGE_OPERATION, payload:operator})
}

export const clearDisplay = () => {
    return ({type: CLEAR_DISPLAY});
}

export const memoryPlus = (number) => {
    return ({type: MEMORY_PLUS, payload: number});
}