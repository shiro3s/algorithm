import { abs, add, div, mod, mul, pow, sqrt, sub } from "./basic";
import { describe, test, expect } from "bun:test";

describe("Basic Arithmetic Operations", () => {
	test("add", () => {
		const x = add(4, 2);

		expect(x).toEqual(6);
	});

	test("sub", () => {
		const x = sub(4, 2);
		expect(x).toEqual(2);
	});

	test("mul", () => {
		const x = mul(4, 2);
		expect(x).toEqual(8);
	});

	test("div", () => {
		const x = div(4, 2);
		expect(x).toEqual(2);
	});

	test("mod", () => {
		const x = mod(10, 3);
		expect(x).toEqual(1);
	});

	test("abs", () => {
		const x = abs(-4);
		expect(x).toEqual(4);
	});

	test("pow", () => {
		const x = pow(10, 2);
		expect(x).toEqual(100);
	});

	test("sqrt", () => {
		const x = sqrt(4);
		expect(x).toEqual(2);
	});
});
