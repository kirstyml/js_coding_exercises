export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  const nIndex = nums.indexOf(n);
  return nIndex > -1 && nIndex < (nums.length - 1) ? nums[nIndex + 1] : null;
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  const digits = str.split("");
  const count = digits.reduce((acc, curr) => {
    const currCount = acc[curr];
    return {
      ...acc,
      [curr]: currCount + 1
    }
  }, {0: 0, 1: 0});
  return count;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  const digits = n.toString().split("").reverse().join("");
  return parseInt(digits);
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  const flatArr = arrs.reduce((acc, curr) => acc.concat(curr), []);
  const sumFlatArr = flatArr.reduce((acc, curr) => acc + curr);
  return sumFlatArr;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  return arr.map((value, i) => {
    if(i === 0) {
      return arr[arr.length - 1];
    }
    if(i === arr.length - 1) {
      return arr[0];
    }
    return value;
  });
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  let needleFound = false;
  for (let key in haystack) {
    if (typeof haystack[key] === "string" && haystack[key].toLowerCase().includes(searchTerm.toLowerCase())) {
      needleFound = true;
      break;
    }
  }
  return needleFound;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};
