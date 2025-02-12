import { quickSort } from "./quick_sort";
import { test, expect } from "bun:test";

test("Quick Sort", () => {
	const array = [64, 34, 25, 12, 22, 7, 86];
	const sortedArray = quickSort(array);

	expect(sortedArray).toEqual([7, 12, 22, 25, 34, 64, 86]);
});
