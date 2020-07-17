/**
 * 	Note: it is yet not clear to me which index this algorithm returns in case
 * 		the element to find occurs multiple times in the array (is duplicated).
 * 		For details, see e.g. this section of the Wikipedia article about binary
 * 		search:
 * 		https://en.wikipedia.org/wiki/Binary_search_algorithm#Duplicate_elements
 *
 * 	BINARY_SEARCH (arr, elem, start, end)
 * 		if end < start
 * 		then return undefined
 * 		else
 * 			if equal(elem, arr[floor((start + end) / 2)])
 * 			then return floor((start + end) / 2)
 * 			else
 * 				if less(elem, arr[floor((start + end) / 2)])
 * 				then BINARY_SEARCH(
 * 					arr, elem, start, floor((start + end) / 2) - 1
 * 				)
 * 				else BINARY_SEARCH(
 * 					arr, elem, floor((start + end) / 2) + 1, end
 * 				)
 *
 * 	BINARY_SEARCH([1, 2, 3, 4, 5, 6, 7], 5, 0, 7)
 */

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