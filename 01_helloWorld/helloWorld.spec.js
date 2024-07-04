const helloWorld = require('./helloWorld.js');

describe('Hello World', () => {
  test('diz "Hello, World!"', () => {
    expect(helloWorld()).toEqual('eae');
  });
});