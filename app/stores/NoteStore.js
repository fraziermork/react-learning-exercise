import uuid         from 'node-uuid';
import alt          from '../libs/alt';
import NoteActions  from '../actions/NoteActions';

class NoteStore {
  
  constructor() {
    this.bindActions(NoteActions); //how does this work? We are defining that actions exist one place, then binding them to this store, and only then do we define them somehow
    this.notes = [];
  }
  
  create(note) {
    const notes = this.notes;
    note.id = uuid.v4(); //generate an id for the new note
    this.setState({ //use setstate instead of directly changing this.notes for clarity, debugging
      notes: notes.concat(note)
    });
  }
  
  update(updatedNote) {
    let notes = this.notes.map((note) => {
      if(note.id === updatedNote.id) {
        return Object.assign({}, note, updatedNote); //using a blank target obj to avoid mutating the note object
      } else {
        return note;
      }
    });
    this.setState({notes}); //es6 property shorthand syntax
  }
  
  delete(id) {
    this.setState({
      notes: this.notes.filter((note) => {
        return note.id !== id;
      })
    });
  }

}

export default alt.createStore(NoteStore, 'NoteStore');
