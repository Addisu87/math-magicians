import operate from '../logic/operate';

describe('correct result is displayed', () => {
  it('operator return correct sum', () => {
    const result = operate('7', '4', '+');
    expect(result).toEqual('11');
  });
  it('operator return correct product', () => {
    const result = operate('7', '4', 'x');
    expect(result).toEqual('28');
  });
});
