/**
 * @callback Pred
 * @param {number} vt
 * @returns {boolean}
 */

/**
 * @callback GetNbVtsFn
 * @param {number} vt
 * @returns {number[]}
 */

/**
 * @param {Pred} pred
 * @param {GetNbVtsFn} getNbVtsFn
 * @param {number} curVt
 * @param {number[]} vVts
 * @param {number[]} unvVts
 * @returns {undefined|number}
 */
exports.depthFirstSearch
    = function (pred, getNbVtsFn, curVt, vVts, unvVts) {
        if (pred(curVt)) {
            return curVt;
        } else {
            const newUnvVts
                = getNbVtsFn(curVt)
                    .filter(vt => !unvVts.includes(vt))
                    .filter(vt => !vVts.includes(vt))
                    .concat(unvVts);

            if (newUnvVts.length === 0) {
                return undefined;
            } else {
                return exports.depthFirstSearch(
                    pred,
                    getNbVtsFn,
                    newUnvVts[0],
                    vVts.concat(
                        [
                            curVt
                        ]
                    ),
                    newUnvVts.slice(1)
                );
            }
        }
    };

// Unit tests

const mockGraph
    = new Map(
        [
            [
                0,
                [0, 1, 3, 5]
            ],
            [
                1,
                [1, 2, 4, 6]
            ],
            [
                2,
                [0, 1, 3, 5]
            ],
            [
                3,
                [1, 2, 4, 6]
            ],
            [
                4,
                [0, 1, 3, 5]
            ],
            [
                5,
                [1, 2, 4, 6]
            ],
            [
                6,
                [0, 1, 3, 5]
            ]
        ]
    );