/* NORMAL */

/* const Book = {
    name: 'programming shikar boi',
    price: 600,
    color: 'yellow',
    pages: 200
};
const name = Book.name;
const color = Book.color;
const price = Book.price;
const pages = Book.pages;
console.log(price); */



/* DISTRUCTURING */

/* const product = {
    name: 'programing sekhar boi',
    color: 'yellow',
    price: 900,
    pages: 468
}
const { name, color, price, pages } = product;
console.log(pages); */





/* practice distructranig */

/* const apple = {
    address: 'rajshahi',
    warhouse: 'bhola',
    price: 900,
    waight: 3000
}
const { address, warhouse, price, waight } = apple;
console.log(price); */

/* Nasted object */

const company = {
    name: 'web galary',
    ceo: {
        name: 'ali shorif',
        age: 25,
        address: 'rajshahi'
    },
    web: {
        work: 'website developement',
        employe: 3353,
        tech: {
            first: 'html',
            second: 'css',
            frameWork: 'bootstrap, react',
            programingLanguage: 'javascript, python, java, c++,',
        }
    }
}

const reply = company?.web?.tech?.second;

console.log(reply);