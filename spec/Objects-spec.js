'use strict';

const isEq = require('../umd/isEq.min.js');

describe("Objects (equality):", () => {

	it("Comparing same object references", () => {
		const a = {
			'x': 10,
			'y': 20
		};
		const b = a;

		expect(isEq(a, b)).toBe(true);
	})

	it("Comparing two equal simple objects", () => {
		const a = {
			'x': 10,
			'y': 20,
			'isAlive': true,
			'power': 'Over 9000'
		};
		const b = {
			'x': 10,
			'y': 20,
			'isAlive': true,
			'power': 'Over 9000'
		};

		expect(isEq(a, b)).toBe(true);
	})

	it("Comparing two equal nested objects", () => {
		const a = {
			'x': 10,
			'y': 20,
			'isAlive': true,
			'power': 'Over 9000',
			'props': {
				'abilities': [ 'run', 'fight' ],
			}
		};
		const b = {
			'x': 10,
			'y': 20,
			'isAlive': true,
			'power': 'Over 9000',
			'props': {
				'abilities': [ 'run', 'fight' ],
			}
		};

		expect(isEq(a, b)).toBe(true);
	})

	it("Comparing two equal nested objects with external reference", () => {
		const abilities = [ 'run', 'fight' ];

		const a = {
			'x': 10,
			'y': 20,
			'isAlive': true,
			'power': 'Over 9000',
			'props': {
				abilities,
			}
		};
		const b = {
			'x': 10,
			'y': 20,
			'isAlive': true,
			'power': 'Over 9000',
			'props': {
				abilities
			}
		};

		expect(isEq(a, b)).toBe(true);
	})

	it("Comparing two equal cyclic objects", () => {
		const a = {};
		a.a = a;

		const b = { a };

		expect(isEq(a, b)).toBe(true);
	})

})