// myFunction.test.js

const myFunction = require('./myFunction');

test('myFunction should not throw a console error', () => {
    const consoleSpy = jest.spyOn(console, 'error');
    myFunction(); // Call the function that you want to test
    expect(consoleSpy).not.toHaveBeenCalled();
});