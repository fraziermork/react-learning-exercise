'use strict';

jest.unmock(__dirname + '/../app/sum');

describe('TESTING WITH JEST', () => {
  it('should be able to add numbers', () => {
    const sum = require(__dirname + '/../app/sum');
    expect(sum(1, 2)).toEqual(3);
  });
});
