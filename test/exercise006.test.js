import {
    sumMultiples
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
      expect(sumMultiples([3,1,5])).toBe(8);
      expect(sumMultiples([5,10,2])).toBe(15);
      expect(sumMultiples([1,1,3,3,9])).toBe(15);
    });

    test("it accepts decimal numbers", () => {
        expect(sumMultiples([3.0, 1.2, 5])).toBe(8);
    })
  
    test("if there are no multiples of 3 and 5 returns zero", () => {
      expect(sumMultiples([2,4,1])).toBe(0);
    });
  
  });