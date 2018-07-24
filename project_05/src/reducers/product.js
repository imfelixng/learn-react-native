import * as types from "../constants/ActionType";

let initState = {
    id: null,
    name: '',
    price: 0,
    rating: 0
}

const product = (state = initState, action) => {
    switch (action.type) {
        case types.SHOW_EDIT_PRODUCT:
            return action.product;

        default:
            return state;
    }
}

export default product;