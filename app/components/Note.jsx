import React from 'react';

export default class Note extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      editing: false
    };
  }
  
  render(){
    if(this.state.editing){
      return this.renderEdit();
    } else {
      return this.renderNote();
    }
  }
  
  renderNote = () => {
    const onDelete = this.props.onDelete;
    return <div onClick={this.edit}>
      <span>{this.props.task}</span>
      {onDelete ? this.renderDelete() : null}
    </div>;
  };
  
  renderEdit = () => {
    return <input 
      type="text"
      autoFocus={true}
      defaultValue={this.props.task}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter}
      ref={
        (element) => element ? element.selectionStart = this.props.task.length : null
      }
      ></input>;
  };
  
  renderDelete = () => {
    return <button onClick={this.props.onDelete}>X</button>;
  };
  
  edit = () => {
    this.setState({
      editing: true
    });
  };
  
  checkEnter = (e) => {
    if(e.key === 'Enter'){
      this.finishEdit(e);
    }
  };
  
  finishEdit = (e) => {
    // console.log('finishEdit');
    if(this.props.onEdit){
      let newTaskText = e.target.value;
      this.props.onEdit(newTaskText);
      this.setState({
        editing: false
      });
    }
  };
  
  
  
}
// ({task}) => <div>{task}</div>;
