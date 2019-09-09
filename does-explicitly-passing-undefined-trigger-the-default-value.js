// Testing if explicitly passing `undefined` to a function will still trigger the default value
// I'm almost certain it will, but it doesn't hurt to be sure!
// Result: it does trigger the default value

function test(a = 123) {
  return a;
}

const value = test(undefined);
if (value === undefined) {
  console.log("explicit undefined is used")
}
else {
  console.log("default value is used");
}
