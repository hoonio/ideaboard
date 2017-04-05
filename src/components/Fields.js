import React from 'react';
import { connect } from 'react-redux';

import { updateIdea } from '../actions';

class Fields extends React.Component {

  constructor(props) {
    super(props);
    this.setState({
      titleEdit: false,
      bodyEdit: false
    })
  }

  componentDidMount() {
    this.setState({
      title: this.props.idea.title ? this.props.idea.title : 'Add title',
      body: this.props.idea.body ? this.props.idea.body : 'Add description'
    });
  }

  toggleTitleField = () => {
    console.log('toggle title')
    this.setState({ titleEdit: !this.state.titleEdit });
  }

  toggleBodyField = () => {
    console.log('toggle body')
    this.setState({ titleEdit: !this.state.bodyEdit });
  }

  onChangeTitle = (event) => {
    this.setState({ title: event.currentTarget.value });
    console.log(this.state);
  }

  onChangeBody = (event) => {
    this.setState({ body: event.currentTarget.value });
  }

  submitOnBlur = () => {
    console.log('Sending ' + this.state.title + this.state.body);
    this.props.updateIdea({
      ...this.props.idea,
      title: this.state.title,
      body: this.state.body
    })
    this.setState({ titleEdit: false, bodyEdit: false });
  }

  render() {
    return (
      <div>
        {this.state.titleEdit ?
          <input type="text" placeholder={this.state.title} onChange={this.onChangeTitle} onBlur={this.submitOnBlur} />
        :
          <h2 onClick={this.toggleTitleField}>{this.state.title}</h2>
        }
        {this.state.bodyEdit ?
          <input type="text" placeholder={this.state.body} name="body" onChange={this.onChangeBody} onBlur={this.submitOnBlur} />
        :
          <p onClick={this.toggleBodyField}>{this.state.body}</p>
        }
      </div>
    );
  }
}

Fields.propTypes = {
  idea: React.PropTypes.object.isRequired,
  updateIdea: React.PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateIdea: (idea) => { dispatch(updateIdea(idea)); }
  };
};

export default connect(mapDispatchToProps)(Fields);
