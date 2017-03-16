
const LOGGED_IN_SAVE_SESSION = 'Logged_In_User_Save_Session';

export function saveUserSession(user) {
    console.log(user);
    return {
        type: LOGGED_IN_SAVE_SESSION,
        loggedInUser: user
    };
}

const INITIAL_STATE = {
    error: '',
    loading: false
}

export function userSessionReducer(state = INITIAL_STATE, action) {
    console.log(action.type);
    switch (action.type) {
        case LOGGED_IN_SAVE_SESSION:
            console.log(action.loggedInUser);
            return {
                ...state,
                loading: false,
                error: '',
                user: action.loggedInUser
            };
        default:
            return state;
    }
};
