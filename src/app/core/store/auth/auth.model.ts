import {UserState} from '../user.model';

export interface AuthState {
  user: UserState;
  isAuthenticated: boolean;
};
