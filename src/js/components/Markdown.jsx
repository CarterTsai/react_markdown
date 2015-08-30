import React from 'react';
import Alert from 'react-bootstrap/lib/Alert';
import Marked from 'marked';
import Button from 'react-bootstrap/lib/Button';

var hideStyle = {
    display: 'none'
};

var showStyle = {
    marginTop: '20px',
    display: 'block'
};

export default React.createClass({
  propTypes: {
    isEdit: React.PropTypes.bool
  },
  getInitialState: function() {
    return {
      previewStyle: this.props.isEdit? showStyle: hideStyle,
      isEdit: this.props.isEdit,
      value: 'Hello Markdwon \n ========== \n >' + ' This is reactjs + babel + pure example \n\n ### Hello Markdown'
    };
  },
  changeEdit: function() {
    if (this.state.isEdit) {
      this.setState({
        isEdit: !this.state.isEdit,
        previewStyle: showStyle
      });
    } else {
      this.setState({
        isEdit: !this.state.isEdit,
        previewStyle: hideStyle
      });
    }
  },
  handleChange: function() {
    this.setState({
      value: React.findDOMNode(this.refs.textarea).value
    });
  },
  render: function() {
    return (
      <div className="MarkdownEditor">
        <Button onClick={this.changeEdit} bsStyle="primary" type="button">Edit</Button>
        <div className="pure-group">
          <textarea className="pure-input-1-2" defaultValue={this.state.value} name="mkinput" onChange={this.handleChange} ref="textarea" style={this.state.previewStyle}/>
        </div>
        <div className="content" dangerouslySetInnerHTML={{
          __html: Marked(this.state.value, {
            sanitize: true
          })
        }}/>
      </div>
    );
  }
});
