'use strict';

const isEq = require('../umd/isEq.min.js');

describe("Primitives (equality):", () => {

	it("Comparing two equal numbers", () => {
		const a = 10;
		const b = 10;

		expect(isEq(a, b)).toBe(true);
	})

	it("Comparing two equal strings", () => {
		const a = 'Hello!';
		const b = 'Hello!';

		expect(isEq(a, b)).toBe(true);
	})

	it("Comparing two equal booleans", () => {
		const a = true;
		const b = true;

		expect(isEq(a, b)).toBe(true);
	})

	it("Comparing two equal regexes", () => {
		const a = /$hello^/;
		const b = /$hello^/;

		expect(isEq(a, b)).toBe(true);
	})

	it("Comparing two nulls", () => {
		const a = null;
		const b = null;

		expect(isEq(a, b)).toBe(true);
	})

})

describe("Primitives (inequality):", () => {

	it("Comparing two inequal numbers", () => {
		const a = 10;
		const b = 0;

		expect(isEq(a, b)).toBe(false);
	})

	it("Comparing two inequal strings", () => {
		const a = 'Hello!';
		const b = 'Bye!';

		expect(isEq(a, b)).toBe(false);
	})

	it("Comparing two inequal booleans", () => {
		const a = true;
		const b = false;

		expect(isEq(a, b)).toBe(false);
	})

	it("Comparing two NaNs", () => {
		const a = NaN;
		const b = NaN;

		expect(isEq(a, b)).toBe(false);
	})

	it("Comparing null to undefined", () => {
		const a = null;
		const b = undefined;

		expect(isEq(a, b)).toBe(false);
	})

})