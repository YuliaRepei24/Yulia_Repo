function myIsNaN(value) {
    return value !== value;
}

console.log(myIsNaN(NaN));        // true
console.log(myIsNaN(123));        // false
console.log(myIsNaN('abc'));      // false
console.log(myIsNaN(undefined));  // false
console.log(myIsNaN(null));       // false
console.log(myIsNaN(''));         // false
console.log(myIsNaN('123'));      // false
console.log(myIsNaN(2 + 'test')); // false
console.log(myIsNaN(true));       // false
console.log(myIsNaN(false));      // false
