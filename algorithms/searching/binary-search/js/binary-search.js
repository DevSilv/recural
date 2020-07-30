/**
 * @function
 * @param {number[]} arr An sorted array of real numbers
 * @param {number} elem A real number
 * @param {number} start Always 0
 * @param {number} end Always arr.length - 1
 * @returns {undefined|number} undefined or an integer >= 0 and < arr.length
 */
exports.binarySearch
    = (arr, elem, start, end) =>
        end < start
            ? undefined
            : elem === arr[Math.floor((start + end) / 2)]
                ? Math.floor((start + end) / 2)
                : elem < arr[Math.floor((start + end) / 2)]
                    ? exports.binarySearch(
                        arr, elem, start, Math.floor((start + end) / 2) - 1
                    )
                    : exports.binarySearch(
                        arr, elem, Math.floor((start + end) / 2) + 1, end
                    );