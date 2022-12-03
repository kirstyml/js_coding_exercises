import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix
} from "../challenges/exercise006.js";

describe("sumMultiples", () => {
    test("it throws an error if array not passed", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");
        expect(() => {
            sumMultiples("str");
        }).toThrow("arr is required");
        expect(() => {
            sumMultiples(0);
        }).toThrow("arr is required");
        expect(() => {
            sumMultiples({});
        }).toThrow("arr is required");
        expect(() => {
            sumMultiples(true);
        }).toThrow("arr is required");
    });

    test("it returns the sum of multiples of 3 and 5", () => {
        expect(sumMultiples([3, 1, 5])).toBe(8);
        expect(sumMultiples([5, 10, 2])).toBe(15);
        expect(sumMultiples([1, 1, 3, 3, 9])).toBe(15);
    });

    test("it accepts decimal numbers", () => {
        expect(sumMultiples([3.0, 1.2, 5])).toBe(8);
    })

    test("if there are no multiples of 3 and 5 returns zero", () => {
        expect(sumMultiples([2, 4, 1])).toBe(0);
    });

});

describe("isValidDNA", () => {
    test("it throws an error if str not passed", () => {
        expect(() => {
            isValidDNA();
        }).toThrow("str is required");
        expect(() => {
            isValidDNA(["C", "G"]);
        }).toThrow("str is required");
        expect(() => {
            isValidDNA(0);
        }).toThrow("str is required");
        expect(() => {
            isValidDNA({});
        }).toThrow("str is required");
        expect(() => {
            isValidDNA(true);
        }).toThrow("str is required");
    });
    test("returns true for a valid DNA string", () => {
        expect(isValidDNA("CGTA")).toBe(true);
        expect(isValidDNA("CGTATTTTAAAGCGC")).toBe(true);
    })

    test("is case sensitive ", () => {
        expect(isValidDNA("cgta")).toBe(false);
    })

    test("returns false for an invalid string", () => {
        expect(isValidDNA("CGATX")).toBe(false);
    })
});

describe("getComplementaryDNA", () => {
    test("it throws an error if str not passed", () => {
        expect(() => {
            getComplementaryDNA();
        }).toThrow("str is required");
        expect(() => {
            getComplementaryDNA(["C", "G"]);
        }).toThrow("str is required");
        expect(() => {
            getComplementaryDNA(0);
        }).toThrow("str is required");
        expect(() => {
            getComplementaryDNA({});
        }).toThrow("str is required");
        expect(() => {
            getComplementaryDNA(true);
        }).toThrow("str is required");
    });
    test("it throws an error if str passed is not valid DNA", () => {
        expect(() => {
            getComplementaryDNA("CGXT");
        }).toThrow("str must be a valid DNA sequence");
    })
    test("returns the complementary string for a valid DNA string", () => {
        expect(getComplementaryDNA("CGTA")).toBe("GCAT");
        expect(getComplementaryDNA("AAGCTGGTTTTGACGAC")).toBe("TTCGACCAAAACTGCTG");
    })
});

describe("isItPrime", () => {
    test("it throws an error if number not passed", () => {
        expect(() => {
            isItPrime();
        }).toThrow("n is required");
        expect(() => {
            isItPrime(["C", "G"]);
        }).toThrow("n is required");
        expect(() => {
            isItPrime("0");
        }).toThrow("n is required");
        expect(() => {
            isItPrime({});
        }).toThrow("n is required");
        expect(() => {
            isItPrime(true);
        }).toThrow("n is required");
    });
    test("it returns true when the number is prime", () => {
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(3)).toBe(true);
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(227)).toBe(true);
        expect(isItPrime(7919)).toBe(true);
    });
    test("it returns false when the number is not prime", () => {
        expect(isItPrime(22)).toBe(false);
        expect(isItPrime(228)).toBe(false);
        expect(isItPrime(7918)).toBe(false);
    });
    test("gives false for both 0, 1 and negative numbers", () => {
        expect(isItPrime(0)).toBe(false);
        expect(isItPrime(1)).toBe(false);
        expect(isItPrime(-17)).toBe(false);
    });
    test("handles decimal numbers", () => {
        expect(isItPrime(2.0)).toBe(true);
        expect(isItPrime(17.3)).toBe(false);
        expect(isItPrime(7.5)).toBe(false);
    });
});

describe("createMatrix", () => {
    test("it throws an error if number not passed", () => {
        expect(() => {
            createMatrix(undefined,"foo");
        }).toThrow("n is required");
        expect(() => {
            createMatrix(["C", "G"],"foo");
        }).toThrow("n is required");
        expect(() => {
            createMatrix("0","foo");
        }).toThrow("n is required");
        expect(() => {
            createMatrix({},"foo");
        }).toThrow("n is required");
        expect(() => {
            createMatrix(true,"foo");
        }).toThrow("n is required");
    });
    test("it throws an error if fill is not passed", () => {
        expect(() => {
            createMatrix(3);
        }).toThrow("fill is required");
    });
    test("it throws an error if n is not an integer", () => {
        expect(() => {
            createMatrix(3.4,"foo");
        }).toThrow("n must be an integer");
    });
    test("creates correct matrices", () => {
        expect(createMatrix(3,"foo")).toEqual([["foo","foo","foo"],["foo","foo","foo"],["foo","foo","foo"]]);
        expect(createMatrix(4,4)).toEqual([[4,4,4,4],[4,4,4,4],[4,4,4,4],[4,4,4,4]]);
        expect(createMatrix(4,{})).toEqual([[{},{},{},{}],[{},{},{},{}],[{},{},{},{}],[{},{},{},{}]]);
        expect(createMatrix(3,["foo"])).toEqual([[["foo"],["foo"],["foo"]],[["foo"],["foo"],["foo"]],[["foo"],["foo"],["foo"]]]);
    });
    test("deals with n is zero correctly", () => {
        expect(createMatrix(0,"foo")).toEqual([]);
    });
    test("deals with decimal integer", () => {
        expect(createMatrix(2.0, "foo")).toEqual([["foo", "foo"], ["foo", "foo"]]);
    })
});