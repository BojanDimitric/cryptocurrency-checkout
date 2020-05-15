import * as types from '../types';

const getThirdStart = () => ({
    type: types.GET_THIRD_START
});

const getThirdSuccess = (selected, address) => ({
    type: types.GET_THIRD_SUCCESS,
    selected, 
    address
});

const getThirdFail = error => ({
    type: types.GET_THIRD_FAIL,
    error
});

export const getThird = () => {
    return dispatch => {
        dispatch(getThirdStart());

        const selected = ['FREE SHIPPING', '10% OFF NEXT ORDER'];

        const address = '00000000000000000000000000000000';

        // fetch mock simulation 

        try {
            dispatch(getThirdSuccess(selected, address));
        } catch(error) {
            dispatch(getThirdFail(error));
        };
    };
};

const postThirdStart = () => ({
    type: types.POST_THIRD_START
});

const postThirdSuccess = id => ({
    type: types.POST_THIRD_SUCCESS,
    id
});

const postThirdFail = error => ({
    type: types.POST_THIRD_FAIL,
    error
});

export const postThird = () => {
    return dispatch => {
        dispatch(postThirdStart());

        const id = 1234567890;

        // fetch mock simulation

        try {
            dispatch(postThirdSuccess(id));
        } catch(error) {
            dispatch(postThirdFail(error));
        }
    };
};