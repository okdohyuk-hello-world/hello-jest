const stats = require('../stats');

describe('stats', () => {
    describe('median', () => {
        it('sorts the array', () => {
            expect(stats.sort([5, 4, 1, 2, 3])).toEqual([1, 2, 3, 4, 5]);
        });
    });
});