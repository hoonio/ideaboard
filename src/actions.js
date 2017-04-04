import { dispatch } from 'react-redux';
import services from './components/common/services';

export const LIST_IDEAS = 'LIST_IDEAS';

const listIdeas = (ideas) => ({
  type: LIST_IDEAS,
  ideas
});

export const getIdeas = () => (dispatch) => dispatch(listIdeas(services.list()));
