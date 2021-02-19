exports.mySortIterative
    = arr => {
        const res = arr.slice();

        while (true) {
            let swapped = false;
            let k = 0;

            while (k < res.length) {
                let m = k + 1;

                while (m < res.length && res[k] <= res[m]) {
                    ++m;
                    ++k;
                }

                while (m < res.length && res[k] > res[m]) {
                    ++m;
                }

                if (k !== m - 1) {
                    const tmp = res[k];
                    res[k] = res[m - 1];
                    res[m - 1] = tmp;

                    k = m - 1;
                    swapped = true;
                }

                ++k;
            }

            if (swapped === false) {
                break;
            }
        }

        return res;
    };
