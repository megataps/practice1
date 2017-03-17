
import UserListService from 'network/UserService'

const USER_LIST_REQUEST = 'User_List_Request';
const USER_LIST_SUCCESS = 'User_List_Success';
const USER_LIST_FAILED = 'User_List_Failed';

function getUserListRequest() {
    return {
        type: USER_LIST_REQUEST
    };
}

function getUserListRequestSuccess(json) {
    console.log("getUserListRequestSuccess >>>> json >>> " + json);
    return {
        type: USER_LIST_SUCCESS,
        payload: json
    };
}

function getUserListRequestFailed(error) {
    return {
        type: USER_LIST_FAILED,
        error: error.message
    };
}

const INITIAL_STATE = {
    error: '',
    loading: false
}

export function getUserListReducer(state = INITIAL_STATE, action) {

    console.log("action.payload >>>>:" + action.payload);

    switch (action.type) {
        case USER_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case USER_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                userList: action.payload
            };
        case USER_LIST_FAILED:
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

export function getUserList(accessToken) {
    console.log("accessToken >>>> " + accessToken);
    return (dispatch, getState) => {
        dispatch(getUserListRequest());
        return UserListService.getUserList(accessToken)
            .then(response => {
                dispatch(getUserListRequestSuccess(response));
            })
            .catch(error => {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                dispatch(getUserListRequestFailed(error))
            });
    };
}
