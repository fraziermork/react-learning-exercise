import React from 'react';

export default class Note extends React.Component {
  //constructor for Note class
  constructor(props) { //not sure what else gets passed in, formatting, etc. 
    super(props); //attach the props to the React.Component prototype
    this.state = {
      editing: false
    };
  }
  
  //actually do the drawing
  render() {
    if(this.state.editing){
      return this.renderEdit();
    } else {
      return this.renderNote();
    }
  }
  
  //draws the initial note
  renderNote = () => {
    const onDelete = this.props.onDelete;
    return (
      <div onClick={this.edit}>
        <span>{this.props.task}</span>
        {onDelete ? this.renderDelete() : null}
      </div>
    );
  };
  
  //controls what gets shown when they click to edit
  renderEdit = () => {
    return (
      <input 
        type="text"
        autoFocus={true}
        defaultValue={this.props.task}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
        ref={ //not sure what this does
          (element) => element ? element.selectionStart = this.props.task.length : null
        }
      ></input>
    );
  };
  
  renderDelete = () => { //pass the delete function down the chain for individual notes to call
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
    if(this.props.onEdit){
      let newTaskText = e.target.value;
      this.props.onEdit(newTaskText);
      this.setState({
        editing: false
      });
    }
  };
  
  
  
}
