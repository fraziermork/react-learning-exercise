'use strict';
import React from 'react';
import {
  renderIntoDocument, 
  findRenderedDOMComponentWithClass
} from 'react-addons-test-utils';
import assert from 'assert';


describe('add', () => {
  it('adds', () => {
    assert.equal(1 + 1, 2);
  });
});
