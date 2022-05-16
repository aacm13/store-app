import { Action, createReducer, on } from '@ngrx/store';
import { loginSuccess } from './auth.actions';
import { AuthState, ininitalState } from './auth.state';

const _authReducer = createReducer(
  ininitalState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      token: action.token,
      user: action.user,
    };
  })
);
export const authFeatureKey = 'auth';

export function AuthReducer(state: AuthState, action: Action) {
  return _authReducer(state, action);
}
