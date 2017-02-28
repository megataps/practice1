
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

export function signInReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST:
			return {
				...state,
				loading: true,
				error: ''
			};
		case SUCCESS:
			return {
				...state,
				loading: false,
				error: '',
				user: action.payload
			};
		case FAILED:
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


const userInfo = {
	trainee_id: 1,
	full_name: 'test',
	email: 'test@gmail.com',
	birthday: '1986-01-20',
	token: 'abcxyzwendsjkfjdsklfjkds'
};

const errorMsg = {
	message: 'error has occured'
}

export function login(userCredentials) {
	if (userCredentials.username === 'test@gmail.com' && userCredentials.password === '123456') {
		return loginRequestSuccess(userInfo);
	} else {
		return loginRequestFailed(errorMsg);
	}
}

// export function login(userCredentials) {
//   return (dispatch, getState) => {
//     dispatch(loginRequest());
// 		//AuthenticationService.signin(userCredentials)
// 		setTimeout(() => {
//             dispatch(logInRequestSuccess(userInfo));
// 		}, 1000 * 3)
//     .then(response => {
//       return response.json();
//     })
//     .then(jsonTask => {
//         dispatch(loginRequestSuccess(jsonTask));
//     })
//     .catch(error => {
//       console.log('There has been a problem with your fetch operation: ' + error.message);
//       dispatch(loginRequestFailed(error))
//     });
//   };
// }