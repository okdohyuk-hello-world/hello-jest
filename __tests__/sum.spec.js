const sum = require('../sum');

it('1 + 2 의 결과는 3이다.', () => {
    expect(sum(1, 2)).toBe(3);
});

/*
test('1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
});*/
