import './style.css';

import React    from 'react';
import ReactDom from 'react-dom';
import App      from './components/App.jsx';
import alt      from './libs/alt';


/*

// these are complicated to mock for testing
// import storage  from './libs/storage';
// import persist  from './libs/persist';
// persist(alt, storage, 'app');

*/

ReactDom.render(<App />, document.getElementById('app'));
