
const couter = (state = 0, action) => {

    switch(action.type){

        case 'INCREMENT': {
            return ++state;
        }
        case 'DECREMENT': {
            return state === 0 ? 0 : --state;
        }
        default: {
            return state;
        }
    }
}

export default couter;