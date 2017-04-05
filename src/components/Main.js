import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import { getIdeas, createIdea, deleteIdea, updateIdea } from '../actions';
import Idea from './Idea';

class HomePage extends React.Component {

  componentDidMount() {
    this.props.getIdeas();
  }

  createIdea = () => this.props.createIdea();

  deleteIdea = (id) => this.props.deleteIdea(id);

  updateIdea = (idea) => {
    console.log(idea)
    return this.props.updateIdea(idea)};

  render() {
    console.log(this.props.ideas);
    const ideaList = this.props.ideas.map((idea, index) => {
      return <Idea idea={idea} key={index} del={() => this.deleteIdea(idea.id)} edit={(newIdea) => this.updateIdea(newIdea)} />
    });
    return (
      <div>
        <h1>Idea Board</h1>
        <button onClick={this.createIdea}>Create</button>
        <div>{ideaList}</div>
      </div>
    );
  }
}

HomePage.propTypes = {
  ideas: React.PropTypes.array.isRequired,
  getIdeas: React.PropTypes.func.isRequired,
  createIdea: React.PropTypes.func.isRequired,
  deleteIdea: React.PropTypes.func.isRequired,
  updateIdea: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return { ideas: state.ideas };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getIdeas: () => { dispatch(getIdeas()); },
    createIdea: () => { dispatch(createIdea()); },
    deleteIdea: (id) => { dispatch(deleteIdea(id)); },
    updateIdea: (idea) => { dispatch(updateIdea(idea)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
