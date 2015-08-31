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
      noPreviewStyle: this.props.isEdit? hideStyle :showStyle ,
      isEdit: this.props.isEdit?this.props.isEdit:true,
      value: 'Hello Markdwon \n ========== \n >' + ' This is reactjs + babel + pure example \n\n ### Hello Markdown'
    };
  },
  changeEdit: function() {
      console.log();
    if (this.state.isEdit) {
      this.setState({
        isEdit: !this.state.isEdit,
        previewStyle: showStyle,
        noPreviewStyle: hideStyle
      });
    } else {
      this.setState({
        isEdit: !this.state.isEdit,
        previewStyle: hideStyle,
        noPreviewStyle: showStyle
      });
    }
  },
  typeWord: function(e) {
      
  },
  handleChange: function() {
    this.setState({
      value: React.findDOMNode(this.refs.textarea).value
    });
  },
  render: function() {
    return (
      <div className="MarkdownEditor">
        <Button onClick={this.changeEdit} bsStyle={this.state.isEdit?"primary":""} type="button">Edit</Button>
        <div className="pure-group">
          <textarea className="pure-input-1-2" defaultValue={this.state.value} name="mkinput" onChange={this.handleChange} onKeyUp={this.typeWord} ref="textarea" style={this.state.previewStyle}/>
        </div>
        <div className="content" dangerouslySetInnerHTML={{
          __html: Marked(this.state.value, {
            sanitize: true
          })
      }} style={this.state.noPreviewStyle}/>
      </div>
    );
  }
});
