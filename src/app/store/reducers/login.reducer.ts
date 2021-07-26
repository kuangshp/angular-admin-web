import { createReducer, on, Action } from '@ngrx/store';
import { LoginVo } from 'src/app/vo/login/login.vo';
import { loadLoginStart, loadLoginSuccess } from '../actions';

export interface LoginState {
  loginInfo: LoginVo | null;
}

export const initLoginState: LoginState = {
  loginInfo: null,
};

const _reducer = createReducer(
  initLoginState,
  on(loadLoginStart, () => {
    return { loginInfo: null };
  }),
  on(loadLoginSuccess, (state: LoginState, { loginVo }: { loginVo: LoginVo }) => {
    return { loginInfo: { ...state.loginInfo, ...loginVo } };
  })
);

export const loginReducer = (state: LoginState = initLoginState, action: Action) => {
  return _reducer(state, action);
};
