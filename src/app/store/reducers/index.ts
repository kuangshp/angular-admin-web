import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { MenuCollapsedState, toggleMenuReducer } from './toggle.menu.reducer';


// 项目中全部的状态
export interface State {
  isCollapsed: MenuCollapsedState,
}

// 全部的reducer函数
export const reducers: ActionReducerMap<State> = {
  isCollapsed: toggleMenuReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
