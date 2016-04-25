import React from 'react';
import Note from './Note.jsx';

export default ({notes, onEdit}) => {
  return (
    <ul>
      {notes.map((note) => {
        return <li key={note.id}>
          <Note 
            task={note.task}
            onEdit={onEdit.bind(null, note.id)}
            ></Note>
        </li>;
      })}
    </ul>
  );
};
