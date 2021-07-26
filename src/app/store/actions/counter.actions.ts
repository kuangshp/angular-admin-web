import { createAction, props } from '@ngrx/store';

// 执行的动作
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const add = createAction('添加', props<{ count: number }>());
export const reset = createAction('[Counter Component] Reset');
