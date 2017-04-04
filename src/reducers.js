import { LIST_IDEAS, ADD_IDEA } from './actions';

export default (state = [], action) => {
  switch (action.type) {
    case LIST_IDEAS:
      return action.ideas;
    case ADD_IDEA:
      return [ ...state, action.newIdea ];
    default:
      return state;
  }
};
