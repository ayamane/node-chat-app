'use strict';

var expect = require('expect');

var {generateMessage} = require('./message');
var {generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = "joe";
    var text = "this is joe";
    var message = generateMessage(from, text);

    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate the correct location object', () => {
    var from = "andrew";
    var latitude = 123;
    var longitude = 45;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    var locationMsg = generateLocationMessage(from, latitude, longitude);
    expect(locationMsg.from).toBe(from);
    expect(locationMsg.url).toBe(url);
    expect(locationMsg).toInclude({from, url});
    expect(locationMsg.createdAt).toBeA('number');
  });
});
