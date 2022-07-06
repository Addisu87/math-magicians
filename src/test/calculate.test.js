import calculate from './__mocks__/calculate';

test('AC button', () => {
  const obj = { total: '0', next: '0', operation: '+' };
  const btn = 'AC';
  const expected = { total: null, next: null, operation: null };

  expect(calculate(obj, btn)).toStrictEqual(expected);
});

test('Number of button if there is an operation', () => {
  const obj = { total: '2', next: '0', operation: 'x' };
  const btn = '2';
  const expected = { total: '2', next: '2', operation: 'x' };

  expect(calculate(obj, btn)).toStrictEqual(expected);
});

test('test multiple operations', () => {
  let obj = { total: null, next: null, operation: null };
  const buttons = ['4', '+', '5', 'x', '2', '÷', '3', '='];
  buttons.forEach((btn) => {
    obj = { ...obj, ...calculate(obj, btn) };
  });
  const { total } = obj;
  expect(total).toEqual('6');
});
