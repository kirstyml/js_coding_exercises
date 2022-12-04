import {
    sumDigits,
} from "../challenges/exercise007.js";

describe("sumDigits", () => {
    test("it throws an error if number not passed", () => {
        expect(() => {
            sumDigits();
        }).toThrow("n is required");
        expect(() => {
            sumDigits(["C", "G"]);
        }).toThrow("n is required");
        expect(() => {
            sumDigits("0");
        }).toThrow("n is required");
        expect(() => {
            sumDigits({});
        }).toThrow("n is required");
        expect(() => {
            sumDigits(true);
        }).toThrow("n is required");
    });
    test("returns the sum of the digits", () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(1234567)).toBe(28);
        expect(sumDigits(1000)).toBe(1);
    });
    test("sums digits of a decimal", () => {
        expect(sumDigits(12.3)).toBe(6);
        expect(sumDigits(1234.567)).toBe(28);
        expect(sumDigits(1.000)).toBe(1);  
    });
    test("sums digits of a negative", () => {
        expect(sumDigits(-12.3)).toBe(6);
        expect(sumDigits(-1234567)).toBe(28);
        expect(sumDigits(-1.000)).toBe(1);  
    });
});