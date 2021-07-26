import { createReducer, on, Action } from '@ngrx/store';
import { IMenus } from 'src/app/utils';
import { MenusVo } from 'src/app/vo/menus/menus.vo';
import { loadMenusFail, loadMenusStart, loadMenusSuccess } from '../actions';

export interface MenusState {
  menusList: IMenus[];
}

export const initMenusState: MenusState = {
  menusList: [],
};

const _reducer = createReducer(
  initMenusState,
  on(loadMenusStart, () => {
    return { menusList: [] };
  }),
  on(loadMenusSuccess, (state: MenusState, { menusVo }: { menusVo: MenusVo }) => {
    console.log(menusVo, '获取到的菜单');
    return { menusList: [...state.menusList, ...menusVo.result] };
  }),
  on(loadMenusFail, () => {
    return { menusList: [] };
  })
);

export const menusReducer = (state: MenusState = initMenusState, action: Action) => {
  return _reducer(state, action);
};
