import { createAction, props } from '@ngrx/store';
import { MenusVo } from 'src/app/vo/menus/menus.vo';

export enum MenusActionTypes {
  LOAD_MENUS_START = '开始获取菜单',
  LOAD_MENUS_SUCCESS = '成功获取菜单',
  LOAD_MENUS_FAIL = '获取菜单失败',
}
// 开始获取菜单
export const loadMenusStart = createAction(MenusActionTypes.LOAD_MENUS_START);

// 成功获取菜单
export const loadMenusSuccess = createAction(
  MenusActionTypes.LOAD_MENUS_SUCCESS,
  props<{ menusVo: MenusVo }>()
);

export const loadMenusFail = createAction(MenusActionTypes.LOAD_MENUS_FAIL);
