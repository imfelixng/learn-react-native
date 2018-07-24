import * as types from '../constants/ActionType';

export const open_form = () => {
    return {
        type: types.OPEN_FORM
    }
}

export const close_form = () => {
    return {
        type: types.CLOSE_FORM
    }
}

export const filter_product = (name) => {
    return {
        type: types.FILTER_PRODUCT,
        name
    }
}

export const add_product = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product
    }
}

export const delete_product = (product) => {
    return {
        type: types.DELETE_PRODUCT,
        product
    }
}

export const show_edit_product = (product) => {
    return {
        type: types.SHOW_EDIT_PRODUCT,
        product
    }
}

export const edit_product = (product) => {
    return {
        type: types.EDIT_PRODUCT,
        product
    }
}
