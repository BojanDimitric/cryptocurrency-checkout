import * as types from '../types';

const getFourthStart = () => ({
    type: types.GET_FOURTH_START
});

const getFourthSuccess = message => ({
    type: types.GET_FOURTH_SUCCESS,
    message
});

const getFourthFail = error => ({
    type: types.GET_FOURTH_FAIL,
    error
});

export const getFourth = () => {
    return dispatch => {
        dispatch(getFourthStart());

        const message = 'Payment successful';

        // fetch mock simulation 

        try {
            dispatch(getFourthSuccess(message));
        } catch(error) {
            dispatch(getFourthFail(error));
        };
    };
};