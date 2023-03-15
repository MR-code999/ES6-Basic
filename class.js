class support {
    name;
    address = 'bangladesh';
    phone = 4545142;
    location = 'barishal';
    constructor(name, address, phone, location) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.location = location;
    }
}
const review = new support('ali shorif', 'rajshahi', 524466512, 'bangladesh');
console.log(review);