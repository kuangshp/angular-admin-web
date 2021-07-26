import { createReducer, on, Action } from '@ngrx/store';
import { IMenus } from 'src/app/utils';
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
  on(loadMenusSuccess, (state: MenusState, { menusVo }: { menusVo: IMenus[] }) => {
    return { menusList: [...state.menusList, ...menusVo] };
  }),
  on(loadMenusFail, () => {
    return { menusList: [] };
  })
);

export const menusReducer = (state: MenusState = initMenusState, action: Action) => {
  return _reducer(state, action);
};
