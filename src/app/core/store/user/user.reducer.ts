
import {UserState} from './user.model';
import * as UserActions from './user.actions';

const initialState: UserState = {
  email: null,
  nickname : null,
  thumbnailSmallImgSrc : null
};

export function AuthReducer ( state = initialState, action: UserActions.UserActions ) {

  switch ( action.type ) {
    case UserActions.GET_USER_INFO_SUCCESS :
      return {
        ...state,
        email : action.payload.email,
        nickname : action.payload.nickname,
        thumbnailSmallImgSrc : action.payload.thumbnailSmallImgSrc
      };
    default:
      return state;
  }
}
