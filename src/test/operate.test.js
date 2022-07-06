import operate from './__mocks__/operate';

describe('correct result is displayed', () => {
  test('operator return correct sum', () => {
    const result = operate(7, 4, '+');
    expect(result).toEqual('11');
  });

  test('subtract one value from another', () => {
    const result = operate(9, 3, '-');
    expect(result).toEqual('6');
  });

  test('operator return correct product', () => {
    const result = operate(8, 2, 'x');
    expect(result).toEqual('16');
  });

  test('divide one value by another', () => {
    const result = operate(9, 3, '÷');
    expect(result).toEqual('3');
  });

  test('divide one value by another', () => {
    const result = operate(2, 0, '÷');
    expect(result).toEqual("Can't divide by 0.");
  });

  test('modulo one value by another', () => {
    const result = operate(5, 2, '%');
    expect(result).toEqual('1');
  });

  test('modulo one value by another', () => {
    const result = operate(2, 0, '%');
    expect(result).toEqual("Can't find modulo as can't divide by 0.");
  });
});
