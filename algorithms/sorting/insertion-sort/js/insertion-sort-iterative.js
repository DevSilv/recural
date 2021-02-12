/**
 * @param {number[]} arr
 * @returns {number[]}
 */
exports.insertionSortIterative
    = arr => {
        const res = arr.slice();
        let cur = 1;

        while (cur < res.length) {
            let y = cur;

            while (y >= 1 && res[y - 1] > res[y]) {
                const tmp = res[y];
                res[y] = res[y - 1];
                res[y - 1] = tmp;
                --y;
            }

            ++cur;
        }

        return res;
    };
