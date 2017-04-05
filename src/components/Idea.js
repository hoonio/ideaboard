import React from 'react';
import Fields from './Fields';

export default class Idea extends React.Component {
  static propTypes = {
    idea: React.PropTypes.object.isRequired,
    del: React.PropTypes.func.isRequired,
    edit: React.PropTypes.func.isRequired
  }

  render() {
    const { idea, del, edit } = this.props;
    return (
      <div>
        <h2>{idea.id}</h2>
        <p>{idea.created_date}</p>
        <Fields idea={idea} edit={edit} />
        <button onClick={del} >Delete</button>
      </div>
    );
  }
}
