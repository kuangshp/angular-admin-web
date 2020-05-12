import { createReducer, on, Action } from '@ngrx/store';
import { toggleMenu } from './../actions';

export interface MenuCollapsedState {
  isCollapsed: boolean;
}
export const initStateMenuCollapsed: MenuCollapsedState = {
  isCollapsed: false,
}

const reducer = createReducer(
  initStateMenuCollapsed,
  on(toggleMenu, (state) => {
    return ({ isCollapsed: !state.isCollapsed });
  }),
)


export function toggleMenuReducer(state: MenuCollapsedState, action: Action) {
  return reducer(state, action);
}
