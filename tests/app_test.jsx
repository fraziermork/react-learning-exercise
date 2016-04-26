'use strict';

import React from 'react';
import {
  renderIntoDocument, 
  findRenderedDOMComponentWithClass, 
  findRenderedDOMComponentWithTag,
  findRenderedDOMComponentWithType,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import assert from 'assert';
import App from '../app/components/App.jsx';
import Notes from '../app/components/Notes.jsx';

describe('App.jsx', () => {
  it('should let you add an item', () => {
    let renderedApp = renderIntoDocument(
      <App />
    );
    let addButton = findRenderedDOMComponentWithTag(renderedApp, 'button');
    assert.equal(addButton.textContent, '+');
    Simulate.click(addButton);
    let renderedLis = scryRenderedDOMComponentsWithTag(renderedApp, 'li');
    assert.equal(renderedLis.length, 1);
  });
  
});
