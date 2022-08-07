const { sum, sumOf } = require('../sum');

describe('sum', () => {
    it('calculates 1 + 2', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('sum all numbers', () => {
        const numbers = [1, 2, 3];
        expect(sumOf(numbers)).toBe(6);
    });
});

/*it('1 + 2 의 결과는 3이다.', () => {
    expect(sum(1, 2)).toBe(3);
});*/

/*
test('1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
});*/
