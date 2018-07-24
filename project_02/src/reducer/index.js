
const couter = (state = 0, action) => {

    switch(action.type){

        case 'INCREMENT': {
            //return ++state; //khong su dung vung nho cu
            return state + 1; //tra ve vung nho moi
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