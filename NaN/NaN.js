function myIsNaN(value) {
    return typeof value !== 'number' && value == value;
}
console.log(myIsNaN(NaN));        
console.log(myIsNaN(123));        
console.log(myIsNaN('abc'));      
console.log(myIsNaN(undefined));  
console.log(myIsNaN(null));
console.log(myIsNaN(''));
console.log(myIsNaN('123'));
console.log(myIsNaN(2 + 'test'));
console.log(myIsNaN(true));    
console.log(myIsNaN(false));

