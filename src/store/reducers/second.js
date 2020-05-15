import * as types from '../types';

const initial = {
    loading: false,
    currency: '',
    amount: null,
    promos: [],
    error: null
};

const second = (state = initial, action) => {
    switch (action.type) {
        case types.GET_SECOND_START: 
            return {
                ...state,
                loading: true
            };
        case types.GET_SECOND_SUCCESS: 
            return {
                ...state,
                loading: false,
                promos: action.promos,
                error: null
            };
        case types.GET_SECOND_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case types.POST_SECOND_START: 
            return {
                ...state,
                loading: true
            };
        case types.POST_SECOND_SUCCESS: 
            return {
                ...state,
                loading: false,
                currency: action.currency,
                amount: action.amount,
                chosen: action.chosen,
                error: null
            };
        case types.POST_SECOND_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default: 
            return state;
    };
};

export default second;