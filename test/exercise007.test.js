import {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
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

describe("getScreentimeAlertList", () => {
    test("returns correct array of users", () => {
        expect(getScreentimeAlertList(
            [
                {
                    username: "beth_1234",
                    name: "Beth Smith",
                    screenTime: [
                        { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                        { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                        { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                        { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                    ]
                },
                {
                    username: "sam_j_1989",
                    name: "Sam Jones",
                    screenTime: [
                        { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                        { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                    ]
                },
            ],
            "2019-05-04"
        )).toEqual(["beth_1234"]);
    });
    test("returns empty array of users when none are over 100", () => {
        expect(getScreentimeAlertList(
            [
                {
                    username: "beth_1234",
                    name: "Beth Smith",
                    screenTime: [
                        { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                        { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                        { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                        { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 0 } },
                    ]
                },
                {
                    username: "sam_j_1989",
                    name: "Sam Jones",
                    screenTime: [
                        { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                        { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                    ]
                },
            ],
            "2019-05-04"
        )).toEqual([]);
    });
});

describe("hexToRGB", () => {
    test("provides correct rgb code for hex input", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
    })
});

describe("findWinner", () => {
    test("provides correct winner", () => {
        expect(findWinner(
            [
                ["X", "0", null],
                ["X", null, "0"],
                ["X", null, "0"]
            ]
        )).toBe("X");
        expect(findWinner(
            [
                ["0", "X", null],
                ["0", null, "X"],
                ["0", null, "X"]
            ]
        )).toBe("0");
        expect(findWinner(
            [
                ["X", "0", null],
                ["X", "X", "0"],
                ["0", null, "X"]
            ]
        )).toBe("X");
        expect(findWinner(
            [
                ["X", "X", "0"],
                ["X", "0", "X"],
                ["0", null, "0"]
            ]
        )).toBe("0");
        expect(findWinner(
            [
                ["X", "0", null],
                ["X", null, "0"],
                ["0", null, "X"]
            ]
        )).toBe(null);
    })
});