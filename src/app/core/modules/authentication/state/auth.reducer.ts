import { Action, createReducer } from '@ngrx/store';
import { AuthState, ininitalState } from './auth.state';

const _authReducer = createReducer(ininitalState);
export const authFeatureKey = 'auth';

export function AuthReducer(state: AuthState, action: Action) {
  return _authReducer(state, action);
}
