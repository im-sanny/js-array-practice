// Checking if it's an Array
// Instructions:
// Create different variables, each containing either an array or a non-array value.
// Now use isArray to check if each variable is an array.
// Print a message to the console indicating whether each variable is an array or not.

const book=['Three Musketers'];
const fruit= 'banna';

console.log(Array.isArray(book));
console.log(Array.isArray(fruit));

if(Array.isArray(book)){
    console.log('its a great book to read')
}
else{
    console.log('banana is delicius');
}


