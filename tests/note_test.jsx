'use strict';

import React from 'react';
import {
  renderIntoDocument, 
  findRenderedDOMComponentWithClass, 
  findRenderedDOMComponentWithTag,
  findRenderedDOMComponentWithType,
  Simulate
} from 'react-addons-test-utils';
import assert from 'assert';
import Note from '../app/components/Note.jsx';

describe('Note.jsx', () => {
  
  it('executes onDelete on click', () => {
    var triggered = false;
    let value = 'value';
    const testClickFunction = () => {
      // console.log('hello world');
      triggered = true;
    };
    
    let noteInstance = renderIntoDocument(
      <Note 
        onEdit={testClickFunction} 
        onDelete={testClickFunction} 
        task={'test'}
      ></Note>
    )
    // let simulatedComponent = findRenderedDOMComponentWithTag(noteInstance, 'div');
    // assert.equal(simulatedComponent.textContent, 'test');
    
    let simButton = findRenderedDOMComponentWithTag(noteInstance, 'button');
    assert.equal(simButton.textContent, 'X');
    
    Simulate.click(simButton);
    assert.equal(triggered, true);
  });
  
  it('allows you to update the note text', () => {
    var triggered = false;
    let value = 'value';
    let testEditFunction = (text) => {
      // console.log('hello world');
      triggered = text;
    };
    let noteInstance = renderIntoDocument(
      <Note 
        onEdit={testEditFunction} 
        task={'test'}
      ></Note>
    )
    
    let simulatedComponent = findRenderedDOMComponentWithTag(noteInstance, 'div');
    assert.equal(simulatedComponent.textContent, 'test');
    Simulate.click(simulatedComponent);
    
    let inputField = findRenderedDOMComponentWithTag(noteInstance, 'input');
    inputField.value = 'hello world';
    Simulate.change(inputField);
    Simulate.keyDown(inputField, {
      key: 'Enter',
      keyCode: 13,
      which: 13
    });
    Simulate.blur(inputField);
    assert.equal(triggered, 'hello world');
    
  });
  
  
});
