import { Action } from '@ngrx/store';

export enum AppActionTypes {
  CounterIncrement = '[App] Counter Increment',
  CounterDecrement = '[App] Counter Decrement'
}

export class CounterIncrementAction implements Action {
  readonly type = AppActionTypes.CounterIncrement;
  constructor(public payload: { incrementBy: number }) {}
}

export class CounterDecrementAction implements Action {
  readonly type = AppActionTypes.CounterDecrement;
  constructor(public payload: { decrementBy: number }) {}
}

export type AppActions = CounterIncrementAction & CounterDecrementAction;
