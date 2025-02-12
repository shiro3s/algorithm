/**
 * @param {Array<number>} array
 */
export const bubbleSort = (arr) => {
	let tmp;
	const len = arr.length;

	for (let i = 0; i < len - 1; i++) {
		for (let j = 0; j < len - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
			}
		}
	}

	return arr;
};
