import React from 'react';
import { connect } from 'react-redux';

export default class Fields extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      titleEdit: false,
      bodyEdit: false,
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
    this.setState({ bodyEdit: !this.state.bodyEdit });
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
    this.props.edit({
      ...this.props.idea,
      title: (this.state.titleEdit ? this.state.title : this.props.idea.title),
      body: (this.state.bodyEdit ? this.state.body : this.props.idea.body)
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
  edit: React.PropTypes.func.isRequired
};
