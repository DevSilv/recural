const { test } = require("../../../../test-runners/js/test");
const {
    computeGreatestCommonDivisorEuclideanAlgorithm,
    computeGreatestCommonDivisorEuclideanAlgorithm2
} = require("./compute-greatest-common-divisor");

test(
    res =>
        console.log(`computeGreatestCommonDivisorEuclideanAlgorithm: ${res}`),
    [
        () => computeGreatestCommonDivisorEuclideanAlgorithm(1, 1, 0)[0] === 1,
        () =>
            computeGreatestCommonDivisorEuclideanAlgorithm(1, 100, 0)[0] === 1,
        () =>
            computeGreatestCommonDivisorEuclideanAlgorithm(100, 1, 0)[0] === 1,
        () =>
            computeGreatestCommonDivisorEuclideanAlgorithm(1870, 4389, 0)[0]
            === 11,
        () =>
            computeGreatestCommonDivisorEuclideanAlgorithm(33263, 215441, 0)[0]
            === 29
    ]
);

test(
    res => {
        console.log(`computeGreatestCommonDivisorEuclideanAlgorithm2: ${res}`);
    },
    [
        () => computeGreatestCommonDivisorEuclideanAlgorithm2(1, 1, 0)[0] === 1,
        () =>
            computeGreatestCommonDivisorEuclideanAlgorithm2(1, 100, 0)[0] === 1,
        () =>
            computeGreatestCommonDivisorEuclideanAlgorithm2(100, 1, 0)[0] === 1,
        () =>
            computeGreatestCommonDivisorEuclideanAlgorithm2(1870, 4389, 0)[0]
            === 11,
        () =>
            computeGreatestCommonDivisorEuclideanAlgorithm2(33263, 215441, 0)[0]
            === 29
    ]
);