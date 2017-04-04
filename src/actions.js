import { dispatch } from 'react-redux';
import services from './components/common/services';

export const LIST_IDEAS = 'LIST_IDEAS';
export const ADD_IDEA = 'ADD_IDEA';

const listIdeas = (ideas) => ({
  type: LIST_IDEAS,
  ideas
});

const addIdea = (newIdea) => ({
  type: ADD_IDEA,
  newIdea
});

export const getIdeas = () => (dispatch) => dispatch(listIdeas(services.list()));

export const createIdea = () => (dispatch) => dispatch(addIdea(services.create()));
