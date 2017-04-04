import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import { getIdeas, createIdea } from '../../actions';

class HomePage extends React.Component {

  componentDidMount() {
    this.props.getIdeas();
  }

  createIdea = () => this.props.createIdea();

  render() {
    const ideaList = this.props.ideas.map((idea) => <div key={idea.id}>{idea.id}</div>);
    return (
      <div>
        <h1>React-Redux Boilerplate</h1>
        <div>{ideaList}</div>
        <button onClick={this.createIdea}>Create</button>
      </div>
    );
  }
}

HomePage.propTypes = {
  ideas: React.PropTypes.array.isRequired,
  getIdeas: React.PropTypes.func.isRequired,
  createIdea: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return { ideas: state.ideas };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getIdeas: () => {
       dispatch(getIdeas());
    },
    createIdea: () => { dispatch(createIdea()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
