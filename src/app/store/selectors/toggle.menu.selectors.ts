import { createSelector } from '@ngrx/store';

import { MenuCollapsedState } from '../reducers/toggle.menu.reducer';

const selectPlayerStates = (state: MenuCollapsedState) => state;

export const getCurrentCollapsed = createSelector(selectPlayerStates, (state: MenuCollapsedState) => state.isCollapsed);
