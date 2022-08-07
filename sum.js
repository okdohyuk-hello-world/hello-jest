function sum(a, b) {
    return a + b;
};

function sumOf(numbers) {
    return numbers.reduce((sumValue, currentValue) => sumValue + currentValue, 0);
};

// 각각 내보내기
exports.sum = sum;
exports.sumOf = sumOf;