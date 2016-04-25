import React from 'react';
import uuid from 'node-uuid';
// import Note from './Note.jsx';

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
        <ul>
          {notes.map((note) => {
            return <li key={note.id}>{note.task}</li>;
          })}
        </ul>
      </div>
    );
  }
  
  
}
