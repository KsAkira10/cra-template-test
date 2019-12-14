import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { exampleEpic, exampleReducers } from './example';

export const rootEpic = combineEpics(
  exampleEpic
);
export const rootReducer = combineReducers({
  ...exampleReducers
});