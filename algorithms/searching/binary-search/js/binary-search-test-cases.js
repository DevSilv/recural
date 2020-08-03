const { test } = require("../../../../test-runners/js/test");
const { binarySearch } = require("./binary-search");

/**
 * @todo Add test cases for duplicate elements as soon as it will be clear
 *     to me what index should binary search return in such cases
 */
test(
    res => {
        console.log(`binarySearch: ${res}`);
    },
    [
        () => binarySearch([0, 1, 2, 3, 4, 5, 6, 7], 0, 0, 7) === 0,
        () => binarySearch([0, 1, 2, 3, 4, 5, 6], 5, 0, 6) === 5,
        () => binarySearch([], 0, 0, -1) === undefined,
        () => binarySearch([0, 1, 2, 3, 4, 5, 6, 7], 10, 0, 7) === undefined
    ]
);