function sum(a, b) {
    return a + b;
};

function sumOf(numbers) {
    let result = 0;
    numbers.forEach((number) => result += number);
    return result;
};

// 각각 내보내기
exports.sum = sum;
exports.sumOf = sumOf;