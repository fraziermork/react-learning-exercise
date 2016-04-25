import React from 'react';
import Note from './Note.jsx';

export default ({notes}) => {
  return (
    <ul>
      {notes.map((note) => {
        return <li key={note.id}>
          <Note task={note.task}></Note>
        </li>;
      })}
    </ul>
  );
};
