/**
 * @author dipanshu jindal
 * @version 1.0
 */

import {
    API_KEY,
    BASE_URL,
} from '../constants/index';

import * as type from '../actions/Types';

export const getHomeData = (section,period) => {
     return function (dispatch) {
        fetch(BASE_URL + `${section}/${period}.json?api-key=${API_KEY}`, {
            method: 'GET',
        })
            .then((response) => {
                const statusCode = response.status;
                const data = response.json();
                return Promise.all([statusCode, data]);

            })
            .then(([statusCode,data])=> {
                 dispatch(getHomeDataSuccess(statusCode,data));
            })
            .catch((error) => {
                dispatch(getHomeDataFail(error));
            }).done();
    };
};
export const getHomeDataSuccess = (statusCode,responseData) => {

    return {
        type: type.SUCCESS,
        response: responseData,
        statusCode:statusCode

    };
};
export const getHomeDataFail = (error) => {
    return {
        type: type.FAILURE,
        error: error.message,
    };
};
