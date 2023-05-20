import {
    ERROR,
    SET_LOADING,
} from '../../types';

const GlobalReducer = (state, action) => {
    switch(action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading:action.loading
            }
        case ERROR:
            return {
                ...state,
                loading:false
            }
        default:
            return state;
    }
}

export default GlobalReducer;