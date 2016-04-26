import React from 'react';
import Note from './Note.jsx';

export default ({notes, onEdit, onDelete}) => {
  //this does the equivalent of angular's ng-repeat
  return (
    <ul>
      {notes.map((note) => {
        return (
          <li key={note.id}>
            <Note 
              task={note.task}
              onEdit={onEdit.bind(null, note.id)}
              onDelete={onDelete.bind(null, note.id)}
            ></Note>
          </li>
        );
      })}
    </ul>
  );
};
