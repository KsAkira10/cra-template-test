import { combineEpics } from 'redux-observable';

export const Types = {
  // @@domain
  DOMAIN_ACTION: '@@domain/ACTION',
};

// Reducer
const domainReducer = (state = {
  error: false,
  success: false,
  data: {}
}, { type, payload }) => {
  switch (type) {
    case Types.DOMAIN_ACTION:
      return { ...state, ...payload, success: true };
    default:
      return state;
  }
};

// Action Creators
export const domainAction = (payload) => ({ type: Types.DOMAIN_ACTION, payload });

// Epics
const domainEpic = (action$) => action$.ofType(Types.DOMAIN_ACTION).pipe(
  // call service with observable return
);

export const exampleEpic = combineEpics(domainEpic);

export const exampleReducers = {
  domainState: domainReducer,
}