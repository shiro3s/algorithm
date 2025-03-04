export const insertionSort = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		let currentIndex = i;

		while (
			!!arr[currentIndex - 1] &&
			arr[currentIndex] < arr[currentIndex - 1]
		) {
			const tmp = arr[currentIndex - 1];
			arr[currentIndex - 1] = arr[currentIndex];
			arr[currentIndex] = tmp;

			currentIndex -= 1;
		}
	}

	return arr;
};
