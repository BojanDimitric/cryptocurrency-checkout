import * as types from '../types';

const getSecondStart = () => ({
    type: types.GET_SECOND_START
});

const getSecondSuccess = promos => ({
    type: types.GET_SECOND_SUCCESS,
    promos
});

const getSecondFail = error => ({
    type: types.GET_SECOND_FAIL,
    error
});

export const getSecond = () => {
    return dispatch => {
        dispatch(getSecondStart());

        const promos = ['FREE SHIPPING', '10% OFF NEXT ORDER'];

        // fetch mock simulation 

        try {
            dispatch(getSecondSuccess(promos));
        } catch(error) {
            dispatch(getSecondFail(error));
        };
    };
};

const postSecondStart = () => ({
    type: types.POST_SECOND_START
});

const postSecondSuccess = (currency, amount, chosen) => ({
    type: types.POST_SECOND_SUCCESS,
    currency, 
    amount, 
    chosen
});

const postSecondFail = error => ({
    type: types.POST_SECOND_FAIL,
    error
});

export const postSecond = (currency, amount, chosen) => {
    return dispatch => {
        dispatch(postSecondStart());

        // fetch mock simulation 

        try {
            dispatch(postSecondSuccess(currency, amount, chosen));
        } catch(error) {
            dispatch(postSecondFail(error));
        }
    };
};