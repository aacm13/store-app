import { AuthReducer } from '../core/modules/authentication/state/auth.reducer';
import { AuthState } from '../core/modules/authentication/state/auth.state';

export interface AppState {
  auth: AuthState;
}
export const appReducer = {
  auth: AuthReducer,
};
