import {stringLength, reverseString, Calculator, capitalizeString} from './sum.js'

test('gives length of a string', () => {
  expect(stringLength("umarah")).toBe(6);
  expect(() => {
    stringLength('This is an out of range string length');
  }).toThrow();
});

test('expect test to be tset', () => {
  expect(reverseString('Test')).toBe('tseT');
});

const calculatorobj1=new Calculator(5,6);
const calculatorobj2=new Calculator(0,5);
const calculatorobj3=new Calculator(7,7);
const calculatorobj4=new Calculator(7,0);

describe("Testing Calculator ", () => {
  test("Testing Addition", () => {
    expect(calculatorobj1.add()).toBe(11);
    expect(calculatorobj2.add()).toBe(5);
    expect(calculatorobj3.add()).toBe(14);
    expect(calculatorobj4.add()).toBe(7);

  });

  test("Testing Subtraction", () => {
    expect(calculatorobj1.subtract()).toBe(-1);
    expect(calculatorobj2.subtract()).toBe(-5);
    expect(calculatorobj3.subtract()).toBe(0);
    expect(calculatorobj4.subtract()).toBe(7);

  });

  test("Testing Multiplication", () => {
    expect(calculatorobj1.multiply()).toBe(30);
    expect(calculatorobj2.multiply()).toBe(0);
    expect(calculatorobj3.multiply()).toBe(49);
    expect(calculatorobj4.multiply()).toBe(0);

  });

  test("Testing division", () => {
    expect(calculatorobj1.divide()).toBe(0.83);
    expect(calculatorobj2.divide()).toBe(0);
    expect(calculatorobj3.divide()).toBe(1);
    expect(calculatorobj4.divide()).toBe(Infinity);

  });



})

test ("should returned first letter capitalized", () => {
  expect(capitalizeString("umarah")).toBe("Umarah");
});