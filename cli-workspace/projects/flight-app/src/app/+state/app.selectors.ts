import { createSelector } from '@ngrx/store';
import { State as StoreState } from './index';
import { State as AppState } from './app.reducer';

export function getAppState(store: StoreState): AppState {
  return store.app;
}

export const getCount = createSelector(
  getAppState,
  (state: AppState) => state.count
);
