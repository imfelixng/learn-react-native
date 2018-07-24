import * as types from "../constants/ActionType";

let initState = {
    number: 0,
    typeFilter: null
}

const Filter = (state = initState, action) => {
    switch (action.type) {
        case types.FILTER_PRODUCT: {
            let number = parseInt(action.name.split(' ')[1],10);
            if(!isNaN(number)){
                console.log(number);
                let typeFilter = action.name.split(' ')[0];
                return {
                    number,
                    typeFilter
                }
            }else{
                return {
                    ...state,
                    typeFilter: null    
                };
            }
        }
    
        default:
            return state;
    }
}

export default Filter;