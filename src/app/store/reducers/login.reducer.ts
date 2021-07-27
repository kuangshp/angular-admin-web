import { createReducer, on, Action } from '@ngrx/store';
import { ILoginVo } from 'src/app/vo/login/login.vo';
import { loadLoginStart, loadLoginSuccess } from '../actions';

export interface LoginState {
  loginInfo: ILoginVo | null;
}

export const initLoginState: LoginState = {
  loginInfo: null,
};

const _reducer = createReducer(
  initLoginState,
  on(loadLoginStart, () => {
    return { loginInfo: null };
  }),
  on(loadLoginSuccess, (state: LoginState, { ILoginVo }: { ILoginVo: ILoginVo }) => {
    return { loginInfo: { ...state.loginInfo, ...ILoginVo } };
  })
);

export const loginReducer = (state: LoginState = initLoginState, action: Action) => {
  return _reducer(state, action);
};
