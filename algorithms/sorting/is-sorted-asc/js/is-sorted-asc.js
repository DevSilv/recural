/**
 * @template T
 * @callback IsGreaterFn
 * @param {T} firstElem
 * @param {T} secondElem
 * @returns {boolean}
 */

/**
 * @template T
 * @param {IsGreaterFn<T>} isGreaterFn
 * @param {T[]} arr
 * @param {number} cur
 * @returns {boolean}
 */
exports.isSortedAsc
    = (isGreaterFn, arr, cur) =>
        arr.length < 2 || cur === arr.length - 1
            ? true
            : isGreaterFn(arr[cur], arr[cur + 1])
                ? false
                : exports.isSortedAsc(isGreaterFn, arr, cur + 1);
