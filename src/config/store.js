import { Platform } from 'react-native';
import {
	createStore,
	applyMiddleware,
	compose
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'config/rootReducer';
import devTools from 'remote-redux-devtools';

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools({
      name: Platform.OS,
      hostname: 'localhost',
      port: 5678
    })
  );
  return createStore(rootReducer, initialState, enhancer);
}

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeEnhancers(
//   applyMiddleware(thunk)
// ));
// export default store;