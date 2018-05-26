const expect = require('expect');
const {isRealString} = require('./validation');
// import isRealString
describe('isRealString tests', () => {
  it('should reject non-string values', () => {
    expect(isRealString(1234534)).toBeFalsy();
  });

  it('should reject string with only spaces', () => {
    expect(isRealString('    ')).toBeFalsy();
  });
  
  it('should allow strings with non-space characters', () => {
    expect(isRealString('Mike3d')).toBeTruthy();
  });
});
