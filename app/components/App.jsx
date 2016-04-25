import React from 'react';
import uuid from 'node-uuid';
import Notes from './Notes.jsx';

export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      notes: [
        { 
          id: uuid.v4(),
          task: 'task 1'
        }, 
        {
          id: uuid.v4(),
          task: 'task 2'
        },
        {
          id: uuid.v4(),
          task: 'task 3'
        }, 
        {
          id: uuid.v4(),
          task: 'task 4'
        }
      ]
    };
  }
  
  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
      }])
    });
  };
  
  render() {
    let notes = this.state.notes;
    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes 
          notes={notes} 
          onEdit={this.editNote}
          onDelete={this.deleteNote}
          ></Notes>  
      </div>
    );
  }
  
  editNote = (id, task) => {
    if(!task.trim()){
      return;
    }
    let notes = this.state.notes.map((note) => {
      if(note.id === id && task) {
        note.task = task;
      }
      return note;
    });
    this.setState({notes});
  };
  
  deleteNote = (id, e) => {
    console.log('got here');
    e.stopPropagation();
    
    this.setState({
      notes: this.state.notes.filter((note) => {
        return note.id !== id;
      })
    });
  };
  
}
