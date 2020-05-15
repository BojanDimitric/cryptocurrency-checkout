import * as types from '../types';

const initial = {
    loading: false,
    selected: [],
    address: '',
    id: null,
    error: null
};

const third = (state = initial, action) => {
    switch (action.type) {
        case types.GET_THIRD_START: 
            return {
                ...state,
                loading: true
            };
        case types.GET_THIRD_SUCCESS: 
            return {
                ...state,
                loading: false,
                selected: action.selected,
                address: action.address,
                error: null
            };
        case types.GET_THIRD_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case types.POST_THIRD_START: 
            return {
                ...state,
                loading: true
            };
        case types.POST_THIRD_SUCCESS: 
            return {
                ...state,
                loading: false,
                id: action.id,
                error: null
            };
        case types.POST_THIRD_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default: 
            return state;
    };
};

export default third;