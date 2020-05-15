import * as types from '../types';

const getFirstStart = () => ({
    type: types.GET_FIRST_START
});

const getFirstSuccess = (currencies, amount, exchanges) => ({
    type: types.GET_FIRST_SUCCESS,
    currencies,
    amount,
    exchanges
});

const getFirstFail = error => ({
    type: types.GET_FIRST_FAIL,
    error
});

export const getFirst = () => {
    return dispatch => {
        dispatch(getFirstStart());

        const currencies = ['BTC', 'ETH', 'LTC']

        const amount = 123456;

        const exchanges = {
            BTC: 0.000001, 
            ETH: 0.00001, 
            LTC: 0.0001
        };

        // fetch mock simulation 

        try {
            dispatch(getFirstSuccess(currencies, amount, exchanges));
        } catch(error) {
            dispatch(getFirstFail(error));
        }
    };
};

const postFirstStart = () => ({
    type: types.POST_FIRST_START
});

const postFirstSuccess = currency => ({
    type: types.POST_FIRST_SUCCESS,
    currency
});

const postFirstFail = error => ({
    type: types.POST_FIRST_FAIL,
    error
});

export const postFirst = currency => {
    return dispatch => {
        dispatch(postFirstStart());

        // fetch mock simulation 

        try {
            dispatch(postFirstSuccess(currency));
        } catch(error) {
            dispatch(postFirstFail(error));
        }
    };
};