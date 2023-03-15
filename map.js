const numbers = [5, 5, 6, 9, 8, 9, 6, 3, 4, 6, 7, 4];
/* for (const number of numbers) {
    console.log(number);
} */

/* const dobble = number => number * 2;
const output = numbers.map(dobble);
console.log(output); */

// numbers.map(number => console.log(number))


const products = [
    { name: 'shirt', price: 542, color: 'yellow' },
    { name: 't-shirt', price: 352, color: 'black' },
    { name: 'shoe', price: 984, color: 'green' }
];
const productName = products.map(product => product);
console.log(productName);