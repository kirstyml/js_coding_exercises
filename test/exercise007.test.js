import {
    sumDigits,
    createRange
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

describe("createRange", () => {
    test("it throws an error if start not passed", () => {
        expect(() => {
            createRange();
        }).toThrow("start is required");
        expect(() => {
            createRange(["C", "G"]);
        }).toThrow("start must be an integer");
        expect(() => {
            createRange("0");
        }).toThrow("start must be an integer");
        expect(() => {
            createRange({});
        }).toThrow("start must be an integer");
        expect(() => {
            createRange(true);
        }).toThrow("start must be an integer");
        expect(() => {
            createRange(3.2, 3, 3);
        }).toThrow("start must be an integer");
    });
    test("it throws an error if end not passed", () => {
        expect(() => {
            createRange(3);
        }).toThrow("end is required");
        expect(() => {
            createRange(3, ["C", "G"]);
        }).toThrow("end must be an integer");
        expect(() => {
            createRange(3, "0");
        }).toThrow("end must be an integer");
        expect(() => {
            createRange(3, {});
        }).toThrow("end must be an integer");
        expect(() => {
            createRange(3, true);
        }).toThrow("end must be an integer");
        expect(() => {
            createRange(3, 3.2, 3);
        }).toThrow("end must be an integer");
    });
    test("creates range for numbers given", () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
        expect(createRange(3, 12, 3)).toEqual([3, 6, 9, 12]);
    });
    test("creates range when no step provided", () => {
        expect(createRange(3, 11)).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11]);
    });
    test("handles situation where length of array is not divisble by step", () => {
        expect(() => {
            createRange(3, 11, 3)
        }).toThrow("range is not divisble by step");
        expect(() => {
            createRange(3, 12, 2)
        }).toThrow("range is not divisble by step");
    });
});