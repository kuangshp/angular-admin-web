import { createAction, props } from '@ngrx/store';
import { ILoginDto } from 'src/app/dto/login/login.dto';
import { LoginVo } from 'src/app/vo/login/login.vo';

export enum LoginActionTypes {
  LOAD_LOGIN_START = '开始登录',
  LOAD_LOGIN_SUCCESS = '登录成功',
  LOAD_LOGIN_FAIL = '登录失败',
}
export const loadLoginStart = createAction(LoginActionTypes.LOAD_LOGIN_START, props<ILoginDto>());

export const loadLoginSuccess = createAction(
  LoginActionTypes.LOAD_LOGIN_SUCCESS,
  props<{ loginVo: LoginVo }>()
);

export const loadLoginFail = createAction(LoginActionTypes.LOAD_LOGIN_FAIL);
