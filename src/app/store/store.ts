import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { counterReducer, loginReducer, LoginState, menusReducer, MenusState } from './reducers';
// 项目中全部的状态
export interface State {
  menus: MenusState;
  count: number;
  login: LoginState;
}

// 全部的reducer函数
export const reducers: ActionReducerMap<State> = {
  menus: menusReducer,
  count: counterReducer,
  login: loginReducer,
};

export function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  return localStorageSync({
    keys: Object.keys(reducers),
    // 重新给本地存储的自定义key
    storageKeySerializer: (key: string) => `admin_${key}`,
    // 刷新页面同步到页面中
    rehydrate: true,
    // 默认是存储在localStorage
    storage: window.sessionStorage,
  })(reducer);
}
export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer];
