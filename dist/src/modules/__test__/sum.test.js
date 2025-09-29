"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = __importDefault(require("../sum"));
describe('Test Sum module', () => {
    it('expects SumNumbers function to be defined', () => {
        expect(sum_1.default).toBeDefined();
    });
    it('expects SumNumbers to be a function', () => {
        expect(typeof sum_1.default).toBe('function');
    });
    it('expects SumNumbers to return number', () => {
        expect(typeof (0, sum_1.default)(1, 2)).toBe('number');
    });
    it('adds 1 + 2 to equal 3', () => {
        expect((0, sum_1.default)(1, 2)).toBe(3);
    });
    it('adds 2 + 3 to equal 5', () => {
        expect((0, sum_1.default)(2, 3)).toBe(5);
    });
    it('expects SumNumbers to throw error if a non-number is passed', () => {
        expect(() => { (0, sum_1.default)(1, 'a'); }).toThrow();
    });
    it('expects SumNumbers to throw specific error if a non-number is passed', () => {
        let _error = '';
        try {
            (0, sum_1.default)(1, 'a');
        }
        catch (error) {
            _error = error.message;
        }
        expect(_error).toBe('Both arguments must be numbers');
    });
});
