import * as types from '../types';

const initial = {
    loading: false,
    currency: '',
    amount: null,
    exchanges: {},
    error: null
};

const first = (state = initial, action) => {
    switch (action.type) {
        case types.GET_FIRST_START: 
            return {
                ...state,
                loading: true
            };
        case types.GET_FIRST_SUCCESS: 
            return {
                ...state,
                loading: false,
                currencies: action.currencies,
                amount: action.amount,
                exchanges: action.exchanges,
                error: null
            };
        case types.GET_FIRST_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case types.POST_FIRST_START: 
            return {
                ...state,
                loading: true
            };
        case types.POST_FIRST_SUCCESS: 
            return {
                ...state,
                loading: false,
                currency: action.currency,
                error: null
            };
        case types.POST_FIRST_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default: 
            return state;
    };
};

export default first;