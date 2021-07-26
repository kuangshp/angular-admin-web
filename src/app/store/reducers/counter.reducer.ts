import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, add } from '../actions/counter.action';

export const initialState: number = 0;

// 一个纯函数用来修改state
const _counterReducer = createReducer(
  initialState,
  on(increment, (state: number) => state + 1),
  on(decrement, (state: number) => state - 1),
  on(add, (state: number, { count }) => {
    return state + count;
  }),
  on(reset, () => 0)
);

export function counterReducer(state: number = initialState, action: Action): number {
  return _counterReducer(state, action);
}
