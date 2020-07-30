exports.Peg
	= class {
		/**
		 * @param {string} name
		 * @param {number[]} disksArr
		 */
		constructor(name, disksArr) {
			this.name = name;
			this.disksArr = disksArr;
		}
	};

/**
 * @param {exports.Peg} peg
 * @returns {exports.Peg}
 */
const getPegCopy
	= peg =>
		new exports.Peg(
			peg.name,
			peg.disksArr.slice()
		);

// =============================================================================

exports.toh
	= (n, stk, tmp, res) => {
		if (n === 0) {
			return;
		} else if (n === 1) {
			res.disksArr.unshift(
				stk.disksArr.shift()
			);
		} else {
			exports.toh(n - 1, stk, res, tmp);
			exports.toh(1, stk, tmp, res);
			exports.toh(n - 1, tmp, stk, res);
		}
	};

// =============================================================================

exports.State
	= class {
		/**
		 * @param {number} n
		 * @param {number} movesCount
		 * @param {exports.Peg} stk
		 * @param {exports.Peg} tmp
		 * @param {exports.Peg} res
		 */
		constructor(n, movesCount, stk, tmp, res) {
			this.n = n;
			this.movesCount = movesCount;
			this.stk = getPegCopy(stk);
			this.tmp = getPegCopy(tmp);
			this.res = getPegCopy(res);
		}
	};

/**
 * @param {exports.State} state
 * @returns {exports.State}
 */
const getStateCopy
	= state =>
		new exports.State(
			state.n,
			state.movesCount,
			state.stk,
			state.tmp,
			state.res
		);

/**
 * @param {exports.State} state
 * @param {string} pegName
 * @returns {exports.Peg}
 */
const findPeg
	= (state, pegName) =>
		state.stk.name === pegName
			? getPegCopy(state.stk)
			: state.tmp.name === pegName
				? getPegCopy(state.tmp)
				: getPegCopy(state.res);

/**
 * @param {exports.State} state
 * @param {exports.State} referenceState
 * @returns {exports.State}
 */
const reorderPegs
	= (state, referenceState) =>
		new exports.State(
			state.n,
			state.movesCount,
			getPegCopy(
				findPeg(state, referenceState.stk.name)
			),
			getPegCopy(
				findPeg(state, referenceState.tmp.name)
			),
			getPegCopy(
				findPeg(state, referenceState.res.name)
			)
		);

/**
 * @param {exports.State} state
 * @returns {exports.State}
 */
exports.toh2
	= state => {
		if (state.n === 0) {
			return getStateCopy(state);
		} else if (state.n === 1) {
			return new exports.State(
				state.n,
				state.movesCount + 1,
				new exports.Peg(
					state.stk.name,
					state.stk.disksArr.slice(1)
				),
				getPegCopy(state.tmp),
				new exports.Peg(
					state.res.name,
					[
						state.stk.disksArr[0]
					].concat(state.res.disksArr)
				)
			);
		} else {
			let newState
				= reorderPegs(
					exports.toh2(
						new exports.State(
							state.n - 1,
							state.movesCount,
							getPegCopy(state.stk),
							getPegCopy(state.res),
							getPegCopy(state.tmp)
						)
					),
					state
				);

			newState
				= exports.toh2(
					new exports.State(
						1,
						newState.movesCount,
						getPegCopy(newState.stk),
						getPegCopy(newState.tmp),
						getPegCopy(newState.res)
					)
				);

			newState
				= reorderPegs(
					exports.toh2(
						new exports.State(
							state.n - 1,
							newState.movesCount,
							getPegCopy(newState.tmp),
							getPegCopy(newState.stk),
							getPegCopy(newState.res)
						)
					),
					state
				);

			return newState;
		}
	};