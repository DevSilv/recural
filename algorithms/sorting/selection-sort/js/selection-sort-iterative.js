/**
 * @param {number[]} arr
 * @returns {number[]}
 */
exports.selectionSortIterative
    = arr => {
        const res = arr.slice();
        let cur = 0;

        while (cur < res.length) {
            let k = cur + 1;
            let min_idx = cur;

            while (k < res.length) {
                if (res[k] < res[min_idx]) {
                    min_idx = k;
                }

                ++k;
            }

            const tmp = res[cur];
            res[cur] = res[min_idx];
            res[min_idx] = tmp;

            ++cur;
        }

        return res;
    };
