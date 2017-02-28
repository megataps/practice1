
const REQUEST = 'Request';
const SUCCESS = 'Success';
const FAILED = 'Failed';

export function loginRequest() {
    return {
        type: REQUEST
    };
}

export function loginRequestSuccess(json) {
    return {
        type: SUCCESS,
        payload: json
    };
}

export function loginRequestFailed(error) {
    return {
        type: FAILED,
        error: error.message
    };
}

const INITIAL_STATE= {
    error: '',
    loading: false
}


const userInfo = {
	trainee_id: 1,
	full_name: 'test',
	email: 'test@gmail.com',
	birthday: '1986-01-20',
	token: 'abcxyzwendsjkfjdsklfjkds'
};

export function login(userCredentials) {
	if (userCredentials.username === 'test@gmail.com' && userCredentials.password === '123456') {
		loginRequestSuccess(userInfo);
	} else {
		loginRequestFailed();
	}
}

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    error: state.signInReducer.error,
    loading: state.signInReducer.loading,
    user: state.signInReducer.user
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    login: (userCredentials) => dispatch(login(userCredentials))
  }
}