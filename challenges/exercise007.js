/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
export const sumDigits = (n) => {
  if (n === undefined) throw new Error("n is required");
  if (typeof n !== "number") throw new Error("n is required");
  const digitsArr = Array.from(String(n).replace(/\.|-/g, ''), Number);
  return digitsArr.reduce((acc,curr) => acc + curr);
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
export const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (typeof start !== "number" || !Number.isInteger(start)) throw new Error("start must be an integer");
  if (end === undefined) throw new Error("end is required");
  if (typeof end !== "number" || !Number.isInteger(end)) throw new Error("end must be an integer");
  if (step === undefined) {
    return Array.from({ length: (end - start) + 1 }, (_, i) => start + i);
  }
  if ((end - start) % step !== 0) throw new Error("range is not divisble by step");
  return Array.from({ length: (end - start) / step + 1 }, (_, i) => start + i * step);
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
export const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  const usersToAlert = [];
  users.forEach((user) => {
    const usageForDate = user.screenTime.find(stObj => stObj.date === date) ? user.screenTime.find(stObj => stObj.date === date).usage : {};
    let totalUsage = 0;
    for (let key in usageForDate) {
      totalUsage += usageForDate[key];
    }
    if (totalUsage > 100) {
      usersToAlert.push(user.username);
    }
  });
  return usersToAlert;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
export const hexToRGB = (hexStr) => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  const red = parseInt(hexStr.slice(1,3), 16);
  const green = parseInt(hexStr.slice(3,5), 16);
  const blue = parseInt(hexStr.slice(5,7), 16);
  return `rgb(${red},${green},${blue})`;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
export const findWinner = (board) => {
  if (board === undefined) throw new Error("board is required");
  // need coordinates fir X and 0 positions
  const coordsX = [];
  const coords0 = [];
  board.forEach((row,i) => {
    row.forEach((space, j) => {
      if(space === "X") {
        coordsX.push({ r: i, c: j});
      }
      if(space === "0") {
        coords0.push({ r: i, c: j});
      }
    })
  });

  const hasDiagonal = (coords) => {
    if (coords.filter(coord => coord.r === coord.c).length === 3) {
      return true;
    }
    if (coords.filter(coord => {
      if(coord.r === 1 && coord.c === 1) {
        return true;
      }
      if(coord.r === 2 && coord.c === 0) {
        return true;
      }
      if(coord.r === 0 && coord.c === 2) {
        return true;
      }
      return false;
    }).length === 3) {
      return true;
    }
    return false;
  }

  for (let i = 0; i < 3; i++) {
    if (coordsX.filter(coord => coord.r === i).length >= 3 || coordsX.filter(coord => coord.c === i).length >= 3 ||hasDiagonal(coordsX) ) {
      return "X";
    }
    if (coords0.filter(coord => coord.r === i).length >= 3 || coords0.filter(coord => coord.c === i).length >= 3 || hasDiagonal(coords0)) {
      return "0";
    }
    return null;
  }
};
