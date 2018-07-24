import products from '../data/productsData';
import * as types from '../constants/ActionType';

const initState = {
    list: products
}

const productsReducer = (state = initState, action) => {
    switch (action.type) {
        case types.ADD_PRODUCT: {
            return {
                ...state,
                list: [action.product,...state.list]
            };
        }
        case types.DELETE_PRODUCT: {
            return {
                ...state,
                list: state.list.filter((product) => product.id !== action.product.id)
            };
        }
        case types.EDIT_PRODUCT: {
            let list = state.list;
            let index = list.findIndex((product) => {
                return product.id === action.product.id;
            });
            list[index] = action.product;
            return {
                ...state,
                list: list,
                idRandom: new Date().valueOf()
            };
        }
        default: return state;
    }
}

export default productsReducer;