import * as func from "./func";

test('capitilize first letter', () => {
  expect(func.capitalize('word')).toBe('Word');
});

test('reverseString', () => {
  expect(func.reverseString('12What')).toBe('tahW21');
});


describe('calculator tests', () => {
    test('adds two numbers', () => {
        const calc = func.calculator(2, 10);
        expect(calc.add()).toBe(12);
    });

    test('subtracts one number from another', () => {
        const calc = func.calculator(2, 10);
        expect(calc.substract()).toBe(-8);
    });

    test('multiplies two numbers', () => {
        const calc = func.calculator(2, 10);
        expect(calc.multiply()).toBe(20);
    });

    test('divides two numbers', () => {
        const calc = func.calculator(2, 10);
        expect(calc.divide()).toBe(0.2);
    });

    test('handles division by zero', () => {
        const calc = func.calculator(2, 0);
        expect(calc.divide()).toBe('Error: Division by zero');
    });
});

test('caesarCipter', () => {
  expect(func.cipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('analize array', () => {
    const object = func.analyzeArray([1, 8, 3, 4, 2, 6]);
    const expected = {
        average: 4,
        min: 1,
        max: 8,
        length: 6
    };
    expect(object).toEqual(expected);
});
