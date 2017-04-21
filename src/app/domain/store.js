
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
//import createLogger from "redux-logger";
//import * as reducers from "./ducks";
import reducer from './product';
//import { apiService } from "./middlewares";

//  function reducer(state = initialState, action) {
//   return state;
// }

export default function configureStore( initialState = {} ) {
    //const loggerMiddleware = createLogger( );
    // const rootReducer = combineReducers( reducer );

    // return createStore(
    //     rootReducer,
    //     initialState,
    //     applyMiddleware(
    //         apiService,            
    //         thunkMiddleware,
    //     ),
    // );
    return createStore(reducer,initialState);
}

