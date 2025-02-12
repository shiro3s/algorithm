/**
 * @param {Array<number>} arr
 */
export const quickSort = (arr) => {
	if (arr.length <= 1) return arr;

	const middle = Math.floor(arr.length / 2);

	const left = [];
	const right = [];

	for (let i = 0; i < arr.length; i++) {
		if (i === middle) continue;

		if (arr[i] < arr[middle]) left.push(arr[i]);
		else right.push(arr[i]);
	}

	return [...quickSort(left), arr[middle], ...quickSort(right)];
};
