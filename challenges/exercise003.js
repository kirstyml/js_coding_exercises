export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  return nums.map(num => num ** 2);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  return words.reduce((acc, curr) => acc + curr[0].toUpperCase() + curr.slice(1));
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  return people.reduce((acc, curr) => acc + curr.subjects.length, 0);
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
  const itemsInclIngredient = menu.filter(item => item.ingredients.includes(ingredient));
  return itemsInclIngredient.length > 0;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  const appearInBoth = arr1.filter(value => arr2.includes(value));
  const appearInBothNoDups = appearInBoth.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      return [...acc, curr];
    }
    return acc;
  }, []);
  return appearInBothNoDups.sort((a, b) => a - b);
}
