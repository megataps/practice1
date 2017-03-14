
import AuthenticationService from 'network/AuthenticationService'

const SIGN_UP_REQUEST = 'Sign_Up_Request';
const SIGN_UP_SUCCESS = 'Sign_Up_Success';
const SIGN_UP_FAILED = 'Sign_Up_Failed';

function signUpRequest() {
    return {
        type: SIGN_UP_REQUEST
    };
}

function signUpRequestSuccess(json) {
    return {
        type: SIGN_UP_SUCCESS,
        payload: json
    };
}

function signUpRequestFailed(error) {
    return {
        type: SIGN_UP_FAILED,
        error: error.message
    };
}

const INITIAL_STATE = {
    error: '',
    loading: false
}

export function signUpReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SIGN_UP_REQUEST:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                user: action.payload
            };
        case SIGN_UP_FAILED:
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

export function onSignUp(userInfo) {
    return (dispatch, getState) => {
        dispatch(signUpRequest());
        return AuthenticationService.signup(userInfo)
            .then(response => {
                dispatch(signUpRequestSuccess(response));
            })
            .catch(error => {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                dispatch(signUpRequestFailed(error))
            });
    };
}
