export interface AuthState {
  token: string | null;
  user: {} | null;
}

export const ininitalState: AuthState = {
  token: null,
  user: null,
};
