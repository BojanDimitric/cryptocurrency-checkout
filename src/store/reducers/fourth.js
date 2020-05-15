import * as types from '../types';

const initial = {
    loading: false,
    message: '',
    error: null
};

const fourth = (state = initial, action) => {
    switch (action.type) {
        case types.GET_FOURTH_START: 
            return {
                ...state,
                loading: true
            };
        case types.GET_FOURTH_SUCCESS: 
            return {
                ...state,
                loading: false,
                message: action.message,
                error: null
            };
        case types.GET_FOURTH_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default: 
            return state;
    };
};

export default fourth;