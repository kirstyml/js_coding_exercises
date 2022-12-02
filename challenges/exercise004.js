export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const smallNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      smallNums.push(nums[i]);
    }
  }
  return smallNums;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  const namesBeg = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i][0] === char) {
      namesBeg.push(names[i]);
    }
  }
  return namesBeg;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  const verbs = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].slice(0,3) === "to ") {
      verbs.push(words[i]);
    }
  }
  return verbs;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const integers = [];
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) {
      integers.push(nums[i]);
    }
  }
  return integers;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  const cities = [];
  for (let i = 0; i < users.length; i++) {
    cities.push(users[i].data.city.displayName);
  }
  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const roots = [];
  for (let i = 0; i < nums.length; i++) {
    roots.push(Math.round(Math.sqrt(nums[i])*100) / 100);
  }
  return roots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}
