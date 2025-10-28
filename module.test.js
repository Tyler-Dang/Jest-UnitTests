// module.test.js
import mut from './module.js'; // MUT = Module Under Test

// Tests for sum function
describe('sum function', () => {
  test('Testing sum -- success', () => {
    const expected = 30;
    const got = mut.sum(12, 18);
    expect(got).toBe(expected);
  });

  test('Testing sum with negative numbers', () => {
    const expected = -5;
    const got = mut.sum(-10, 5);
    expect(got).toBe(expected);
  });

  test('Testing sum with zero', () => {
    const expected = 10;
    const got = mut.sum(10, 0);
    expect(got).toBe(expected);
  });

  test('Testing sum with decimals', () => {
    const expected = 7.5;
    const got = mut.sum(3.2, 4.3);
    expect(got).toBeCloseTo(expected);
  });
});

// Tests for div function
describe('div function', () => {
  test('Testing div -- basic division', () => {
    const expected = 5;
    const got = mut.div(10, 2);
    expect(got).toBe(expected);
  });

  test('Testing div with decimals', () => {
    const expected = 2.5;
    const got = mut.div(5, 2);
    expect(got).toBe(expected);
  });

  test('Testing div with negative numbers', () => {
    const expected = -2;
    const got = mut.div(-10, 5);
    expect(got).toBe(expected);
  });

  test('Testing div by zero returns Infinity', () => {
    const got = mut.div(10, 0);
    expect(got).toBe(Infinity);
  });

  test('Testing div zero by number', () => {
    const expected = 0;
    const got = mut.div(0, 5);
    expect(got).toBe(expected);
  });
});

// Tests for containsNumbers function
describe('containsNumbers function', () => {
  test('Testing containsNumbers -- string with numbers', () => {
    const got = mut.containsNumbers("hello123");
    expect(got).toBe(true);
  });

  test('Testing containsNumbers -- string without numbers', () => {
    const got = mut.containsNumbers("hello");
    expect(got).toBe(false);
  });

  test('Testing containsNumbers -- string with single digit', () => {
    const got = mut.containsNumbers("test5");
    expect(got).toBe(true);
  });

  test('Testing containsNumbers -- empty string', () => {
    const got = mut.containsNumbers("");
    expect(got).toBe(false);
  });

  test('Testing containsNumbers -- only numbers', () => {
    const got = mut.containsNumbers("12345");
    expect(got).toBe(true);
  });

  test('Testing containsNumbers -- string with space and numbers', () => {
    const got = mut.containsNumbers("hello 123");
    expect(got).toBe(true);
  });

  test('Testing containsNumbers -- string with only spaces', () => {
    const got = mut.containsNumbers("   ");
    expect(got).toBe(false);
  });

  test('Testing containsNumbers -- string with special characters', () => {
    const got = mut.containsNumbers("!@#$%^&*()");
    expect(got).toBe(false);
  });

  test('Testing containsNumbers -- string starting with number', () => {
    const got = mut.containsNumbers("1hello");
    expect(got).toBe(true);
  });
});