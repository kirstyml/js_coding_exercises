export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const smallNums = [];
  nums.forEach((num) => {
    if (num < 1) {
      smallNums.push(num);
    }
  });
  return smallNums;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  const namesBeg = [];
  names.forEach(name => {
    if (name[0] === char) {
      namesBeg.push(name);
    }
  });
  return namesBeg;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  const verbs = [];
  words.forEach(word => {
    if (word.slice(0, 3) === "to ") {
      verbs.push(word);
    }
  }
  )
  return verbs;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const integers = [];
  nums.forEach(num => {
    if (Number.isInteger(num)) {
      integers.push(num);
    }
  }
  )
  return integers;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  const cities = [];
  users.forEach(user => cities.push(user.data.city.displayName));
  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const roots = [];
  nums.forEach(num => roots.push(Math.round(Math.sqrt(num) * 100) / 100));
  return roots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  const sentencesCont = [];
  sentences.forEach(sentence => {
    if (sentence.toLowerCase().includes(str.toLowerCase())) {
      sentencesCont.push(sentence);
    }
  });
  return sentencesCont;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  const longestSides = [];
  triangles.forEach(triangle => longestSides.push(Math.max(...triangle)));
  return longestSides;
}
