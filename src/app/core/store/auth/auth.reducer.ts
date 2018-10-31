
import * as AuthActions from './auth.actions';
import {AuthState} from './auth.model';


const initialState: AuthState = {
  authenticated : false,
};

export function AuthReducer ( state = initialState, action : AuthActions.AuthActions ) {

  switch ( action.type ) {
    case AuthActions.LOGIN :
    case AuthActions.SIGNUP :
      return {
        ...state,
        authenticated: true,
      };
    default:
      return state;
  }
}
