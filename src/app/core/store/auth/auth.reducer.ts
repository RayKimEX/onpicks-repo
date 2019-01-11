
import * as AuthActions from './auth.actions';
import {AuthState} from './auth.model';


const initialState: AuthState = {
  user: null,
  isAuthenticated : false,
};

export function AuthReducer ( state = initialState, action: AuthActions.AuthActions ) {

  switch ( action.type ) {
    case AuthActions.GET_AUTHUSER_INFO_SUCCESS :
    case AuthActions.LOGIN_SUCCESS :
      console.log(action.payload);
      return {
        ...state,
        user : action.payload,
        isAuthenticated : true,
      }
    case AuthActions.LOGOUT_SUCCESS :
      return {
        ...state,
        isAuthenticated : false,
      }
    default:
      return state;
  }
}
