function romanNumeral(string) {
  debugger;
  const numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  while (string.length > 0) {
    const first = string[0];
    const second = string[1];
    if (string.length === 1) {
      total += numerals[first];
      string = string.slice(1);
    } else if (numerals[second] > numerals[first]) {
      total += numerals[second] - numerals[first];
      string = string.slice(2);
    } else {
      total += numerals[first];
      string = string.slice(1);
    }
  }
  return total;
}

if (require.main === module) {
  // add your own tests in here
  console.log("expecting 509");
  console.log(romanNumeral("DIX"));

  console.log("Expecting: 1");
  console.log(romanNumeral("I"));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral("IX"));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral("CDII"));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
/*assume all numerals are valid
create object representing all the roman numerals
initialize total to zero
while numeral length is bigger than zero
  if length is 1, add the value of that char to total
  otherwise, if the one immediately following is bigger, add (bigger minus smaller) to total. Then splice off first two chars.
  otherwise, just add the bigger one to total. then splice off first char
return total
*/
