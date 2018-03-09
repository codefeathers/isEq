(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.isEq = f()}})(function(){var define,module,exports;return (function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

/**
 * UMD Module
 * ↘️↘️
 * @author Muthu Kumar <https://mkr.pw>
 * isEq(item1, item2 [, compareKeys])
 * @description Deep compares objects or arrays and returns boolean.
 * Supports Number, String, Boolean, Regexp, Objects, Arrays
 * @param {*} item1 - Object or Array to compare against.
 * @param {*} item2 - Object or Array to compare with.
 * @param {Array} [compareKeys] - Keys to compare against. Ignores other keys.
 */

const isEq = (item1, item2, compareKeys) => {

	// Returns false if different types are used.
	if (typeof item1 !== typeof item2) return false;

	// Arrays are of type object, hence let's go one further step
	// to prove type inequality
	if ((Array.isArray(item1)
		&& !Array.isArray(item2))
		|| ((Array.isArray(item2)
		&& !Array.isArray(item1))))
		return false;

	// Since types are already equal, let's find if items are equal.
	if ((typeof item1 === 'number') ||
		(typeof item1 === 'string') ||
		(typeof item1 === 'boolean') ||
		(item1 === null) ||
		(item1 === undefined)) {
		return (item1 === item2);
	};

	// 'NaN's are special. They aren't equal to each other.
	if (Number.isNaN(item1) && Number.isNaN(item2)) return true;

	// Regexp needs to be Stringified first before comparing equality
	if (item1 instanceof RegExp) return String(item1) === String(item2);

	// If none of the above conditions returned, then check if inputs are handlable
	if (typeof (item1) !== 'object' || typeof (item2) !== 'object')
		throw new Error('[isEq] Unhandleable input!');

	const item1Keys = Object.keys(item1);
	const item2Keys = Object.keys(item2);

	// If compare keys array is not given, let's check length of props
	// and check second array against first.
	if (!compareKeys) {
		compareKeys = item1Keys;
		if (item1Keys.length !== item2Keys.length) {
			return false;
		};
	};

	if(!(Array.isArray(compareKeys)))
		throw new Error('[isEq] third parameter should be an array of keys!');

	// Either both are empty objects or arrays, or compareArray is empty. Return true.
	if(compareKeys.length === 0) return true;

	// For each key in our reference...
	for (let KeyIndex in compareKeys) {

		let Key = compareKeys[KeyIndex];
		if (Array.isArray(item1[Key]) && Array.isArray(item2[Key])) {
			Key = KeyIndex;
		};

		// Inequality at this point can be because it's just comparing
		// two objects or arrays that may or may not be equivalent.
		if (item1[Key] !== item2[Key]) {

			if (typeof (item1[Key] === 'object') && typeof (item2[Key] === 'object') ||
				(Array.isArray(item1[Key]) && Array.isArray(item2[Key]))) {
				if (!isEq(item1[Key], item2[Key])) {
					return false;
				};
			} else {
				return false;
			};
		};
	};

	return true;
};

module.exports = isEq;
},{}]},{},[1])(1)
});