/**
 * @param {number[]} arr
 * @param {number[]} prePvt
 * @param {number[]} postPvt
 * @param {number} pvtIdx
 * @param {number} start
 * @param {number} end
 * @param {number} cur
 */
const partition
    = (arr, prePvt, postPvt, pvtIdx, start, end, cur) =>
        cur > end
            ? [
                arr
                    .slice(0, start)
                    .concat(prePvt)
                    .concat(
                        [
                            arr[pvtIdx]
                        ]
                    ).concat(postPvt)
                    .concat(
                        arr.slice(end + 1, arr.length)
                    ),
                start + prePvt.length
            ]
            : cur === pvtIdx
                ? partition(arr, prePvt, postPvt, pvtIdx, start, end, cur + 1)
                : arr[cur] < arr[pvtIdx]
                    ? partition(
                        arr,
                        prePvt.concat(
                            [
                                arr[cur]
                            ]
                        ),
                        postPvt,
                        pvtIdx,
                        start,
                        end,
                        cur + 1
                    )
                    : partition(
                        arr,
                        prePvt,
                        postPvt.concat(
                            [
                                arr[cur]
                            ]
                        ),
                        pvtIdx,
                        start,
                        end,
                        cur + 1
                    );

/**
 * @param {number[]} arr
 * @param {number} start
 * @param {number} end
 * @description Note: I do not see a way to express the function
 *     using only expressions and no statements while preserving
 *     its intuitiveness. For example, replacing the invokation of the partition
 *     function with additional helper parameters would be less intuitive: firstly,
 *     it would demand that the user invokes the partition function once
 *     before invoking the quicksort function, and passes its result
 *     in the invokation of the quicksort function; secondly, it the flow
 *     of control would change — the recursive invokations of the quicksort
 *     function would acquire the array arr partitioned BEFORE the invokation
 *     of the calling function (i.e., the calling function needs to acquire
 *     somewhat the rearranged array arr before it could be invoked, and pass
 *     that array to the recursive invokations of itself).
 */
exports.quicksort
    = (arr, start, end) => {
        if (start > end) {
            return arr;
        }

        let [
            newArr,
            pvtIdxAfterRearr
        ] = partition(
            arr,
            [],
            [],
            Math.floor(
                (start + end) / 2
            ),
            start,
            end,
            start
        );

        newArr = exports.quicksort(newArr, start, pvtIdxAfterRearr - 1);
        newArr = exports.quicksort(newArr, pvtIdxAfterRearr + 1, end);

        return newArr;
    };

// =============================================================================

/**
 * @param {number[]} arr
 * @param {number} start
 * @param {number} end
 * @param {number} cur
 * @param {number} pvtIdx
 * @param {number[]} prePvt
 * @param {number[]} postPvt
 * @returns {number[]}
 */
exports.quicksort2
    = (arr, start, end, cur, pvtIdx, prePvt, postPvt) =>
        start > end
            ? arr
            : cur <= end
                ? cur === pvtIdx
                    ? exports.quicksort2(
                        arr, start, end, cur + 1, pvtIdx, prePvt, postPvt
                    )
                    : arr[cur] < arr[pvtIdx]
                        ? exports.quicksort2(
                            arr,
                            start,
                            end,
                            cur + 1,
                            pvtIdx,
                            prePvt.concat(
                                [
                                    arr[cur]
                                ]
                            ),
                            postPvt
                        )
                        : exports.quicksort2(
                            arr,
                            start,
                            end,
                            cur + 1,
                            pvtIdx,
                            prePvt,
                            postPvt.concat(
                                [
                                    arr[cur]
                                ]
                            )
                        )
                : exports.quicksort2(
                    exports.quicksort2(
                        arr
                            .slice(0, start)
                            .concat(prePvt)
                            .concat(
                                [
                                    arr[pvtIdx]
                                ]
                            )
                            .concat(postPvt)
                            .concat(
                                arr.slice(end + 1, arr.length)
                            ),
                        start,
                        start + prePvt.length - 1,
                        start,
                        start,
                        [],
                        []
                    ),
                    start + prePvt.length + 1,
                    end,
                    start + prePvt.length + 1,
                    start + prePvt.length + 1,
                    [],
                    []
                );

// =============================================================================

const j = (...arrs) => [].concat(...arrs); // Join
const c = (arr, start, end) => arr.slice(start, end + 1); // Subarray
const ln = a => a.length; // Length
const q = (x, y) => x === y; // Strict equality

/**
 * @param {number[]} x
 * @param {number} s
 * @param {number} e
 * @param {number} i
 * @param {number} p
 * @param {number[]} b
 * @param {number[]} a
 * @returns {number[]}
 * @description
 *     - Purpose: only to check how concisely the function may be written retaining
 *     some readability
 *     - The parameters are in the same order as in case of the quicksort2 function
 *     - Max. line count: 80 characters
 */
const qs
    = (x, s, e, i, p, b, a) =>
        s > e
            ? x
            : i <= e
                ? q(i, p)
                    ? qs(x, s, e, i + 1, p, b, a)
                    : x[i] < x[p]
                        ? qs(x, s, e, i + 1, p, j(b, x[i]), a)
                        : qs(x, s, e, i + 1, p, b, j(a, x[i]))
                : qs(
                    qs(
                        j(c(x, 0, s - 1), b, [x[p]], a, c(x, e + 1, ln(x) - 1)),
                        s,
                        s + ln(b) - 1,
                        s,
                        s,
                        [],
                        []
                    ),
                    s + ln(b) + 1,
                    e,
                    s + ln(b) + 1,
                    s + ln(b) + 1,
                    [],
                    []
                );