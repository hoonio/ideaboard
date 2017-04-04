import { LIST_IDEAS, ADD_IDEA } from './actions';

export default (state = { list:[] }, action) => {
  switch (action.type) {
    case LIST_IDEAS:
      return Object.assign({}, state, {
        list: action.ideas
      });
    case ADD_IDEA:
      return Object.assign({}, state, {
        list: [
          ...state.list,
          action.newIdea
        ]
      });
    default:
      return state;
  }
};
