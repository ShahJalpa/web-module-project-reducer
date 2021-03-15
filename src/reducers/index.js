import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, MEMORY_PLUS, MEMORY_R, MEMORY_C } from './../actions';

/* THIS WAS GIVEN
export const initialState = {
    total: 100,
    operation: "*",
    memory: 100
}*/

//CHAGEN TO THIS AS NEEDED TO TEST THE UI AS APP.JS HAS BEEN UPDATED WITH {state.total}, {state.memory}, {state.operation}
export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
        
        case(CLEAR_DISPLAY):
            return({
                ...state,
                total: 0
            });

        case(MEMORY_PLUS):
            return({
                ...state, memory: state.total
            });

        case(MEMORY_R):
            return({
                ...state, total:calculateResult(state.total, state.memory, state.operation)
            })

        case(MEMORY_C):
            return({
                ...state, memory: 0
            })

        default:
            return state;
    }
}

export default reducer;