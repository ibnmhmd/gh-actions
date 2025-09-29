"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SumNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return a + b;
};
exports.default = SumNumbers;
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
