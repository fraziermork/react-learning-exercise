import AltCont      from 'alt-container';
import React        from 'react';
import Notes        from './Notes.jsx';
import NoteActions  from '../actions/NoteActions';
import NoteStore    from '../stores/NoteStore';

export default class App extends React.Component {
  
  render() {
    return (
      <div>
        <button onClick={this.addNote}>+</button>
        
        <AltCont
          stores={[NoteStore]}
          inject={{
            notes: () => NoteStore.getState().notes
          }} 
        >
          
          <Notes 
            onEdit={this.editNote}
            onDelete={this.deleteNote}
            >
          </Notes>  

        </AltCont>
        </div>
      );
    }
  
  addNote = () => {
    NoteActions.create({task: 'New task'});
  };
  
  editNote = (id, task) => {
    if(!task.trim()) {
      return;
    }
    NoteActions.update({id, task});
  };
  
  deleteNote = (id, e) => {
    e.stopPropagation();
    NoteActions.delete(id);
  };
  
}
