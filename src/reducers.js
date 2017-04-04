import { LIST_IDEAS } from './actions';

export default (state = { list:[] }, action) => {
  switch (action.type) {
    case LIST_IDEAS:
      return Object.assign({}, state, {
        list: action.ideas
      });
    default:
      return state;
  }
};
