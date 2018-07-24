import {combineReducers} from 'redux';
import products from './products';
import isForm from './isForm';
import filter from './Filter';
import product from './product';
let reducers = combineReducers({
    products,
    isForm,
    filter,
    product
});

export default reducers;