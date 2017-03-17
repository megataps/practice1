
import AuthenticationService from 'network/AuthenticationService'
import { saveUserSession } from 'reducers/UserSessionReducer';

const SIGN_IN_REQUEST = 'Sign_In_Request';
const SIGN_IN_SUCCESS = 'Sign_In_Success';
const SIGN_IN_FAILED = 'Sign_In_Failed';

function loginRequest() {
    return {
        type: SIGN_IN_REQUEST
    };
}

function loginRequestSuccess(json) {
    return {
        type: SIGN_IN_SUCCESS,
        payload: json
    };
}

function loginRequestFailed(error) {
    return {
        type: SIGN_IN_FAILED,
        error: error.message
    };
}

const INITIAL_STATE = {
    error: '',
    loading: false
}

export function signInReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SIGN_IN_REQUEST:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                user: action.payload
            };
        case SIGN_IN_FAILED:
            console.log(action.error);
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
};

export function onLogin(userCredentials) {
    return (dispatch, getState) => {
        dispatch(loginRequest());
        return AuthenticationService.signin(userCredentials)
            .then(response => {
                dispatch(saveUserSession(response));
                dispatch(loginRequestSuccess(response));
            })
            .catch(error => {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                dispatch(loginRequestFailed(error))
            });
    };
}
