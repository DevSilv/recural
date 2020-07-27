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
exports.breadthFirstSearch
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
				return exports.breadthFirstSearch(
					pred,
					getNbVtsFn,
					newUnvVts[newUnvVts.length - 1],
					vVts.concat(
						[
							curVt
						]
					),
					newUnvVts.slice(0, newUnvVts.length - 1)
				);
			}
		}
	};