const expect= require('expect');

const {isRealString} = require('./validation');

describe ('isRealString', () => {
  it('should reject non-string values', () => {
    let str = '';
    let result = isRealString(str);
    expect(result).toBe(false);
  });

  it('shoul reject string with only spaces', () => {
    let str = '     ';
    let result = isRealString(str);
    expect(result).toBe(false);
  });

  it('should allow strings with non-space characters', () => {
    let str = '   sdfdf   ';
    let result = isRealString(str);
    expect(result).toBe(true);
  });
});