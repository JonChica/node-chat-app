let expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'TestUser';
    let text = 'Content of text in testing';
    let message = generateMessage(from, text );
    expect(message.from).toBe(from, text);
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    let from = 'TestLocate';
    let latitude = 123;
    let longitude = 456;
    let url = 'https://www.google.com/maps?q=123,456';
    let locationMessage = generateLocationMessage (from, latitude, longitude);
    expect(locationMessage.from).toInclude(from, url);
    expect(locationMessage.createdAt).toBeA('number');
  });
});