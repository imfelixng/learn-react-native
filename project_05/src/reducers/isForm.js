import * as types from "../constants/ActionType";

let initState = {
    isForm: false
}

const isForm = (state = initState, action) => {

    switch (action.type) {
        case types.OPEN_FORM: {
            return {
                ...state,
                isForm: true
            }
        }

        case types.CLOSE_FORM: {
            return {
                ...state,
                isForm: false
            }
        }
        default:
            return state;
    }
}

export default isForm;